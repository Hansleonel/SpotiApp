import {Component, OnInit} from '@angular/core';
// TODO IMPORTACION DEL ACTIVATEDROUTE PARA PODER USAR EL "ID" QUE SE ENCUENTRA DENTRO DE LA URL GENERADA DESDE EL CARD COMPONENT
// TODO /ARTISTA/ID, DICHA IMPORTACION HACE REFERENCIA A LA RUTA ACTIVA
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) {

    // TODO USANDO EL ACTIVATEDROUTE PARA OBTENER LOS PARAMETROS DE LA RUTA EN ESTE CASO EL ID DEL ARTISTA
    // TODO RECORDAR QUE LOS PARAMS SON DEVUELTOS COMO UN OBJETO JSON ES POR ESO QUE DEBEMO DE ESPECIFICAR QUE
    // TODO CAMPO DE DICHO JSON QUEREMOS OBTENER EN ESTE CASO EL ID DEL ARTISTA
    // TODO DICHO CAMPO DEBE DE COINCIDIR CON EL NOMBRE QUE ESTABLECIMOS EN NUESTROS ROUTES ES DECIR ":ID"
    this.activatedRoute.params.subscribe(params => {
      console.log(params['id']);
    });
  }

  ngOnInit() {
  }

}
