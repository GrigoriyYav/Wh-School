import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { User } from '../interfaces/user';
import { HttpService } from 'src/app/services/http.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: any;
  tokens: Array<string> = [];

  constructor(public afs: AngularFirestore,  public afAuth: AngularFireAuth, public router: Router, private httpService: HttpService) {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.httpService.getUserTokens().subscribe((value) => {
          this.tokens = value.data
        });
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user')!);
      } else {
        this.tokens = []
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
      this.router.navigateByUrl('/book');
    } catch (error: any) {
      window.alert(error.message);
    }
  }

  async SignOut() {
    await this.afAuth.signOut();
    localStorage.removeItem('user');
    this.router.navigateByUrl('auth/login');
  }

  get userTokens():Array<string>{
   return this.tokens
  }

  get isLoggedIn():boolean {
    if(localStorage.getItem('user') == 'null' || localStorage.getItem('user') == ''){
      return false;
    } else {
      return true
    }
  }

  get userState(){
    if(this.userData.providerData[0].displayName == null){
      return this.userData.email
    } else {
      return this.userData.displayName
    }  

  }
}