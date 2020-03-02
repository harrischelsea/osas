import { Component, OnInit } from '@angular/core';
// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
    firebaseConfig = {
    apiKey: "AIzaSyAMvd7U_hhyUOQJ-90ZMrj2KAnSwkQjDcs",
    authDomain: "test-ea2c1.firebaseapp.com",
    databaseURL: "https://test-ea2c1.firebaseio.com",
    projectId: "test-ea2c1",
    storageBucket: "test-ea2c1.appspot.com",
    messagingSenderId: "1038478609619",
    appId: "1:1038478609619:web:b4e80173b301679dd85826"
  };
  database;

  constructor() { }

  ngOnInit() {
    // Initialize Firebase
    firebase.initializeApp(this.firebaseConfig);
    this.database = firebase.database()

    firebase.database().ref('/clanci/').once('value').then(function(snapshot) {
      console.log('snapshot', snapshot.val());
      // ...
    });

    this.writeNewPost();
  }

  writeNewPost() {
    console.log(123131);
    // A post entry.
    var postData = {
      autor: "administrator",
      id: "test",
      naslov: "naslov",
      slika: "",
      vrijeme: "",
    };
  
    // Get a key for a new Post.
    var newPostKey = firebase.database().ref().child('posts').push().key;
    postData.id = newPostKey;
  
    // Write the new post's data simultaneously in the posts list and the user's post list.
    var updates = {};
    updates['/clanci/' + newPostKey] = postData;
  
    return firebase.database().ref().update(updates);
  }

}
