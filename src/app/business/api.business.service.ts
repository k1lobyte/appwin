import { Business } from './business';

import { Injectable } from '@angular/core';
import { Headers, Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class BusinessService {
  private headers = new Headers(
    {
      'Accept': 'application/json',
      'X-Requested-By': 'Angular 2'
    }
  );
  private businessURL = 'http://rehket.asuscomm.com:3000/company';  // URL to web api

  constructor(private http: Http) { }

  getBusinesses(): Promise<Business[]> {
    let res = this.http.get(this.businessURL)
      .toPromise()
      .then(response => response.json() as Business[])
      .catch(this.handleError);

    return res;
  }

  getBusiness(id: string): Promise<Business> {
    let url = this.businessURL + '/' + id;
    console.log(url);
    return this.http.get(url)
      .toPromise().then(response => response.json() as Business)
      .catch(this.handleError);


  }

  delete(id: string): Promise<void> {
    const url = `${this.businessURL}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
