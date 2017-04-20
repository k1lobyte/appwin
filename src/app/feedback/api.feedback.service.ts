import { Feedback } from './feedback';
import { Injectable } from '@angular/core';
import { Headers, Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class FeedbackService {

  private headers = new Headers(
    {
      'Accept': 'application/json',
      'X-Requested-By': 'Angular 2'
    }
  );
  private businessURL = 'http://rehket.asuscomm.com:3000/company/';  // URL to web api

  constructor(private http: Http) { }


  getFeedback(id: string): Promise<Feedback[]> {
    let res = this.http.get(this.businessURL)
      .toPromise()
      .then(response => response.json() as Feedback[])
      .catch(this.handleError);

    return res;
  }

  getFeedbackByBusinessId(busID: string): Promise<Feedback[]> {
    let busURL = this.businessURL + busID + '/feedback';
    console.log('Looking at URL: ' + busURL);
    let res = this.http.get(busURL)
      .toPromise().then(response => response.json() as Feedback[])
      .catch(this.handleError);
    console.log(res);
    return res;
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
