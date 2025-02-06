import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { getAuth, onAuthStateChanged } from "firebase/auth";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  newTask: string = '';
  auth = getAuth();
  
  
    public signUpForm : FormGroup = new FormGroup({});
  
   constructor(private fb : FormBuilder, private router : Router, private authSer : AuthService){
    const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
    
      const uid = user.uid;
    console.log("user id",uid);
    
    } else {
      console.log("user logout");
    }
  });
  
    this.signUpForm = this.fb.group({
      
      email:[null, [Validators.email, Validators.required]],
      password:[null, [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!]).{8,}$/)]]
    })
   }
  
  submit(){
    const auth = getAuth();
    setTimeout(()=>{
      if(this.signUpForm.status == "VALID"){
        let email = this.signUpForm.controls['email'].value;
        let password = this.signUpForm.controls['password'].value
        this.authSer.login(email,password).then((res)=>{
          console.log(res)
        })
     this.signUpForm.reset();
     this.router.navigateByUrl("dashboard")
      }
    }, 1000);
    if(this.signUpForm.status == "INVALID"){
      alert("your login credential is invalid");
    }
 
  
    }
}
