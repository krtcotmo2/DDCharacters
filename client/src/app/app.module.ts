import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NewCharComponent } from './newChar/new-char/new-char.component';
import { ChargenHomeComponent } from './chargen/chargen-home/chargen-home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBar} from '@angular/material/snack-bar';
import { OverlayModule  } from '@angular/cdk/overlay';
import { FormsModule } from '@angular/forms';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';
import { FontAwesomeModule as Fawe}  from '@fortawesome/angular-fontawesome';

console.log(document.location.hostname)
// const protocol =  document.location.hostname.includes('localhost') ? 'ws' : 'wss
const protocol =  document.location.hostname.includes('localhost') ? 'ws' : 'ws';
const config: SocketIoConfig = {
  url: `${protocol}://${document.location.host}`,
  options: {
    transports: ['websocket'],
    upgrade : true,
    path: ''
  }
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewCharComponent,
    ChargenHomeComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    OverlayModule,
    FormsModule,
    Fawe,
    SocketIoModule.forRoot(config),

  ],
  providers: [MatSnackBar],
  bootstrap: [AppComponent]
})
export class AppModule { }
