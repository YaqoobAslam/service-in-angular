import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  users: any;
  constructor(private userdata: UserDataService) {
    console.warn('userdata', userdata.user());
    this.users = userdata.user();
  }
  ngOnInit() {
  }

}