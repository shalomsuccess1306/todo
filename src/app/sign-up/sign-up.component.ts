import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { getAuth, onAuthStateChanged } from "firebase/auth";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {



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
        this.authSer.login(email,password)
     this.signUpForm.reset();
     this.router.navigateByUrl("dashboard")
      }
    }, 1000);
    if(this.signUpForm.status == "INVALID"){
      alert("your login credential is invalid");
    }
 
  
    }
   
    
    // 
    // onAuthStateChanged(auth, (user) => {
    //   if (user) {
      
    //     const uid = user.uid;
    //   console.log("user id",uid);
      
    //   } else {
    //     console.log("user logout");
    //   }
    // });
    // this.auth = getAuth();
    // console.log("form", this.signUpForm);
 
    // signInWithPopup(this.auth,this.provider).then((res)=>{
    //   const credential = GoogleAuthProvider.credentialFromResult(res);
    //   const token = credential.accessToken;
    //    // The signed-in user info.
    // const user = res.user;
    // console.log("user", user)
    // })
  
  
  logout(){
    this.auth.signOut();
  }
  
}
