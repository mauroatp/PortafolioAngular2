//1-creo esta clase de routeo para usarlo en el app.module.ts

import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router'; //importo la ruta y el module
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
import { SearchComponent } from './pages/search/search.component';

//2-creo const de rutas
const app_routes: Routes = [
    {path: 'home', component : PortafolioComponent }, //cuando la ruta esta vacia por defecto va al portafolio
    {path: 'about', component : AboutComponent },
    {path: 'item/:id', component : ItemComponent }, //:id redirige con id
    {path: 'search/:termino', component : SearchComponent },
    {path: '**', pathMatch: 'full',  redirectTo : 'home' } // cuando hay error redirect to
];

//3- genero el modulo
@NgModule({
    imports: [
        RouterModule.forRoot( app_routes, {useHash: true}) // importo la const con las rutas previamente creadas, useHash para el ruteo y que el server no crea que es una ruta
    ],
    exports: [
        RouterModule //exporto para visualizarlo en app.component.html //<router-outlet>
    ]
})
//exporto la clase creada y la referencio en  app/app.module.ts
export class AppRoutingModule{ }