/**
 * Created by adama on 4/20/2017.
 */
import { Service } from './../service/service';
import { Injectable } from '@angular/core';
import { Headers, Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Business} from "../business/business";
import {forEach} from "@angular/router/src/utils/collection";
import {Appointment} from './appointment';

@Injectable()
export class AppointmentService {

  private headers = new Headers(
    {
      'Accept': 'application/json',
      'X-Requested-By': 'Angular 2'
    }
  );
  private appointmentURL = 'http://rehket.asuscomm.com:3000/service/';  // URL to web api

  constructor(private http: Http) { }

  getServices(): Promise<Appointment[]> {
    let res = this.http.get(this.appointmentURL)
      .toPromise()
      .then(response => response.json() as Appointment[])
      .catch(this.handleError);

    return res;
  }

  getAppointment(id: string): Promise<Appointment> {
    return this.getServices().then(services => services.find(service => service.id === id));
  }

  getFutureAppointmentsByBusinessId(apptID: string): Promise<Appointment[]> {
    let apptURL = 'http://rehket.asuscomm.com:3000/company/' + apptID + '/service';
    console.log('Looking at URL: ' + apptURL);
    let res = this.http.get(apptURL)
      .toPromise().then(response => response.json() as Appointment[])
      .catch(this.handleError);
    console.log(res);
    return res;
  }

  getPastAppointmentsByBusinessId(apptID: string): Promise<Appointment[]> {
    let apptURL = 'http://rehket.asuscomm.com:3000/company/' + apptID + '/service';
    console.log('Looking at URL: ' + apptURL);
    let res = this.http.get(apptURL)
      .toPromise().then(response => response.json() as Appointment[])
      .catch(this.handleError);
    console.log(res);
    return res;
  }

  getAllAppointmentsByBusinessID(apptID: string): Promise<Appointment[]> {
    let apptURL = 'http://rehket.asuscomm.com:3000/company/' + apptID + '/service';
    console.log('Looking at URL: ' + apptURL);
    let res = this.http.get(apptURL)
      .toPromise().then(response => response.json() as Appointment[])
      .catch(this.handleError);
    console.log(res);
    return res;
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
