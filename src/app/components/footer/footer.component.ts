import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  year:Number;
  text:String;

  constructor() {
    var date = new Date();
    this.year = date.getFullYear();
    if (this.year == 2018) {
      this.text = "2018";
    }
    else {
      this.text = "2018-" + this.year;

    }
  }

  ngOnInit() {
    
    
  }

}
