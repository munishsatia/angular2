import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

import {AdBannerComponent} from './ad/ad-banner.component';
import {AdDirective} from './ad/ad.directive';
import {AdService} from './ad/ad.service';

import { HeroJobAdComponent }   from './ad/hero-job-ad.component';
import { HeroProfileComponent } from './ad/hero-profile-ad.component';

@NgModule({
  imports:      [ BrowserModule ],
  providers: [AdService],
  declarations: [ AppComponent,AdBannerComponent,HeroJobAdComponent,HeroProfileComponent,AdDirective ],
  entryComponents : [HeroJobAdComponent,HeroProfileComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { 
  constructor(){}
}
