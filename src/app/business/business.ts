import { Service } from '../service/service';

export class Business {
    id: number;
    name: string;
    //employees: Object [];
    //services: Service [];
    address:{
        street: string,
        city: string,
        state: string,
        zip: number
    };
    phone: string;
    description: string
}
