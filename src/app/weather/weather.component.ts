import { Component, Input } from '@angular/core';
import {Weather} from '../places';
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {

  constructor() { }

  @Input()
  weather: Weather;

}
