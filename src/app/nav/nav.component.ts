import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  isLogin:boolean = false;
  auth =getAuth()
  constructor(private router :Router){
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
      this.isLogin = true
      
      } else {
      this.isLogin = false
       
      }
    });
  }
  login(){
    this.router.navigateByUrl("sign-up")
  }
  signOut(){
    this.router.navigateByUrl("sign-up")
    this.auth.signOut();
  }
}
