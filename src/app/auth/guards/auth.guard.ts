import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  accessToken: string = "";

  constructor(
    public snackBar: MatSnackBar,
    private auth: AuthService
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const loginStatus = this.auth.isLoggedIn;
    this.accessToken = route.data['accessToken'];
    
    if (loginStatus) {
      const userTokens = this.auth.userTokens;
      if(userTokens.includes(this.accessToken)){
        return true;
      } else {
        this.openSnackBar(`No access to the page ${state.url.slice(1)}`,'OK')
        //window.alert(`No access to the page ${state.url.slice(1)}`);
        return false;
      }       
    } else {
      this.openSnackBar(`Please login to get access to the page ${state.url.slice(1)}`,'OK')
      //window.alert(`Please login to get access to the page ${state.url.slice(1)}`);
      return false;
    }
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
    });
  }
}
