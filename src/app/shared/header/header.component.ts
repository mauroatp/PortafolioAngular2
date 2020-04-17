import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
info: InfoPaginaService;

  constructor(public _servicio: InfoPaginaService,
              private router: Router) { //2-importo router para navegar al buscador
    this.info = _servicio;
  }

  ngOnInit() {
  }

  buscarProducto(termino: string){ //1-hago el buscador

    if( termino.length < 1){
      return;
    }

    this.router.navigate(['/search', termino]);
    //console.log(termino);
  }
}
