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
  selector: 'app-create-info',
  templateUrl: './create-info.component.html',
  styleUrls: ['./create-info.component.scss']
})
export class CreateInfoComponent implements OnInit {
  uploadPercent: Observable<number>;
  downloadURL: Observable<string | null>;
  imageUrls:  string[] = [];
  imageUrl: string;
  documentUrl: string;

  constructor(private db: AngularFirestore, private storage: AngularFireStorage) { }

  ngOnInit() {
  }

  create(form: NgForm){
    let uuid = UUID.UUID();

    console.log('form', form.value);
    console.log('imageUrls', this.imageUrls);

    this.db.collection("obavjestenja").doc(uuid).set({
      id: uuid,
      autor: "administrator",
      naslov: form.value.naslov,
      opis: form.value.opis,
      datum: moment().toISOString(),
      brojKlikova: 0,
      slika: this.imageUrl,
      dokument: this.documentUrl,
  })
  .then(function() {
      console.log("Document successfully written!");
  })
  .catch(function(error) {
      console.error("Error writing document: ", error);
  });
  }

  uploadFile(event, doc) {
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
          this.downloadURL.subscribe(val => {
            if (!doc) {
              console.log("1", val);
              this.imageUrl = val;
            } else {
              console.log("2", val);
              this.documentUrl = val
            }
          })
        } )
     )
    .subscribe()
  }

}
