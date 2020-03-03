import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import * as moment from 'moment';
import { UUID } from 'angular2-uuid';
import { AngularFireStorage } from '@angular/fire/storage';
import 'firebase/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.scss']
})
export class CreateArticleComponent implements OnInit {
  uploadPercent: Observable<number>;
  downloadURL: Observable<string | null>;
  imageUrls:  string[] = [];

  constructor(private db: AngularFirestore, private storage: AngularFireStorage) { }

  ngOnInit() {
  }

  create(form: NgForm){
    let uuid = UUID.UUID();

    console.log('form', form.value);
    console.log('imageUrls', this.imageUrls);

    this.db.collection("clanci").doc(uuid).set({
      id: uuid,
      autor: "administrator",
      naslov: form.value.naslov,
      opis: form.value.opis,
      datum: moment().toISOString(),
      brojKlikova: 0,
      galerija: this.imageUrls
  })
  .then(function() {
      console.log("Document successfully written!");
  })
  .catch(function(error) {
      console.error("Error writing document: ", error);
  });
  }

  uploadFile(event) {
    let uuid = UUID.UUID();
    console.log('ttttt')
    const file = event.target.files[0];
    const filePath = uuid;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);

    // observe percentage changes
    this.uploadPercent = task.percentageChanges();
    this.uploadPercent.subscribe(val => console.log('procenat', val))
    // get notified when the download URL is available
    task.snapshotChanges().pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          this.downloadURL.subscribe(val => this.imageUrls = [...this.imageUrls, val])
        } )
     )
    .subscribe()
  }

}
