import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

// import { AuthService } from "./auth/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';

  // constructor(private authService: AuthService) {}

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyAwdMUgjLic2aCyfrbUcbBBlh_d_RAoWS8",
      authDomain: "ng-recipe-book-1d129.firebaseapp.com"
    })
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
