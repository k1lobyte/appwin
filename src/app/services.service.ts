import { Service } from './service';
import { SERVICES } from './mock-services';
import { Injectable } from '@angular/core';

@Injectable()
export class ServicesService {

  getServices(): Promise<Service[]> {
    return Promise.resolve(SERVICES);
  }

  getService(id: number): Promise<Service> {
    return this.getServices()
               .then(services => services.find(service => service.id === id));
  }

  getServicesByBusinessId(businessId: number): Promise<Service[]> {
    return this.getServices()
               .then(services => services.filter(service => service.businessId === businessId));
  }
}
