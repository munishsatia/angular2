import { Component, OnInit } from '@angular/core';
import { AdService }         from './ad/ad.service';
import { AdItem }            from './ad/ad-item';
import {AdBannerComponent} from './ad/ad-banner.component';
@Component({
  selector: 'my-app',
  template: `<div>
      <add-banner [ads]="ads"></add-banner>
    </div>`,
})
export class AppComponent implements OnInit { 
  name = 'Angular'; 
   ads: AdItem[];
   constructor(private adService: AdService) {}
 ngOnInit() {
    this.ads = this.adService.getAds();
  }
}
