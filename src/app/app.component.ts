import { WrappedNodeExpr } from '@angular/compiler/src/compiler';
import { Component, VERSION } from '@angular/core';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Service';
  users: any;
  constructor(private userdata: UserDataService) {
    console.warn('userdata', userdata.user());
    this.users = userdata.user();
  }
}
