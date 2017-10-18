import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PhoneLoginComponent } from './phone-login/phone-login.component';
import {FormsModule} from '@angular/forms';
import {WindowService} from './window.service';
import * as firebase from 'firebase';

export const firebaseConfig = {
  apiKey: 'AIzaSyClEv3UvyH1GxSLnuNn9AHfx0cyepwhwjg',
  authDomain: 'ng1.firebaseapp.com',
  databaseURL: 'https://ng1.firebaseio.com',
  storageBucket: 'firebase-ng1.appspot.com'
}


@NgModule({
  declarations: [
    AppComponent,
    PhoneLoginComponent
  ],
  imports: [
    BrowserModule, FormsModule,
  ],
  providers: [WindowService],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    firebase.initializeApp(firebaseConfig);
  }
}
