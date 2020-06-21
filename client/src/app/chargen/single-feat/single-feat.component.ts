import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router';
import { CharDataService } from '../../services/char-data.service';

@Component({
  selector: 'app-single-feat',
  templateUrl: './single-feat.component.html',
  styleUrls: ['./single-feat.component.css']
})
export class SingleFeatComponent implements OnInit {
  @Input() charFeats: [];
  charID: number;
  constructor( private router: Router,
    private charDataSvc: CharDataService) { }

  ngOnInit(): void {
    this.charDataSvc.getCharID.subscribe(val => this.charID = val);
  }

  showPreReq = (evt) => {
    const gridRowsElements = document.getElementsByClassName('gridRow');
    const  gridRows = Array.prototype.slice.call(gridRowsElements);
    const filtered = gridRows.filter(element =>  {
      return element.contains(evt.target);
    });
    const myRow = filtered[0];
    myRow.children[3].classList.toggle('expanded');
  }

  deleteFeat = (arg: number) => {
    console.log(this.charFeats);
    this.charDataSvc.deleteFeat(arg).subscribe( val => {
      const newArray = this.charFeats.filter(ft => ft['id'] !== arg);
      console.log("newArray", newArray, this.charFeats);
      this.charDataSvc.setAllFeats({charID: this.charID, results: newArray});
      this.router.navigate(['/charGen/feats']);
    });
  }
}
