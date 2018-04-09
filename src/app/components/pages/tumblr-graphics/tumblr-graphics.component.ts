import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tumblr-graphics',
  templateUrl: './tumblr-graphics.component.html',
  styleUrls: ['./tumblr-graphics.component.scss']
})
export class TumblrGraphicsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    window.open('https://chelle-designs.tumblr.com/', "_blank");
    this.router.navigate(['/projects']); 
  }

}
