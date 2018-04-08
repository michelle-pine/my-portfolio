import { Injectable } from '@angular/core';
import { Skillset } from '../models/skillset';
import { Experience } from '../models/experience';

@Injectable()
export class AboutService {
  skills:Skillset[] = [];
  experience:Experience[] = [];


  constructor() { 
    this.skills = [
      new Skillset("Languages", ["Java", "Javascript", "Typescript", "HTML", "CSS", "SCSS", "LESS", "Racket", "Command Line"], "fa fa-code"),
      new Skillset("Libraries", ["Bootstrap", "Angular", "p5", "ReactJS (Familiar)"], "fa fa-file-archive-o"),
      new Skillset("Design", ["Photoshop", "Illustrator", "Premiere Pro", "InDesign", "After Effects", "Marvel", "Invision", "Balsamiq"], "fa fa-crop"),
      new Skillset("More", ["Public Speaking", "Social Media", "Copywriting"], "fa fa-plus-circle"),
  ];

  this.experience = [
    new Experience("Boston Children's Hospital", "Web UI Innovator and Graphics Designer", "Designed, implemented, and improved the front-end design of various Heart Center web applications, utilizing technologies such as Angular, Javascript, HTML, CSS, Balsamiq, SCSS, and LESS"),
    new Experience("Harold Grinspoon Foundation", "Social Media Intern and Freelance Designer", "Designed various social media graphics; Composed, edited, and animated book trailers and other promotional videos; Marketed the organization through social media copy."),
    new Experience("Johnson Memorial Hospital", "Information Services Volunteer", "Installed and repaired technological devices; Documented extensive amounts of healthcare data."),


  ];








  }

}
