import {Component,Input,AfterViewInit,ViewChild,OnDestroy,ComponentFactoryResolver} from '@angular/core';
import {AdDirective} from './ad.directive';
import {AdItem} from './ad-item';
@Component({
    selector:'ad-banner',
    template:`
        <div class="ad-banner">
            <h3>advertisement</h3>
            <ng-template ad-host></ng-template>
            `
})
export class AdBannerComponent implements AfterViewInit,OnDestroy{
    @Input() ads  : AdItem[];
    currentAddindex : number = -1;
    @ViewChild(AdDirective) adHost : AdDirective;
    subscription : any;
    interval : any;

    constructor(private _compFactResolver:ComponentFactoryResolver){}
     ngAfterViewInit() {

     }
     ngOnDestroy() {

     }
     loadComponents(){
         this.currentAddindex = (this.currentAddindex +1) % this.ads.length;
         let adItem = this.ads[this.currentAddindex];

         let componentFactoryAdComponent = this._compFactResolver.resolveComponentFactory(adItem.component);
         let viewContanerRef = this.adHost.viewcontainerref;
         viewContanerRef.clear();

         let componentRef = viewContanerRef.createComponent(componentFactoryAdComponent);
         (<AdItem>componentRef.instance).data = adItem.data;

     }

     getAds(){
         this.interval = setInterval(()=>{
             this.loadComponents()},3000);
         }
}