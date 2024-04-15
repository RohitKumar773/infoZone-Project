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
import { PersonContentAreaComponent } from './person-content-area/person-content-area.component';
import { SpaceContentAreaComponent } from './space-content-area/space-content-area.component';
import { CountryContentAreaComponent } from './country-content-area/country-content-area.component';
import { CompanyContentAreaComponent } from './company-content-area/company-content-area.component';
import { CollegeContentAreaComponent } from './college-content-area/college-content-area.component';
import { TechContentAreaComponent } from './tech-content-area/tech-content-area.component';

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
  { path: 'person_content', component: PersonContentAreaComponent },
  { path: 'country_content', component: CountryContentAreaComponent },
  { path: 'company_content', component: CompanyContentAreaComponent },
  { path: 'space_content', component: SpaceContentAreaComponent },
  { path: 'university_content', component: CollegeContentAreaComponent },
  { path: 'tech_content', component: TechContentAreaComponent },
  { path: '**', component: HomepageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
