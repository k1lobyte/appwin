import { Appointment } from './appointment';
import { APPOINTMENTS } from './mock-appointments';
import { Injectable } from '@angular/core';

@Injectable()
export class AppointmentService {

  getAppointments(): Promise<Appointment[]> {
    return Promise.resolve(APPOINTMENTS);
  }

  getAppointment(id: number): Promise<Appointment> {
    return this.getAppointments().then(appointments => appointments.find(appointment => appointment.id === id));
  }

  getAppointmentsByBusinessId(id: number): Promise<Appointment[]> {
    return this.getAppointments().then(appointments => appointments.filter(appointment => appointment.company_Id === id));
  }
}
