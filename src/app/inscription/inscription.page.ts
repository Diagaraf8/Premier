import { Component, OnInit, HostBinding } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';
import { Router } from  "@angular/router";
import { moveIn, fallIn } from '../router.animations';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
  animations: [moveIn(), fallIn()],
  host: {'[@moveIn]': ''}
})
export class InscriptionPage implements OnInit {
  user: User;
  nom: string;
  telephone: number;
  email: string;
  password: string;
  state: string = '';

  error: any;

  constructor( public af:AngularFireAuth, private router: Router) { }
  onSubmit(formData) {
    if(formData.value) {
      console.log(formData.value);
      this.af.auth.createUser({
        nom: formData.value.nom,
        telephone: formData.value.telephone, 
        email: formData.value.email, 
        password: formData.value.password
      }).then(
        (success) => {
          this.router.navigate(['/connexion'])
        }).catch(
          (err) => {
            this.error = err;
          })
    }
  }
 

  ngOnInit() {
  }

}
