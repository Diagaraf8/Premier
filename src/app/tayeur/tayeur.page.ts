import { Component, OnInit,  HostBinding } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';
import { Router } from  "@angular/router";
import { moveIn, fallIn, moveInLeft } from '../router.animations';


@Component({
  selector: 'app-tayeur',
  templateUrl: './tayeur.page.html',
  styleUrls: ['./tayeur.page.scss'],
  animations: [moveIn(), fallIn(), moveInLeft()],
  host: {'[@moveIn]': ''}
})
export class TayeurPage implements OnInit {
  name: any;
  state: string = '';

  constructor( public af:AngularFireAuth, private router: Router ) {
    this.af.auth.subscribe(auth => {
      if(auth) {
        this.name = auth;
      }
    }); 
   
   }
   logout(){
     this.af.auth.logout();
     this.router.navigateByUrl('/home');
   }

  ngOnInit() {
  }

}
