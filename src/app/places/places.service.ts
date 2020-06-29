import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private _places: Place[] = [
    new Place(
      'p1',
      'Manhattan Mansion', 
      'In the heart of New York City', 
      'https://citytravelnyc.com/wp-content/uploads/2015/04/Excursion-Alto-y-Bajo-Manhattan.png' , 
      149.99
    ),
    new Place(
      'p2',
      'L\'Amour Toujours', 
      'In the heart of Paris City', 
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Champs-%C3%89lys%C3%A9es_from_the_Arc_de_Triomphe.jpg/300px-Champs-%C3%89lys%C3%A9es_from_the_Arc_de_Triomphe.jpg',
      189.99
    ),
    new Place(
      'p3',
      'The Foggy Palace', 
      'Not your average city trip!', 
      'https://cdn-img-feed.streeteasy.com/nyc/image/81/309760881.jpg' , 
      99.99
    )
  ];

  get places() {
    return [...this._places];
  }
  constructor() { }
}
