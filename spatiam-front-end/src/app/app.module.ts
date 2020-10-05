import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import * as FileSaver from 'file-saver';
import { WebcamModule } from 'ngx-webcam';

// Custom components
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactsComponent } from './dashboard/contacts/contacts.component';
import { MessagesComponent } from './dashboard/messages/messages.component';
import { CameraComponent } from './dashboard/messages/camera/camera.component';
import { FileUploadComponent } from './dashboard/messages/file-upload/file-upload.component';

const appRoutes: Routes = [
  {
    path: 'spatium-platform',
    component: DashboardComponent,
    children: [
      {
        path: 'contacts',
        component: ContactsComponent,
      },
      {
        path: 'messages',
        component: MessagesComponent,
      }
    ],
  },
  { path: '', redirectTo: '/spatium-platform', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ContactsComponent,
    MessagesComponent,
    CameraComponent,
    FileUploadComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    FormsModule,
    WebcamModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
