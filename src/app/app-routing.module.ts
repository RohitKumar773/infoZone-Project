import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PersonComponent } from './person/person.component';
import { TechComponent } from './tech/tech.component';
import { SpaceComponent } from './space/space.component';
import { CountryComponent } from './country/country.component';
import { CompanyComponent } from './company/company.component';
import { CollegeComponent } from './college/college.component';

const routes: Routes = [
  { path: 'homepage', component: HomepageComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'person', component: PersonComponent },
  { path: 'techs', component: TechComponent },
  { path: 'space', component: SpaceComponent },
  { path: 'country', component: CountryComponent },
  { path: 'company', component: CompanyComponent },
  { path: 'college', component: CollegeComponent },
  { path: '**', component: HomepageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
