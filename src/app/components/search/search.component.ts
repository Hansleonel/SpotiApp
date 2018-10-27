import {Component, OnInit} from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {


  artistaEncontrado: any [] = [];

  // TODO creando una propiedad para mostrar el loading component en caso la informacion este cargando
  loadingSearch: boolean;

  // TODO declarando o inyectando el servicio, esta vez usaremos la funcion getArtist del servicio spotify.SERVICE.TS
  constructor(private spotifyService: SpotifyService) {
  }

  // TODO USANDO LA FUNCION BUSCARARTISTA() DEL HTML
  // TODO creando la funcion BuscarArtista que esta presente y es usada dentro del html
  // TODO dicha funcion recibira un valor en este caso "nombreArtista"
  BuscarArtista(nombreArtista: string) {
    this.loadingSearch = true;

    console.log(nombreArtista);


    // TODO USANDO EL SERVICIO DEL SERVICE.TS
    // TODO usando la funcion getArtist() y enviando el nombre del artista "nombreArtista" que a su vez obtuvo su valor
    // TODO con la ayuda del alias "#nombreArtista" dentro del html
    this.spotifyService.getArtist(nombreArtista)
      .subscribe((resultadoBusquedaArtist: any) => {
        // console.log(resultadoBusquedaArtist.artists.item);

        // TODO rellenando mi arreglo para poder usar sus valores dentro del HTML del componente
        // this.artistaEncontrado = resultadoBusquedaArtist.artists.items;

        // TODO al usar PIPES y MAP dentro del service debemos de usar la respuesta de dicho servicio de la sigueinte manera
        // TODO esto se da puesto que la respuesta del service ya hico el filtr de "resultadoBusqueda.artist.item"
        this.artistaEncontrado = resultadoBusquedaArtist;

        this.loadingSearch = false;
      });

  }

  ngOnInit() {
  }

}
