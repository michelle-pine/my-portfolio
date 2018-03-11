import { Component, OnInit } from '@angular/core';
declare var jquery: any;
declare var $: any;


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(function () {
      $(window).scroll(function () {
        var scroll = $(window).scrollTop(); // how many pixels you've scrolled
        var os = $('.header').offset().top; // pixels to the top of div1
        // if you've scrolled further than the top of div1 plus it's height
        // change the color. either by adding a class or setting a css property
        if (scroll > os) {
          $('.navbar').addClass('affix');
        }
        else {
          $('.navbar').removeClass('affix');
        }

      });
      $('.navbar').on('click', '.nav-link', function () {
        $('html, body').animate({
          scrollTop: $("#main").offset().top
        }, 600);
      });
    }
    });
  }

}
