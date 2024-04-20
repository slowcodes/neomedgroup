import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SliderComponent } from './components/slider/slider.component';
import { AboutLayout2Component } from './components/about-layout2/about-layout2.component';
import { BannerLayout8Component } from './components/banner-layout8/banner-layout8.component';
import { ServiceLayout4Component } from './components/service-layout4/service-layout4.component';
import { FancyboxLayout4Component } from './components/fancybox-layout4/fancybox-layout4.component';
import { CallToActionComponent } from './components/call-to-action/call-to-action.component';
import { BannerLayout5Component } from './components/banner-layout5/banner-layout5.component';
import { ContactLayout3Component } from './components/contact-layout3/contact-layout3.component';
import { BlogGridComponent } from './components/blog-grid/blog-grid.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    AboutLayout2Component,
    BannerLayout8Component,
    ServiceLayout4Component,
    FancyboxLayout4Component,
    CallToActionComponent,
    BannerLayout5Component,
    ContactLayout3Component,
    BlogGridComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
