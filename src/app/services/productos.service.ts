import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';
import { resolve, reject } from 'q';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

productos: Producto[] = [];
cargando = true;
productosFiltrado: Producto[] = [];

  constructor(private http: HttpClient) { 
    this.cargarProdcutos();
  }

  private cargarProdcutos(){

    return new Promise( ( resolve, reject) =>{ //para que siempre cargue 
      this.http.get('https://angular-html-f2929.firebaseio.com/productos_idx.json')
      .subscribe((resp: Producto[]) => {     
        //console.log("estoy en cargar producto");
        //console.log(resp);
        this.productos = resp;
        //setTimeout(() => { this.cargando = false; }, 1000);
        this.cargando = false;
        resolve();
      });

    });
      
  }

  getProducto(id: string){
    return this.http.get(`https://angular-html-f2929.firebaseio.com/productos/${ id }.json`);
  }

  buscarProducto(termino: string){

    if(this.productos.length === 0){
      //cargar productos
      this.cargarProdcutos().then(()=>{
        //ejecutar despues de tener los productos
        this.filtarProductos(termino);
      });
    }else{
      //aplicar el filtro
      this.filtarProductos(termino);
    }

   // this.productosFiltrado = this.productos.filter(producto => { //lo vacia y completa por cada llamado
   //   return true;
   // });
    console.log(this.productosFiltrado);
  }

  private filtarProductos(termino: string){
    this.productosFiltrado = [];
    termino = termino.toLocaleLowerCase();
     
    this.productos.forEach( prod => {
      const tituloLower = prod.titulo.toLowerCase();
      if(prod.categoria.indexOf( termino) >= 0 || tituloLower.indexOf( termino) >= 0){
        this.productosFiltrado.push(prod);
      }
    });
  }

}
