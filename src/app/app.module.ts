import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {PlacesService} from './common/services/places.service';


import { AppComponent } from './app.component';
import { ListPlacesComponent } from './list-places/list-places.component';
import { CapitalizePipe } from './common/pipes/capitalize.pipe';
import { CategoryFilterPipe } from './common/pipes/category-filter.pipe';
import { ChangeCategoryDirective } from './common/directives/change-category.directive';
import { WeatherComponent } from './weather/weather.component';
import { SocialComponent } from './social/social.component';


@NgModule({
  declarations: [
    AppComponent,
    ListPlacesComponent,
    CapitalizePipe,
    CategoryFilterPipe,
    ChangeCategoryDirective,
    WeatherComponent,
    SocialComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    PlacesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
