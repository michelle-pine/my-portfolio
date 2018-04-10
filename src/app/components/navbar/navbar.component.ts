import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
declare var jquery: any;
declare var $: any;


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { 
    // router.events.subscribe(event => {
    //   if (event instanceof NavigationEnd) {
    //     if (router.url != '/') {
    //       
    //   }
    // });
  }

  ngOnInit() {
    $(function () {
      var scroll = $(window).scrollTop(); // how many pixels you've scrolled
      var os = $('.header').offset().top; // pixels to the top of div1
      var ht = $('.header').height();
      // if you've scrolled further than the top of div1 plus it's height
      // change the color. either by adding a class or setting a css property
      if (scroll > ht - 150) {
        $('.navbar').addClass('affix');
      }

      $(window).scroll(function () {
        scroll = $(window).scrollTop(); // how many pixels you've scrolled
        os = $('.header').offset().top; // pixels to the top of div1
        ht = $('.header').height();
        // if you've scrolled further than the top of div1 plus it's height
        // change the color. either by adding a class or setting a css property
        if (scroll > ht - 150) {
          $('.navbar').addClass('affix');
        }
        else {
          $('.navbar').removeClass('affix');
        }

      });
      $('.navbar').on('click', '.internal', function () {
        $('html, body').animate({
          scrollTop: $("#main").offset().top - 50
        }, 600);
      });

      $(document).on('click', 'a', function () {
        $('html, body').animate({
          scrollTop: $("#main").offset().top - 50
        }, 600);
      });
      
    });
  }

}
