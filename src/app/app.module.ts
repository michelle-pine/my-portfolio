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
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
