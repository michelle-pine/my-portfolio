import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare var $ :any;


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var toggleAffix = function(affixElement, scrollElement, wrapper) {
  
      var height = affixElement.outerHeight(),
          top = wrapper.offset().top;
      
      if (scrollElement.scrollTop() >= top - 50){
          wrapper.height(height);
          affixElement.addClass("affix");
      }
      else {
          affixElement.removeClass("affix");
          wrapper.height('auto');
      }
        
    };
    
  
    $('[data-toggle="affix"]').each(function() {
      var ele = $(this),
          wrapper = $('<div></div>');
      
      ele.before(wrapper);
      $(window).on('scroll resize', function() {
          toggleAffix(ele, $(this), wrapper);
      });
      
      // init
      toggleAffix(ele, $(window), wrapper);
    });
    
  });

  }

}
