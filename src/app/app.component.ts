import { Component, OnInit } from '@angular/core';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {environment} from '../environments/environment'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'todoApp';
  public signUpForm : FormGroup = new FormGroup({});
  newTask: string = '';
 auth:any;

  constructor(private fb : FormBuilder){
    this.signUpForm = this.fb.group({
      email:[null, [Validators.email, Validators.required]],
      password:[null, [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!]).{8,}$/)]]
    })

  }

  ngOnInit(){
       // Initialize Firebase
    const app = initializeApp(environment.firebaseConfig);
     const analytics = getAnalytics(app);
  }
  
  submit(){
    this.auth = getAuth();
    console.log("form", this.signUpForm);
    let email = this.signUpForm.controls['email'].value;
    let password = this.signUpForm.controls['password'].value
    createUserWithEmailAndPassword(this.auth,email,password).then((res)=>{
      console.log("user credentials",res.user)
    })
  
  }
}
