import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Error404Component } from './error404/error404.component';
import { ServiziComponent } from './servizi/servizi.component';
import { SocietaComponent } from './societa/societa.component';
import { FooterComponent } from './footer/footer.component';
import { ContattiComponent } from './contatti/contatti.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ImgSliderComponent } from './img-slider/img-slider.component';
import { SocioComponent } from './socio/socio.component';
import { OnTopButtonComponent } from './on-top-button/on-top-button.component';
import { AprovationEmailComponent } from './aprovation-email/aprovation-email.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Error404Component,
    ServiziComponent,
    SocietaComponent,
    FooterComponent,
    ContattiComponent,
    ImgSliderComponent,
    SocioComponent,
    OnTopButtonComponent,
    AprovationEmailComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
