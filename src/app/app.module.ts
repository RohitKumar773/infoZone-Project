import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { CompanyComponent } from './company/company.component';
import { CountryComponent } from './country/country.component';
import { PersonComponent } from './person/person.component';
import { TechComponent } from './tech/tech.component';
import { SpaceComponent } from './space/space.component';
import { AboutComponent } from './about/about.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ViewportComponent } from './viewport/viewport.component';
import { ContainerComponent } from './container/container.component';

import { CollegeComponent } from './college/college.component';
import { TechContentAreaComponent } from './tech-content-area/tech-content-area.component';
import { SpaceContentAreaComponent } from './space-content-area/space-content-area.component';
import { PersonContentAreaComponent } from './person-content-area/person-content-area.component';
import { CountryContentAreaComponent } from './country-content-area/country-content-area.component';
import { CompanyContentAreaComponent } from './company-content-area/company-content-area.component';
import { CollegeContentAreaComponent } from './college-content-area/college-content-area.component';

// Angular material used
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    CompanyComponent,
    CountryComponent,
    PersonComponent,
    TechComponent,
    SpaceComponent,
    AboutComponent,
    HomepageComponent,
    ViewportComponent,
    ContainerComponent,
    CollegeComponent,
    TechContentAreaComponent,
    SpaceContentAreaComponent,
    PersonContentAreaComponent,
    CountryContentAreaComponent,
    CompanyContentAreaComponent,
    CollegeContentAreaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
