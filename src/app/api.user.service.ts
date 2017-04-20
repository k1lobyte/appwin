import { User } from './user';
import { Injectable } from '@angular/core';
import { Headers, Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class UserService {

  private headers = new Headers(
    {
      'Accept': 'application/json',
      'X-Requested-By': 'Angular 2'
    }
  );
  private serviceURL = 'http://rehket.asuscomm.com:3000/employee';  // URL to web api

  constructor(private http: Http) { }

  getUsers(): Promise<User[]> {
    let res = this.http.get(this.serviceURL)
      .toPromise()
      .then(response => response.json() as User[])
      .catch(this.handleError);

    return res;
  }
  getUsersByAccessLevel(accessLevel: string): Promise<User[]> {
    return this.getUsers().then(users => users.filter(user => user.accessLevel === accessLevel));
  }

  getUsersByAccessLevelAndBusiness(businessid: string, accessLevel: string): Promise<User[]> {
    return this.getUsers().then(users => users.filter(user => user.company_id === businessid && user.accessLevel === accessLevel));
  }

  getUser(id: string): Promise<User> {
    return this.getUsers().then(users => users.find(user => user.id === id));
  }

  getLoginUser(username: string, password: string): Promise<User> {
    return this.getUsers().then(users => users.find(user =>
      (user.userName === username || user.email === username) && user.password === password));
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
