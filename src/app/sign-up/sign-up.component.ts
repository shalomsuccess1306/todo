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
  
  
  // logout(){
  //   this.auth.signOut();
  // }
  
}
