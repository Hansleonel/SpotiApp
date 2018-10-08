import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {SearchComponent} from './components/search/search.component';
import {ArtistComponent} from './components/artist/artist.component';
import {NavbarComponent} from './shared/navbar/navbar.component';

// TODO IMPORTANDO ROUTERMODULE PARA EL CORRECTO USO DE LAS RUTAS
import {RouterModule} from '@angular/router';
import {ROUTES} from './app.routes';

// TODO IMPORTACION PARA PODER REALIZAR PETICIONES HTTP
import {HttpClientModule} from '@angular/common/http';

// TODO IMPORTACION DE SERVICIOS QUE NO TENGA "providerIn: 'root' " DENTRO DEL INJECTABLE"
import {SpotifyService} from './services/spotify.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    // TODO IMPORTACION PARA REALIZAR PETICIONES
    HttpClientModule,
    // TODO USO DEL RUOUTERMODULE
    RouterModule.forRoot(ROUTES, {useHash: true})
  ],
  providers: [
    // TODO cuando creamos un service desde el comand y dentro del @injectable del SERVICE aparece "providedIn: 'root'" no es necesario
    // TODO declarar el servicio o la importacn, es opcional
    // SpotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
