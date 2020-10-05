import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  @Input() userData: any;
  @Output() contactData = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  setActive(contact) {
    for (let c of this.userData) {
      if (contact.user === c.user) {
        c.is_chosen = true;
      } else {
        c.is_chosen = false;
      }
    }
    this.contactData.emit(this.userData)
  }


}
