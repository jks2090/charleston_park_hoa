import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FormsComponent } from './forms/forms.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ProjectsComponent } from './projects/projects.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import {Routes, RouterModule} from '@angular/router';
const appRoutes: Routes = [
  {path: 'home', component: HomePageComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'forms', component: FormsComponent},
  {path: 'contacts', component: ContactsComponent},

]
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    FormsComponent,
    ContactsComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    NgbModalModule,
    RouterModule.forRoot(appRoutes, {useHash: true}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
