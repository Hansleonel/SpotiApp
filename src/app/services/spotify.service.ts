import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
// TODO importacion para el uso de MAP
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  // TODO declarando el http del tipo HTTPCLIENT y no httpclientmodule para realizar las peticiones GET
  constructor(private http: HttpClient) {
    console.log('Spotify Service Listo');
  }

  // TODO centralizando peticiones mediante una funcion "getQuery(query)"
  getQuery(query: string) {
  }


  // TODO metodo que usa el http.get para realizar las peticiones a alguna API en esta ocacion al API de spotify
  getNewReleasesSpotify() {
    // TODO esta API tiene una capa de seguridad es por eso que debemos de modifcar los HEADERS para poder
    // TODO identificar que somos developrs autorizados para realizar dichas peticiones
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBdG-horNECXWVlJr7sXPqesxnZOrgmbEPe0HfscCx4zoGcWou84rJpWc6AFUo3jbzTNjPAmLJq5gda0IE'
    });

    // TODO recordar usar los headers declarados en caso se necesite
    /*this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers})
      .subscribe(respuestaAPI => {
        console.log(respuestaAPI);
      });*/
    // TODO en este caso usaremos el suscribe en el componente y no en el service
    // return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers});

    // TODO usando el metodo con PIPES y MAPS para enviar infomracion filtrad dentro del PIPE
    return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers})
      .pipe(map(respuestaAPI => {
          // TODO como vemos debemos de usar un return adicional a diferencia del metodo en la parte superior
          // TODO donde solo existe el return del GET, ademas podemos acceder a un elemento del arreglo "respuestaAPI"
          // TODO mediante la siguiente linea, aunque tambien podemos usar "respuestaAPI.albums.items, pero para esto deberiamos
          // TODO de declarar a "respuestaAPI" del tipo ": any "
          return respuestaAPI['albums'].items;
        }
      ));


  }


  // TODO creando un nuevo servicio para la busqueda de Artistas
  getArtist(artistaBuscado: string) {
    // TODO creando la cabecera
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBdG-horNECXWVlJr7sXPqesxnZOrgmbEPe0HfscCx4zoGcWou84rJpWc6AFUo3jbzTNjPAmLJq5gda0IE'
    });

    // TODO para poder usar una variable en este caso "artistaBuscado" dentro de la URL
    // TODO debemo de de usar " `` " ademas de ${} con el nombre de la varaible dentro
    // TODO en este caso "artistaBuscado", luego recordar enviar los headers
    // return this.http.get(`https://api.spotify.com/v1/search?q=${artistaBuscado}&type=artist`, {headers});

    // TODO usando PIPES y MAPS para enviar una informacion mas filtrd
    return this.http.get(`https://api.spotify.com/v1/search?q=${artistaBuscado}&type=artist`, {headers})
      .pipe(map(resultadoBusquedaArtistAPI => {
        return resultadoBusquedaArtistAPI['artists'].items;
      }));
  }
}
