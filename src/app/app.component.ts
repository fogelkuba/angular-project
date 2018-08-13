import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  // title = 'app';
  loadedFeature = 'recipe';

  ngOnInit() {
    firebase.initializeApp({
        apiKey: "AIzaSyDYZ225rGIc3Liab5y7ieteqfRh_vjfkxU",
        authDomain: "ng-recipe-book-f046d.firebaseapp.com",
    });
  }

  onNavigate(feature: string){
    this.loadedFeature = feature;
  }
}
