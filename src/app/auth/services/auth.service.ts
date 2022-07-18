import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { User } from '../interfaces/user';
import { getAuth, updateProfile } from "firebase/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: any; // Save logged in user data

  constructor(public afs: AngularFirestore,  public afAuth: AngularFireAuth, public router: Router) {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user')!);
      } else {
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user')!);
      }
    });
  }

  async LogIn(userData: User) {
    try {
      const result = await this.afAuth
        .signInWithEmailAndPassword(userData.email, userData.password);
      this.router.navigateByUrl('/book');
    } catch (error : any) {
      window.alert(error.message);
    }
  }

  async SignUp(userData: User) {
    try {
      const result = await this.afAuth
        .createUserWithEmailAndPassword(userData.email, userData.password);
      if(result.user){
        await result.user.updateProfile({
          displayName: userData.name,
        });
      console.log('displayname setted', result.user.displayName);
      }
    } catch (error: any) {
      window.alert(error.message);
    }
  }

  async SignOut() {
    await this.afAuth.signOut();
    localStorage.removeItem('user');
    this.router.navigate(['login']);
  }
}
