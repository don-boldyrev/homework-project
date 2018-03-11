import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {delay} from 'rxjs/operators';
import 'rxjs/add/observable/of';
import { PLACES, Place } from '../../places';

// @Injectable()
export class PlacesService {
  constructor() { }
  public get places$(): Observable<Place[]> {
    return Observable.of(PLACES).pipe(
      delay(1000)
    );
  }
}
