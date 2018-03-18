import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { DataService } from '../../services/data-service.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-single-project',
  templateUrl: './single-project.component.html',
  styleUrls: ['./single-project.component.scss']
})
export class SingleProjectComponent implements OnInit {
  router:Router;
  


  constructor(private  _router : Router) { 
    this.router = _router;
  


  } 


  ngOnInit() {
    

  }

}
