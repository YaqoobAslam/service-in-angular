import { Injectable } from '@angular/core';

@Injectable()
export class UserDataService {
  constructor() {}
  user() {
    return [
      { name: 'Yaqoob', age: 28, email: 'yaqoob@gmail.com' },
      { name: 'Zahid', age: 15, email: 'zahid@gmail.com' },
      { name: 'Mahboob', age: 28, email: 'mahboob@gmail.com' },
      { name: 'Farooq', age: 28, email: 'farooq@gmail.com' },
    ];
  }
}
