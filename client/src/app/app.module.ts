import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OverviewComponent} from './party/overview/overview.component';
import { SearchComponent} from './party/search/search.component'
import { NewCharComponent } from './newChar/new-char/new-char.component';
import { ChargenHomeComponent } from './chargen/chargen-home/chargen-home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBar} from '@angular/material/snack-bar';
import { OverlayModule  } from '@angular/cdk/overlay';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';

const config: SocketIoConfig = {
  url: 'http://localhost:4200',
  options: {}
};


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewCharComponent,
    ChargenHomeComponent,
    SearchComponent,
    OverviewComponent,
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
    FontAwesomeModule,
    SocketIoModule.forRoot(config),

  ],
  providers: [MatSnackBar],
  bootstrap: [AppComponent]
})
export class AppModule { }
