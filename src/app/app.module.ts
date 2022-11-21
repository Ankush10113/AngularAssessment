import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlaceappointmentComponent } from './placeappointment/placeappointment.component';
import { ViewappointmentComponent } from './viewappointment/viewappointment.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule , Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

const appRoutes: Routes =[	
  {path:'' , component:HomeComponent},
  {path:'home' , component:HomeComponent},
  {path:'about' , component:AboutComponent},
  {path:'placeappointment' , component:PlaceappointmentComponent},
  {path:'viewappointment', component:ViewappointmentComponent},
  {path:'contactus', component:ContactusComponent},
  ];

@NgModule({
  declarations: [
    AppComponent,
    PlaceappointmentComponent,
    ViewappointmentComponent,
    ContactusComponent,

    FooterComponent,
     HomeComponent,
     AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
