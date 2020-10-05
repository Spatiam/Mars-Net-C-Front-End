import { Component, OnInit, ViewChild } from '@angular/core';
import { Service } from '../service';
import { ContactsComponent } from './contacts/contacts.component';
import { MessagesComponent } from './messages/messages.component'
import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public userData: any;

  constructor(
    private service: Service
  ) { }

  ngOnInit(): void {
    this.userData = [];
    this.service.getCarol()
      .subscribe(data => this.assignUsers(data));
    this.service.getHouston()
      .subscribe(data => this.assignUsers(data));
    this.service.getRover()
      .subscribe(data => this.assignUsers(data));
  }

  assignUsers(user) {
    if (Object.keys(this.userData).length !== 0) {
      let added = false;
      for (let u of this.userData) {
        if (u.user === user[0].user_name) {
          u = user[0];
          added = true;
        }
      }
      if (added === false) {
        this.userData.push({
          'user': user[0].user_name,
          'location': user[0].location,
          'delay': user[0].comm_time,
          'is_local': user[0].is_local,
          'is_chosen': false,
          'messages': user[0].messages
        });
      }
    } else {
      this.userData.push({
        'user': user[0].user_name,
        'location': user[0].location,
        'delay': user[0].comm_time,
        'is_local': user[0].is_local,
        'is_chosen': false,
        'messages': user[0].messages
      });
    }
  };

  changeActiveContact($event) {
    this.userData = $event;
  };

  changeActiveMessage($event) {
    this.userData = $event;

    let blob = new Blob([JSON.stringify(this.userData)], {type: "text/plain;charset=utf-8"});
    FileSaver.saveAs(blob, "metadata.txt");
  }
}
