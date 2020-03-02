import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { firestore } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private db: AngularFirestore) { }

  getArticles() {
    return this.db.collection('clanci').valueChanges();
  }

  getArticleById(id: string) {
    return this.db.collection('clanci/').doc(id).valueChanges();
  }

  updateArticle(id: string) {
    var docRef = this.db.collection("clanci").doc(id);
    const increment = firestore.FieldValue.increment(1);
    return docRef.update({
        brojKlikova: increment
    })
    .then(function() {
        console.log("Document successfully updated!");
    })
    .catch(function(error) {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
    });
  }

  getInformations() {
    return this.db.collection('obavjestenja').valueChanges();
  }

}
