import { Injectable } from '@angular/core';
import { Project } from '../models/project';

@Injectable()
export class DataService {
  private direct:string = "../../assets/images/";
  projects:Project[] = [
    new Project("Fearless Flight", this.makeDate(2017, 2, 3), "a game", "https://", this.direct + "fearless_flight.png", "fearless_flight", 0),
    new Project("Fearless Flight2", this.makeDate(2017, 2, 3), "a game", "https://", this.direct + "fearless_flight.png", "fearless_flight_two", 1),
    new Project("Fearless Flight3", this.makeDate(2017, 2, 3), "a game", "https://", this.direct + "fearless_flight.png", "fearless_flight3_three", 2),
    new Project("Fearless Flight1", this.makeDate(2017, 2, 3), "a game", "https://", this.direct + "fearless_flight.png", "fearless_flight1_four", 3),
    new Project("Fearless Flight2", this.makeDate(2017, 2, 3), "a game", "https://", this.direct + "fearless_flight.png", "fearless_flight2_five", 4)
    
  ]

  constructor() { }

  makeDate(month:number, date:number, year:number) {
    return new Date(year, month, date);
  }
}
