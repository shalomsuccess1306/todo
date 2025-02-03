import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword} from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  provider = new GoogleAuthProvider();
  app = initializeApp(environment.firebaseConfig);
  analytics = getAnalytics(this.app);
  db = getFirestore(this.app)
  auth = getAuth(this.app)

  constructor() { }

  async login(email:string, password:string){
    await signInWithEmailAndPassword(this.auth, email, password)
  }

  async signUp(email:string, password:string){
      await createUserWithEmailAndPassword(this.auth,email,password)

  }
}
