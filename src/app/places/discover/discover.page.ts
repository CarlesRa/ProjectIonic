import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../places.service';
import { Place } from '../place.model';
import { ActivatedRoute } from '@angular/router';
import { NavController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {

  loadedPlaces: Place[];
  listLoadedPlaces: Place[];

  constructor(
    private placesService: PlacesService, 
    private menuCtrl: MenuController
    ) {
    console.log("constructor discoverPage")
   }

  ngOnInit() {
    this.loadedPlaces = this.placesService.places;
    this.listLoadedPlaces = this.loadedPlaces.slice(1);
  }

  /* onOpenMenu() {
    this.menuCtrl.toggle();
  } */

  onFilterUpdate(event: any) {
    console.log(event.detail);
  }
}
