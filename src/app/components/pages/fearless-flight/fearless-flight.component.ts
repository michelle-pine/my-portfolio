import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent, NavigationEnd } from '@angular/router';
declare var $: any


@Component({
  selector: 'app-fearless-flight',
  templateUrl: './fearless-flight.component.html',
  styleUrls: ['./fearless-flight.component.scss']
})

export class FearlessFlightComponent implements OnInit {


  constructor() {
  



  }


  ngOnInit() {

    var contain = document.getElementById('flight-contain');
    var text = '<script src="../../../assets/javascript/fearless-flight/fearless-flight.js" type="text/javascript"></script>';
    var fragment = document.createRange().createContextualFragment(text);
    contain.appendChild(fragment);
  


  }



}
