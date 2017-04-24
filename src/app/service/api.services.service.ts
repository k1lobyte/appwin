import { Service } from './service';
import { Injectable } from '@angular/core';
import { Headers, Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Business} from "../business/business";
import {forEach} from "@angular/router/src/utils/collection";

@Injectable()
export class ServicesService {

  private headers = new Headers(
    {
      'Accept': 'application/json',
      'X-Requested-By': 'Angular 2'
    }
  );
  private svcURL = 'http://rehket.asuscomm.com:3000/service';  // URL to web api

  constructor(private http: Http) { }

  getServices(): Promise<Service[]> {

    return this.http.get(this.svcURL)
      .toPromise()
      .then(response => response.json() as Service[])
      .catch(this.handleError);
  }

  getService(id: string): Promise<Service> {
    console.log('Looking for Service of ID: ' + id);
   return this.http.get(this.svcURL + '/' + id)
      .toPromise().then(response => response.json() as Service)
      .catch(this.handleError);

  }

  getServicesByBusinessId(busID: string): Promise<Service[]> {
    let busURL = 'http://rehket.asuscomm.com:3000/company/' + busID + '/service';
    console.log('Looking at URL: ' + busURL);
    return this.http.get(busURL)
      .toPromise().then(response => response.json() as Service[])
      .catch(this.handleError);

  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
