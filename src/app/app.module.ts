import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'


import { AppComponent } from './app.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectsPageComponent } from './components/projects-page/projects-page.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SingleProjectComponent } from './components/single-project/single-project.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';


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
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: ProjectsPageComponent },
      { path: 'projects/:nickname', component: SingleProjectComponent },
      { path: 'about', component: AboutPageComponent },
      { path: 'contact', component: ContactPageComponent },
      { path: '**', component: NotFoundComponent }

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
