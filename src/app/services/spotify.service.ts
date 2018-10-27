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
    // TODO creando una constante URL que debe de contener la parte de la URL que se repite
    // TODO cuando se realiza una peticion y se le adiciona el "query" es decir la parte
    // TODO que no se repite, en este caso la parte de la peticion que llegara del metodo correspondiente
    const url = `https://api.spotify.com/v1/${query}`;

    // TODO headers correspondientes para realizar las peticiones
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCOqu_iD1SUBV6Or1XmgcWKbLDhQCCN6hpcQxKoys3mfiuYHHlT3846wEg2usKYpIWL9FJPDxsqVzHTkCI'
    });

    return this.http.get(url, {headers});
  }


  // TODO metodo que usa el http.get para realizar las peticiones a alguna API en esta ocacion al API de spotify
  getNewReleasesSpotify() {
    // TODO esta API tiene una capa de seguridad es por eso que debemos de modifcar los HEADERS para poder
    // TODO identificar que somos developrs autorizados para realizar dichas peticiones
    // TODO COMO HEMOS CENTRALIZADO LAS PETICIONES EN EL METODO EN LA PARTE SUPERIOR "GETQUERY" PODEMOS COMENTAR
    // TODO LOS HEADERS
    // const headers = new HttpHeaders({
    // 'Authorization': 'Bearer BQAkL1m-waBNjqIylznYjqoxDPy1AX_FE1nmpZaqYzwnCqfHKLPPQTfDkKhTE1_UDRf2tOLtbLBnMcJqgm8'
    // });

    // TODO recordar usar los headers declarados en caso se necesite
    /*this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers})
      .subscribe(respuestaAPI => {
        console.log(respuestaAPI);
      });*/
    // TODO en este caso usaremos el suscribe en el componente y no en el service
    // return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers});

    // TODO usando el metodo con PIPES y MAPS para enviar infomracion filtrad dentro del PIPE
    // TODO COMO HEMOS CENTRALIZADO LAS PETICIONES EN EL METODO "GETQUERY" PODEMOS COMENTAR ESTE RETURN Y MODIFICARLO
    // TODO PARA DEVOLVER SU RESULTADO DE MANERA CORRECTA
    // return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers})
    // .pipe(map(respuestaAPI => {
    // TODO como vemos debemos de usar un return adicional a diferencia del metodo en la parte superior
    // TODO donde solo existe el return del GET, ademas podemos acceder a un elemento del arreglo "respuestaAPI"
    // TODO mediante la siguiente linea, aunque tambien podemos usar "respuestaAPI.albums.items, pero para esto deberiamos
    // TODO de declarar a "respuestaAPI" del tipo ": any "
    //  return respuestaAPI['albums'].items;
    // }
    // ));

    // TODO METODO CON LA CENTRALIZACION DE SERVICIOS EN EL "GETQUERY"
    // TODO enviamos al "GETQUERY" la parte de la url que no se repite y es unica del servicio
    // TODO ademas recordemos que tenemos que realizar el PIPE y el MAP para filtr la respuesta que se devuelve
    // TODO al component en este caso al HOME.COMPONENT.TS
    return this.getQuery('browse/new-releases')
      .pipe(map(respuestaAPI => {
        return respuestaAPI['albums'].items;
      }));


  }


  // TODO creando un nuevo servicio para la busqueda de Artistas
  getArtist(artistaBuscado: string) {
    // TODO creando la cabecera
    // TODO COMO CENTRALIZAREMOS LAS PETICIONES CON EL METODO "GETQUERY"
    // TODO PODEMOS COMENTAR LAS SIGUIENTES LINEAS PUESTO QUE SE USARAN EN DICHO METODO
    // const headers = new HttpHeaders({
    // 'Authorization': 'Bearer BQAkL1m-waBNjqIylznYjqoxDPy1AX_FE1nmpZaqYzwnCqfHKLPPQTfDkKhTE1_UDRf2tOLtbLBnMcJqgm8'
    // });

    // TODO para poder usar una variable en este caso "artistaBuscado" dentro de la URL
    // TODO debemo de de usar " `` " ademas de ${} con el nombre de la varaible dentro
    // TODO en este caso "artistaBuscado", luego recordar enviar los headers
    // return this.http.get(`https://api.spotify.com/v1/search?q=${artistaBuscado}&type=artist`, {headers});

    // TODO usando PIPES y MAPS para enviar una informacion mas filtrd
    // TODO COMO CENTRALIZAMOS LAS PETICIONES CON EL METODO "GETQUERY"
    // TODO DEBEMOS DE MODIFICAR LAS  SIGUIENTES LINEAS
    // return this.http.get(`https://api.spotify.com/v1/search?q=${artistaBuscado}&type=artist`, {headers})
    // .pipe(map(resultadoBusquedaArtistAPI => {
    // return resultadoBusquedaArtistAPI['artists'].items;
    // }));

    // TODO RECORDAR USAR EL PIPE PUESTO QUE EN EL METODO CENTRALIZADO SOLO TE DEVUELVE LA RESPUESTA
    // TODO GENERAL PARA QUE PUEDA SER REUTILIZADO POR OTRAS PETICIONES
    // TODO Y EL FILTR SE TIENE QUE DAR EN EL METODO DE CADA PETICION
    return this.getQuery(`search?q=${artistaBuscado}&type=artist`)
      .pipe(map(resultadoBusquedaArtistAPI => {
        return resultadoBusquedaArtistAPI['artists'].items;
      }));
  }
}
