import { Component, OnInit } from '@angular/core';
import { AboutService } from '../../services/about.service';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {
  aboutService:AboutService;
  

  constructor(aboutService:AboutService) {
    this.aboutService = aboutService;
   }

  ngOnInit() {
  }

}
