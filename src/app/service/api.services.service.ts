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
  private serviceURL = 'http://rehket.asuscomm.com:3000/service/';  // URL to web api

  constructor(private http: Http) { }

  getServices(): Promise<Service[]> {
    let res = this.http.get(this.serviceURL)
      .toPromise()
      .then(response => response.json() as Service[])
      .catch(this.handleError);

    return res;
  }

  getService(id: string): Promise<Service> {
    return this.getServices().then(services => services.find(service => service.id === id));
  }

  getServicesByBusinessId(busID : string): Promise<Service[]> {
    let busURL = 'http://rehket.asuscomm.com:3000/company/' + busID + '/service';
    console.log('Looking at URL: ' + busURL);
    let res = this.http.get(busURL)
      .toPromise().then(response => response.json() as Service[])
      .catch(this.handleError);
    console.log(res);
    return res;
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
