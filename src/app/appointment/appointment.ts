export class Appointment{
  id: number;
  employee_Id: number;
  company_Id: number;
  status: string;
  dateCreated: string;
  appointmentDate: string;
  endTime: string;
  service_Id: number;
  customerContact: {
      fName: string,
      lName: string,
      email: string
      phone: string;
  };
}
