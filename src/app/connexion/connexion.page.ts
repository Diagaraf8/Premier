import { Component, OnInit } from '@angular/core';
import { User, } from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import {  AuthProviders,  AuhtMethods } from 'angularfire2';

import { auth } from 'firebase/app';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { moveIn } from '../router.animations';


@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
  animations: [moveIn()],
  host: {'[@moveIn]': ''}
  
})
export class ConnexionPage implements OnInit {
  user:  User;
  email: string;
  password: string;
  state: string ='';

  
  
  error: any;
  
  constructor( public af:AngularFireAuth, private router: Router) {
    
    this.af.auth.subscribe(auth => {
      if(auth) {
        this.router.navigateByUrl('/tayeur');
      }
    }); 
   
}
  onSubmit(formData) {
    if(formData.valid) {
      this.af.auth.login({
        email: formData.value.email, 
        password: formData.value.password
      },
        {
          provider: AuthProviders.Password,
          method: AuhtMethods.Password,
        }).then(
          (success) => {
            this.router.navigate(['/tayeur']);
          }).catch(
            (err) => {
              this.error = err;
            })
        }
  }
  ngOnInit() {
  }
}
