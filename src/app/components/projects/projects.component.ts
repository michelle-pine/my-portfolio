import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  private direct:string = "../../assets/images/";
  private projects:Project[] = [
    new Project("Fearless Flight1", this.makeDate(2017, 2, 3), "a game", "https://", this.direct + "fearless_flight.png", "fearless_flight1"),
    new Project("Fearless Flight2", this.makeDate(2017, 2, 3), "a game", "https://", this.direct + "fearless_flight.png", "fearless_flight2") ,
    new Project("Fearless Flight3", this.makeDate(2017, 2, 3), "a game", "https://", this.direct + "fearless_flight.png", "fearless_flight3"),
    new Project("Fearless Flight1", this.makeDate(2017, 2, 3), "a game", "https://", this.direct + "fearless_flight.png", "fearless_flight1"),
    new Project("Fearless Flight2", this.makeDate(2017, 2, 3), "a game", "https://", this.direct + "fearless_flight.png", "fearless_flight2") ,
    new Project("Fearless Flight3", this.makeDate(2017, 2, 3), "a game", "https://", this.direct + "fearless_flight.png", "fearless_flight3"),
    new Project("Fearless Flight1", this.makeDate(2017, 2, 3), "a game", "https://", this.direct + "fearless_flight.png", "fearless_flight1"),
    new Project("Fearless Flight2", this.makeDate(2017, 2, 3), "a game", "https://", this.direct + "fearless_flight.png", "fearless_flight2") ,
    new Project("Fearless Flight3", this.makeDate(2017, 2, 3), "a game", "https://", this.direct + "fearless_flight.png", "fearless_flight3"),

  ]
  


  constructor() { }

  ngOnInit() {
    

  }

  makeDate(month:number, date:number, year:number) {
    return new Date(year, month, date);
  }

}
