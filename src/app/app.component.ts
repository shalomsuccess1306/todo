import { Component, OnInit } from '@angular/core';

import {environment} from '../environments/environment'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore"; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'todoApp';
  

  constructor(private fb : FormBuilder){
   

  }

  ngOnInit(){
   
       // Initialize Firebase
    const app = initializeApp(environment.firebaseConfig);
     const analytics = getAnalytics(app);
  }
  

  submit(){

}
}
