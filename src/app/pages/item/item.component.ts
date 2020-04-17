import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { ProductoDescripcion } from '../../interfaces/producto-descripcion.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

producto: ProductoDescripcion = {};
id: string;
  constructor( private route: ActivatedRoute, //importo router para leer la url que le paso
                public productoService: ProductosService) { 

   }

  ngOnInit() {

    this.route.params
    .subscribe(parametros =>{

      this.productoService.getProducto(parametros['id'])
      .subscribe((producto: ProductoDescripcion) => {
        this.id = parametros['id']; // guardo el parametro 'id' que me llega por url
        this.producto = producto;
        console.log(producto);
      });
      //console.log(parametros['id']);
    });
  }

}
