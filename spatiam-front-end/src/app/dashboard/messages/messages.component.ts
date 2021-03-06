import { Component, OnInit, Input, Output, EventEmitter, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MatDialogConfig, } from '@angular/material/dialog';
import {WebcamImage, WebcamInitError, WebcamUtil} from 'ngx-webcam';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  @Input() userData: any;
  @Output() messageData = new EventEmitter<any>();

  userMessages: any;
  currentUser = '';
  textMessageValue: any;

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  ngAfterContentChecked() {
    for (let u of this.userData) {
      if (u.is_chosen) {
        this.currentUser = u.user;
        this.userMessages = u.messages;
      }
    }
  }

  sendMessage() {
    let message = this.textMessageValue;
    this.textMessageValue = undefined;

    //Get current time
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();

    h = this.addZeroes(h);
    m = this.addZeroes(m);

    let time = h + ':' + m;


    for (let u of this.userData) {
      if (u.is_chosen) {
        u.messages.push({
          'content': message,
          'sender': 1,
          'time_read': '0000',
          'time_recieved': 'n/a',
          'time_sent': time,
          'type': 'M'
        })
      }
    }

    this.messageData.emit(this.userData);
  }

  addZeroes(t) {
    if (t < 10) {
      t = "0" + t;
    }
    return t;
  }

  // openVideoCapture() {
  //   let config = new MatDialogConfig();
  //   let dialogRef: MatDialogRef<VideoCaptureDialog> = this.dialog.open(VideoCaptureDialog, config);
  // }

}

// @Component({
//   selector: 'video-capture-dialog',
//   template: '<webcam></webcam>',
// })
// export class VideoCaptureDialog {
//   constructor (
//     public dialogRef: MatDialogRef<VideoCaptureDialog>
//   ) {}

//   onNoClick(): void {
//     this.dialogRef.close();
//   }
// }
