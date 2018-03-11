import { Component, Input } from '@angular/core';
import {SocialInfo} from '../places';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent {

  constructor() { }

  @Input()
  socialInfo: SocialInfo;

}
