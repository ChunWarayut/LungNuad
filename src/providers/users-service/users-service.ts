import { Injectable } from '@angular/core';
import firebase from 'firebase'


/*
  Generated class for the UsersServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsersServiceProvider {

  constructor() {  }

  
  loginUserService(email: string, password: string): any {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }

}
