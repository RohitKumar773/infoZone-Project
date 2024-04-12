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

// Angular material used
import { MatButtonModule } from '@angular/material/button';
import { CollegeComponent } from './college/college.component';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
