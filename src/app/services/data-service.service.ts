import { Injectable } from '@angular/core';
import { Project } from '../models/project';

@Injectable()
export class DataService {
  private direct:string = "../../assets/images/";
  projects:Project[] = [

    new Project("This Website", 
    "Welcome to my new portfolio, built using Angular 4, SCSS, p5, Photoshop, Illustrator, + more.", 
    this.direct + "profile_pic.svg", "how", "fa-code", false), 

    new Project("Emotiquote", 
    "A ReactJS application for analyzing the emotions of famous (and not-so-famous) people, books, movies, and TV shows. A big winner at HackBeanpot 2018.", 
    this.direct + "emotiquote.png", "emotiquote", "fa-code", true), 

    new Project("Ribbons Theme", 
    "A desktop javascript arcade game, designed and coded by me using the p5 library", 
    this.direct + "ribbons.png", "ribbons", "fa-code", false), 

    new Project("Fearless Flight", 
    "Use colors and dynamic hover effects to beautify your blog! A striking tumblr theme developed in html & css. ", 
    this.direct + "fearless_flight.png", "fearless_flight", "fa-code", false),

    new Project("PJ Library Videos", 
    "A series of video editing projects, used for marketing by the Harold Grinspoon Foundation's social media. ", 
    this.direct + "pjLibraryVideos.jpeg", "pj_videos", "fa-video-camera", false),

    new Project("Wonder Theme", 
    "An extremely colorful and dynamic tumblr theme for your blog, created with HTML and CSS.", 
    this.direct + "wonder.png", "wonder", "fa-code", false),

    new Project("Windy Weather", 
    "An animated wind speed visualizer, created using the APIXU API, Illustrator, and p5", 
    this.direct + "windyWeather.png", "windy_weather", "fa-code", false),


    new Project("Starborne Theme", 
    "A minimalistic but still colorful tumblr theme for bloggers, created with HTML and CSS.", 
    this.direct + "starborne.png", "starborne", "fa-code", false),

    new Project("Phases Theme", 
    "My first foray into gradients and HTML, used to create this sunset-inspired tumblr theme.", 
    this.direct + "phases.png", "phases", "fa-code", false),

    new Project("PJ Graphics", 
    "A series of promotional graphics, each designed for the social media accounts of the Harold Grinspoon Foundation's PJ Library program.", 
    this.direct + "grinspoonGraphics.jpg", "pj_graphics", "fa-crop", false),

    new Project("Tumblr Graphics", 
    "Just a collection of entertainment-related graphics that I made for fun!", 
    this.direct + "tumblrGraphics.gif", "tumblr_graphics", "fa-crop", false),




    
   
  ]

  constructor() { }
}
