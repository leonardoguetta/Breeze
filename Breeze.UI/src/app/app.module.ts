import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { SharedModule } from './shared/shared.module';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { ApiService } from './shared/services/api.service';
import { GlobalService } from './shared/services/global.service';

import { SendComponent } from './wallet/send/send.component';
import { ReceiveComponent } from './wallet/receive/receive.component';


@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    SharedModule.forRoot()
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    SendComponent,
    ReceiveComponent
  ],
  entryComponents: [
    SendComponent,
    ReceiveComponent
  ],
  providers: [ ApiService, GlobalService ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
