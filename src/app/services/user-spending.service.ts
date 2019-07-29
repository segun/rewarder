import { UserSpending } from './../models/user-spending';
import { Injectable } from '@angular/core';
import { isString } from 'util';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserSpendingService {
  userSpendings: UserSpending[] = new Array<UserSpending>();
  constructor() { }

  getSpendingsFromCSV(csv): Observable<UserSpending[]> {
    if (isString(csv)) {
      // do stuffs
      this.userSpendings.length = 0;
      const lines: string[] = csv.split('\n');
      lines.forEach((line) => {
        const uploadedSpendings: string[] = line.split(',');
        const spending: UserSpending = {
          id: 0, firstName: '', spent: 0
        };
        spending.id = +uploadedSpendings[0];
        spending.firstName = uploadedSpendings[1];
        spending.spent = +uploadedSpendings[2];
        this.userSpendings.push(spending);
      });
      return of(this.userSpendings);
    } else {
      // show error
      alert('Uploaded data is not readable');
    }

    return null;
  }
}
