import { Component, OnInit } from '@angular/core';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {environment} from '../environments/environment'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { ToDo, TodoServiceService } from './todo-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'todoApp';
  public signUpForm : FormGroup = new FormGroup({});
  newTask: string = '';


  constructor(private fb : FormBuilder){
    this.signUpForm = this.fb.group({
      email:[null, [Validators.email, Validators.required]],
      password:[null, [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!]).{8,}$/)]]
    })

  }

  ngOnInit(){
    
  }
  
  submit(){
  console.log("form", this.signUpForm);
  
  }
}
