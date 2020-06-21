import { Component } from '@angular/core';
import { CharDataService } from './services/char-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'character';

  constructor(private charDataSvc: CharDataService){}

  setNew = () => {
    //this.charDataSvc.reset();
  }
}
