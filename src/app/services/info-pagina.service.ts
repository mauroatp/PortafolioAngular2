//inyecto el servicio creado en el app.component.ts y lo muestra cuando carga la web

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina';
import { InfoPersona } from '../interfaces/InfoPersona';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  equipo: InfoPersona[];
  cargada = false;

  constructor(private http: HttpClient) {
    //console.log('servicio de info pagina');
      this.cargarInfo();
      this.cargarEquipo();
  }

  private cargarInfo(){
    this.http.get('assets/data/data-pagina.json')
    .subscribe((resp: InfoPagina) => {

      this.cargada = true;
      this.info = resp;
      //console.log(this.info);

    });
  }

  private cargarEquipo(){
    this.http.get('https://angular-html-f2929.firebaseio.com/equipo.json')
    .subscribe((resp: InfoPersona[]) => {
      this.cargada = true;
      this.equipo = resp;
      //console.log(this.equipo);
    });
  }
}
