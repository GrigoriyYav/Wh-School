import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  accessToken: string = "";

  constructor(
    private router: Router,
    private auth: AuthService
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const loginStatys = this.auth.isLoggedIn;
    this.accessToken = route.data['accessToken'];
    
    if (loginStatys) {
      const userTokens = this.auth.userTokens;
      if(userTokens.includes(this.accessToken)){
        return true;
      } else {
        window.alert(`No access to the page ${state.url.slice(1)}`);
        return false;
      }       
    } else {
      window.alert(`Plese login to get accses to the page ${state.url.slice(1)}`);
      return false;
    }
  }

}
