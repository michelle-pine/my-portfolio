import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { DataService } from '../../services/data-service.service';



@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects:Project[];
  

  get data() { 
    return this.dataService.projects; 
  } 

  constructor(public dataService: DataService) { 
    this.projects = dataService.projects;
  } 

  ngOnInit() {
    

  }

  makeDate(month:number, date:number, year:number) {
    return new Date(year, month, date);
  }

}
