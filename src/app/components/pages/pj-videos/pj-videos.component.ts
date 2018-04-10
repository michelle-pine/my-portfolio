import { Component, OnInit } from '@angular/core';
import { PjvideoService } from '../../../services/pjvideo.service';

@Component({
  selector: 'app-pj-videos',
  templateUrl: './pj-videos.component.html',
  styleUrls: ['./pj-videos.component.scss']
})
export class PjVideosComponent implements OnInit {
  pjvideos:PjvideoService

  constructor(pjvideos:PjvideoService) { 
    this.pjvideos = pjvideos;
  }

  ngOnInit() {
  }

}
