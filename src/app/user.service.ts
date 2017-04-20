import { User } from './user';
import { USERS } from './mock-users';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  getUsers(): Promise<User[]> {
    return Promise.resolve(USERS);
  }

  getUsersByAccessLevel(accessLevel: string): Promise<User[]> {
    return this.getUsers().then(users => users.filter(user => user.accessLevel === accessLevel));
  }

  getUsersByAccessLevelAndBusiness(businessid: string, accessLevel: string): Promise<User[]> {
    return this.getUsers().then(users => users.filter(user => user.company_id === businessid && user.accessLevel === accessLevel));
  }

  getUser(id: string): Promise<User> {
    return this.getUsers().then(users => users.find(user => user.id === id));
  }
}
