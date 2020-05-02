import { Injectable } from '@angular/core';
import { CanActivate, Router } from  "@angular/router";
import { AngularFireAuth } from  "@angular/fire/auth";
import { User } from  'firebase';
import { Observable } from "rxjs"; 
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

@Injectable({
  providedIn: 'root'
})
export class AuthServicen implements CanActivate{
  email: string;
  password: string;
  user:  User;
  constructor(public  auth:  AngularFireAuth, public  router:  Router) {}
  
    canActivate(): Observable<true> {
      return: Observable.from(this.auth)
      .take(1)
      .map(state => !!state)
      .do(authenticated => {
        if(!authenticated) {
          this.router.navigate(['/connexion']);
        } 
      })
    }
}
