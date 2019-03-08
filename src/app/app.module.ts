import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ScrollingModule } from '@angular/cdk/scrolling';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { BannerComponent } from './components/home/banner/banner.component';
import { SubBannerComponent } from './components/home/banner/child/sub-banner/sub-banner.component';
import { InfoComponent } from './components/home/banner/child/info/info.component';
import { SectionsComponent } from './components/home/sections/sections.component';
import { SubAboutComponent } from './components/home/sections/child/sub-about/sub-about.component';
import { SubGoalsComponent } from './components/home/sections/child/sub-goals/sub-goals.component';
import { SubProjectsComponent } from './components/home/sections/child/sub-projects/sub-projects.component';
import { FooterComponent } from './components/home/footer/footer.component';
import { ListComponent } from './components/home/sections/child/sub-projects/child/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    BannerComponent,
    SubBannerComponent,
    InfoComponent,
    SectionsComponent,
    SubAboutComponent,
    SubGoalsComponent,
    SubProjectsComponent,
    FooterComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ScrollingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
