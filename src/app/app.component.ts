import { Component } from '@angular/core';
import { MouseEvent } from '@agm/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  zoom: any = 8;
  lat: any = 51.673858;
  lng: any = 7.815982;

  clickedMarker(label: any, index: any) {
    console.log(`clicked the marker: ${label || index}`)
  }
  
  mapClicked($event: any) {
    console.log($event, '$event')
  }
  
  markerDragEnd(m: any, $event: any) {
    console.log('dragEnd', m, $event);
  }
  
  markers: any[] = [
	  {
		  lat: 51.673858,
		  lng: 7.815982,
		  label: 'A',
		  draggable: true
	  },
	  {
		  lat: 51.373858,
		  lng: 7.215982,
		  label: 'B',
		  draggable: false
	  },
	  {
		  lat: 51.723858,
		  lng: 7.895982,
		  label: 'C',
		  draggable: true
	  }
  ]
}
