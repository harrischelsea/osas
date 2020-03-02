import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import * as moment from 'moment';
import 'moment/locale/hr';
moment.locale('hr')

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData: Observable<firebase.User>;

  constructor(private angularFireAuth: AngularFireAuth, public router: Router) {
    this.userData = angularFireAuth.authState;
  }

  public isAuthenticated(): boolean {
    const isLogged = localStorage.getItem('login');
    const loginDate = localStorage.getItem('login-date');
    // Check whether the token is expired and return
    // true or false
    if(loginDate && moment().diff(loginDate, 'minutes') > 30){
      this.SignOut();
      return false;
    }
    return isLogged == null ? false : true;
  }

  SignIn(email: string, password: string) {
    this.angularFireAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        console.log('Successfully signed in!', res);

        localStorage.setItem('login-date', moment().toISOString());
        localStorage.setItem('login', res.user.uid);
        this.router.navigate(['/admin']);
      })
      .catch(err => {
        console.log('Something is wrong:',err.message);
      });
  }

  /* Sign out */
  SignOut() {
    localStorage.removeItem('login');
    localStorage.removeItem('login-date');

    this.angularFireAuth
      .auth
      .signOut();
    
      this.router.navigate(['/']);
  }  

}
