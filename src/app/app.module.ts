import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { DataService } from './services/data-service.service';


import { AppService } from './services/imessage.service';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectsPageComponent } from './components/projects-page/projects-page.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SingleProjectComponent } from './components/single-project/single-project.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FearlessFlightComponent } from './components/pages/fearless-flight/fearless-flight.component';
import { FooterComponent } from './components/footer/footer.component';
import { EmotiquoteComponent } from './components/pages/emotiquote/emotiquote.component';
import { HowComponent } from './components/pages/how/how.component';
import { EasyAnimatorComponent } from './components/pages/easy-animator/easy-animator.component';
import { RibbonsThemeComponent } from './components/pages/ribbons-theme/ribbons-theme.component';
import { MazeGameComponent } from './components/pages/maze-game/maze-game.component';
import { ForbiddenIslandComponent } from './components/pages/forbidden-island/forbidden-island.component';
import { PjVideosComponent } from './components/pages/pj-videos/pj-videos.component';
import { WonderThemeComponent } from './components/pages/wonder-theme/wonder-theme.component';
import { WindyWeatherComponent } from './components/pages/windy-weather/windy-weather.component';
import { StarborneThemeComponent } from './components/pages/starborne-theme/starborne-theme.component';
import { PhasesThemeComponent } from './components/pages/phases-theme/phases-theme.component';
import { PjGraphicsComponent } from './components/pages/pj-graphics/pj-graphics.component';
import { TumblrGraphicsComponent } from './components/pages/tumblr-graphics/tumblr-graphics.component';
import { AboutService } from './services/about.service';
import { PjvideoService } from './services/pjvideo.service';
import { LockedProjectComponent } from './components/pages/locked-project/locked-project.component';



@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    ProjectsPageComponent,
    AboutPageComponent,
    ContactPageComponent,
    NotFoundComponent,
    SingleProjectComponent,
    HeaderComponent,
    NavbarComponent,
    FearlessFlightComponent,
    FooterComponent,
    EmotiquoteComponent,
    HowComponent,
    EasyAnimatorComponent,
    RibbonsThemeComponent,
    MazeGameComponent,
    ForbiddenIslandComponent,
    PjVideosComponent,
    WonderThemeComponent,
    WindyWeatherComponent,
    StarborneThemeComponent,
    PhasesThemeComponent,
    PjGraphicsComponent,
    TumblrGraphicsComponent,
    LockedProjectComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'projects', pathMatch : 'full'},
      { path: 'projects', component: ProjectsPageComponent },
      { path: 'projects/:id', component: SingleProjectComponent}, 
      { path: 'about', component: AboutPageComponent },
      { path: 'contact', component: ContactPageComponent },
      { path: '**', component: NotFoundComponent }

    ]),
    FormsModule,
    HttpModule
  ],
  providers: [
    DataService,
    AppService,
    AboutService,
    PjvideoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
