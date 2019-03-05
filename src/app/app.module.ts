import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { BannerComponent } from './components/home/banner/banner.component';
import { SubBannerComponent } from './components/home/banner/child/sub-banner/sub-banner.component';
import { InfoComponent } from './components/home/banner/child/info/info.component';
import { SectionsComponent } from './components/home/sections/sections.component';
import { SubAboutComponent } from './components/home/sections/child/sub-about/sub-about.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    BannerComponent,
    SubBannerComponent,
    InfoComponent,
    SectionsComponent,
    SubAboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
