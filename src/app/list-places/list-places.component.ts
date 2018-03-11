import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { PlacesService } from '../common/services/places.service';
import { Place } from '../places';

@Component({
  selector: 'app-list-places',
  templateUrl: './list-places.component.html',
  styleUrls: ['./list-places.component.css']
})
export class ListPlacesComponent implements OnInit {

  public categories: string[]  = ['city_resort', 'mountain_resort'];
  public choosenCategory = this.categories[0];
  public places$: Observable<Place[]>;
  public selectedPlace: Place;

  constructor(private _placeService: PlacesService) {
  }

  @Output()
  public selectPlaceEvent: EventEmitter<Place> = new EventEmitter();

  public ngOnInit(): void {
    this.places$ = this._placeService.places$;
  }

  public onChangeCategory (event: MouseEvent, category: string): void {
    event.preventDefault();
    this.choosenCategory = category;
  }
  public onSelectPlace(place: Place): void {
      this.selectedPlace = place;
      this.selectPlaceEvent.emit(place);
  }
}
