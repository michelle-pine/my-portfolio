import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pj-graphics',
  templateUrl: './pj-graphics.component.html',
  styleUrls: ['./pj-graphics.component.scss']
})
export class PjGraphicsComponent implements OnInit {
  images:String[] = [];

  constructor() { 
    var direct = "./assets/images/pj-graphics/";
    for (var i = 1; i <= 26; i++) {
      this.images.push(direct + i + ".png");
    }
  }

  ngOnInit() {
  }

}
