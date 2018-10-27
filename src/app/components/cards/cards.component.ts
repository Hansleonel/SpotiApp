import {Component, Input, OnInit} from '@angular/core';
// TODO IMPORTACION DEL ROUTER PARA PODER REDIRECCIONAR AL COMPONENT ARTIST
import {Router} from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  // TODO ESTE INPUT PERMITE RECIBIR "ITEMS" DESDE UN COMPONENTE PADRE, EN ESTE CASO YA SEA HOMECOMPONENT O SEARCHCOMPONENT
  @Input() items: any[] = [];

  constructor(private router: Router) {

  }

  ngOnInit() {
  }

  // TODO ESTE METODO PERMITE SELECCIONAR UN ITEM DE LOS ITEMS RECIBIDOS MEDIANTE EL INPUT EN LA PARTE SUPERIOR
  // TODO COMO VEMOS DICHO ITEM PUEDE CAMBIAR DE ACUERDO A DONDE NOS ENCONTREMOS YA SEA EN HOMECOMPONENT DONDE VEMOS ALBUMNS
  // TODO Y SEARCHCOMPONENT DONDE VEMOS A LOS ARTISTAS DIRECTAMENTE, DICHO METODO TIENE COMO OBJETIVO OBTENER EL ID DEL ARTISTA
  verArtista(item: any) {
    // console.log(item);

    let artistID;
    // TODO SI EL CAMPO "TYPE" DENTRO DE LA REPUESTA DE LA PETICION QUE REALIZAMOS DE ACUERDO AL COMPONENTE ES "artist"
    // TODO ENTONCES EL "ARTISTID" ES "item.id"
    if (item.type === 'artist') {
      artistID = item.id;
    } else {

      // TODO SI EL CAMPO "TYPE" DENTRO DE LA RESPUESTA DE LA PETICION QUE REALIZAMOS DE ACUERDO AL COMPONENTE ES "Albumns"
      // TODO ENTONCES el "ARTISTID" ES "item.artists[0].id
      artistID = item.artists[0].id;

    }

    // console.log(artistID);
    // TODO USANDO EL ROUTER PARA PODER REDIRECCIONAR AL COMPONENTE ARTIST, ADEMAS COMO PODEMOS VER EN NUESTRO "APP.ROUTES.TS"
    // TODO EL PARAMETRO ID ES OBLIGATORIO PARA LA REDIRECCION, ES POR ESO QUE ENVIAMOS "ARTISTID"
    this.router.navigate(['/artist', artistID]);
  }

}
