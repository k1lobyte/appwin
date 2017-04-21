import DateTimeFormat = Intl.DateTimeFormat;
export class Appointment {
  id: string;
  employee_Id: string;
  company_Id: string;
  status: string;
  dateCreated: string;
  appointmentDate: Date;
  endTime: string;
  service_Id: string;
  customerContact: {
      fName: string,
      lName: string,
      email: string
      phone: string;
  };
}
