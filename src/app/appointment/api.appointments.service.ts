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

  private myRequest = new Object({
    company_Id: '',
    service_Id: '',
    customerContact: {
      phone: '',
      fName: '',
      lName: ''
    },
    appointmentDate: ''
  });

  private headers = new Headers(
    {
      'Accept': 'application/json',
      'X-Requested-By': 'Angular 2'

    }
  );
  private appointmentURL = 'http://localhost:3000/';  // URL to web api

  constructor(private http: Http) { }



  getServices(): Promise<Appointment[]> {
    let res = this.http.get(this.appointmentURL)
      .toPromise()
      .then(response => response.json() as Appointment[])
      .catch(this.handleError);

    return res;
  }

  createAppointment(company_Id: String, service_Id: string, phone: string, fName: string,
                    lName: string, appointmentDate: string): Promise<Appointment> {
    let body = JSON.stringify({
      company_Id: company_Id,
      service_Id: service_Id,
      customerContact: {
        fName: fName,
        lName: lName,
        phone: phone
      },
      appointmentDate: appointmentDate
    });
    return this.http.post('localhost:3000/appointment/', body, {}).toPromise().then(response => response.json() as Appointment);
  }

  getAppointment(id: string): Promise<Appointment> {
    return this.getServices().then(services => services.find(service => service.id === id));
  }

  getFutureAppointmentsByBusinessId(apptID: string): Promise<Appointment[]> {
    let apptURL = 'http://rehket.asuscomm.com:3000/company/' + apptID + '/appointment/future';
    console.log('Looking at URL: ' + apptURL);
    return this.http.get(apptURL)
      .toPromise().then(response => response.json() as Appointment[])
      .catch(this.handleError);

  }

  getPastAppointmentsByBusinessId(busID: string): Promise<Appointment[]> {
    let apptURL = 'http://rehket.asuscomm.com:3000/company/' + busID + '/appointment/past';
    console.log('Looking at URL: ' + apptURL);
    return this.http.get(apptURL)
      .toPromise().then(response => response.json() as Appointment[])
      .catch(this.handleError);
  }

  getAllAppointmentsByBusinessID(busID: string): Promise<Appointment[]> {
    let apptURL = 'http://rehket.asuscomm.com:3000/company/' + busID + '/appointment/all';
    console.log('Looking at URL: ' + apptURL);
    return this.http.get(apptURL)
      .toPromise().then(response => response.json() as Appointment[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
