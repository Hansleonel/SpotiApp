import {Component, OnInit} from '@angular/core';
// TODO IMPORTACION DEL ACTIVATEDROUTE PARA PODER USAR EL "ID" QUE SE ENCUENTRA DENTRO DE LA URL GENERADA DESDE EL CARD COMPONENT
// TODO /ARTISTA/ID, DICHA IMPORTACION HACE REFERENCIA A LA RUTA ACTIVA
import {ActivatedRoute} from '@angular/router';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {


  // TODO OBJETO QUE SE RELLENARA CON LA RESPUESTA DE NUESTRO METODO QUE A SU VEZ OBTIENE LA RESPUESTA DE UN SERVICE
  artist: any = {};

  // TODO ARRAY QUE SE RELLENARA CON LA RESPUESTA DEL METODO TOPTRACKS ES DE TIPO ARRAY PUESTO QUE
  // TODO LA RESPUESTA DEL SERVICIO TAMBIEN ES UN ARRAY
  topTracks: any [] = [];

  // TODO CREANDO UNA VARIABLE PARA MANEJAR DE MANERA ADECUADA EL COMPONENTE LOADING <app-loading></app-loading>
  loadingArtist: boolean;

  constructor(private activatedRoute: ActivatedRoute,
              private spotifyService: SpotifyService) {

    // TODO USANDO EL ACTIVATEDROUTE PARA OBTENER LOS PARAMETROS DE LA RUTA EN ESTE CASO EL ID DEL ARTISTA
    // TODO RECORDAR QUE LOS PARAMS SON DEVUELTOS COMO UN OBJETO JSON ES POR ESO QUE DEBEMO DE ESPECIFICAR QUE
    // TODO CAMPO DE DICHO JSON QUEREMOS OBTENER EN ESTE CASO EL ID DEL ARTISTA
    // TODO DICHO CAMPO DEBE DE COINCIDIR CON EL NOMBRE QUE ESTABLECIMOS EN NUESTROS ROUTES ES DECIR ":ID"
    this.activatedRoute.params.subscribe(params => {
      console.log(params['id']);

      // TODO USANDO EL METODO OBTENERARTISTA(ID) PAR OBTENER INFORMACION SOBRE EL ARTISTA CON SU RESPECTIVO ID
      // TODO SACADO USANDO EL ACTIVATED ROUTE EN LA PARTE SUPERIOR, PUESTO QUE DICHO ID SE ENCUENTRA PRESENTE
      // TODO DENTRO DEL LINK ACTUAL
      this.getObtenerArtista(params['id']);
      // TODO USANDO EL MOTODO GETTOPTRACKS(ID)
      this.getTopTracksArtist(params['id']);
    });
  }

  ngOnInit() {
  }

  // TODO METODO QUE USA EL METODO getArtist(id) DEL SERVICIO SPOTIFY.SERVICE.TS PARA OBTENER LOSD ATOS DEL ARTISTA
  getObtenerArtista(id: string) {
    this.loadingArtist = true;

    this.spotifyService.getArtist(id)
      .subscribe(responseArtista => {
        console.log(responseArtista);
        this.artist = responseArtista;
        this.loadingArtist = false;
      });

  }

  // TODO FUNCION PARA USAR EL SERVICIO QUE CONSIGUE LOS TOP TRACKS DE CADA ARTISTA POR ID Y PAIS
  getTopTracksArtist(id: string) {
    this.spotifyService.getTopTracks(id)
      .subscribe(resultTopTracks => {
        console.log(resultTopTracks);
        this.topTracks = resultTopTracks;
        console.log(this.topTracks);
      });
  }

}
