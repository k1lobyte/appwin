import { Business } from './business';
import { BUSINESSES } from './mock-businesses';
import { Injectable } from '@angular/core';

@Injectable()
export class BusinessService {

  getBusinesses(): Promise<Business[]> {
    return Promise.resolve(BUSINESSES);
  }

  getBusiness(id: number): Promise<Business> {
    return this.getBusinesses().then(businesses => businesses.find(business => business.id === id));
  }
}
