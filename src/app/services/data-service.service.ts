import { Injectable } from '@angular/core';
import { Project } from '../models/project';

@Injectable()
export class DataService {
  private direct: string = "./assets/images/";
  projects: Project[] = [

    new Project("C3PO-R3",
    "The front-end of a cardiac catheterization risk registry, developed and designed by me for Boston Children's Hospital's renowned Heart Center",
    this.direct + "c3po.png", "c3po", "fa-code", false),

    new Project("Cardiac Fitness App",
    "A responsive application developed for Boston Children Hospital, intended to help children with heart problems track their fitness",
    this.direct + "cf.png", "cf", "fa-code", false),
    
    new Project("Emotiquote",
    "A ReactJS application for analyzing the emotions of famous (and not-so-famous) people, books, movies, and TV shows. A big winner at HackBeanpot 2018.",
    this.direct + "emotiquote.png", "emotiquote", "fa-code", true),

    new Project("This Website",
      "Welcome to my new portfolio, built using Angular 4, SCSS, p5, Photoshop, Illustrator, + more.",
      this.direct + "profile_pic.svg", "how", "fa-code", false),

    new Project("Luminous Theme",
      "COMING SOON! My first responsive tumblr theme, featuring (of course) gradients, the newly released Bootstrap 4, and FontAwesome icons. ",
      this.direct + "luminousTheme.png", "luminous-theme", "fa-code", false),

   

    new Project("The Easy Animator",
      "A Java software that converts textual instructions into descriptive, interactive or svg file animations",
      this.direct + "easy-animator.svg", "easy-animator", "fa-code", false),

    new Project("Blankets for Boston",
      "A concept website made for the Mayor's Office of New Urban Mechanics, intended as a winter public activation activity.",
      this.direct + "blanketsForBoston.png", "blankets-for-boston", "fa-code", false),

    new Project("Ribbons Theme",
      "A desktop javascript arcade game, designed and coded by me using the p5 library",
      this.direct + "ribbons.png", "ribbons", "fa-code", false),

    new Project("Maze Game",
      "A desktop Java game which uses Kruskal's Algorithm to create complex mazes, and also uses depth first and breadth first search to solve them.",
      this.direct + "mazeGame.png", "maze-game", "fa-code", false),

    new Project("Forbidden Island",
      "An animated desktop Java game involving a race against time to rescue yourself from a sinking island.",
      this.direct + "forbiddenIsland.png", "forbidden-island", "fa-code", false),

    new Project("Fearless Flight",
      "A javascript arcade game, developed using Illustrator and the p5 library. Play here and now!",
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
