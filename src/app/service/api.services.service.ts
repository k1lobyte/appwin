import { Service } from './service';
import { Injectable } from '@angular/core';
import { Headers, Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

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

  getServicesByBusinessId(id: string): Promise<Service[]> {
    return this.getServices().then(services => services.filter(service => service.company_id === id));
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
