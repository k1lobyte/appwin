import { User }   from './user';
<<<<<<< HEAD
import { UserService }   from './user.service';
import { Injectable } from '@angular/core';
//import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AuthService{
=======
import { UserService }   from './api.user.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AuthService {
>>>>>>> 86fc2b01b869d28fd4e979ab2820f1100fe76ab6
  private subject = new Subject<any>();

  constructor(
    private userService: UserService,
    //private http: Http
  ) {}

   login(username: string, password: string) {
       /*return this.http.post('/api/authenticate', JSON.stringify({ username: username, password: password }))
           .map((response: Response) => {
               // login successful if there's a jwt token in the response
               let user = response.json();
               if (user && user.token) {
                   // store user details and jwt token in local storage to keep user logged in between page refreshes
                   localStorage.setItem('currentUser', JSON.stringify(user));
               }
           });
        */

        return this.userService.getLoginUser(username, password)
        .then(
            user => {
<<<<<<< HEAD
              var jsonUser = JSON.stringify(user);
=======
              let jsonUser = JSON.stringify(user);
>>>>>>> 86fc2b01b869d28fd4e979ab2820f1100fe76ab6
              localStorage.setItem('currentUser', jsonUser);
              this.subject.next({ userData: jsonUser });
          });
   }

   logout() {
       // Remove user from local storage to log user out
       localStorage.removeItem('currentUser');
       this.subject.next();
   }

   getUser(): Observable<any> {
        return this.subject.asObservable();
   }
}
