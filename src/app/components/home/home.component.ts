import {Component, OnInit} from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  // TODO Array que se rellenara con la infomracion recibida del service
  nuevasCanciones: any [] = [];

  // TODO propiedad que nos permitira usar la condicion del ngIF en el HOME.COMPONENT.HTML
  loading: boolean;

  // TODO declarando el spotify del tipo SPOTIFYSERVICE para usar dentro del componente
  // TODO en este caso lo usaremos dentro del mismo constructor
  constructor(private spotify: SpotifyService) {

    // TODO usando la propiedad loading para que cambie de valor o se mantenga de acuerdo
    // TODO a la repsuesta de nuestro servicio
    this.loading = true;

    // TODO metodo que usa el suscribe dentro del mismo service
    // this.spotify.getNewReleasesSpotify();

    // TODO metodo que usa el suscrie dentro del componente
    // TODO como vemos especficamos el tipo del arreglo para que coincida con el arreglo declarado
    // TODO del componente en este caso nuevasCanciones
    this.spotify.getNewReleasesSpotify().subscribe((respuestaAPI: any) => {
      console.log(respuestaAPI);

      // TODO rellenando el arreglo "nuevasCanciones" para poder usar los valores devuletos de la API
      // TODO dentro del home.component.HTML
      // this.nuevasCanciones = respuestaAPI.albums.items;

      // TODO metodo usando PIPES y maps dentro del servicio
      this.nuevasCanciones = respuestaAPI;

      // TODO cambiando el valor de la propiedad loading puesto que la respuesta de el servicio ya realizo su carga
      this.loading = false;
    });
  }

  ngOnInit() {
  }

}
