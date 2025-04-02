import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ProductsComponent } from './views/products/products.component';
import { ProductDetailsComponent } from './views/product-details/product-details.component';
import { CartComponent } from './views/cart/cart.component';
import { AboutComponent } from './views/about/about.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Ruta raíz
  { path: 'products', component: ProductsComponent }, // Lista de productos
  { path: 'product/:id', component: ProductDetailsComponent }, // Detalle del producto
  { path: 'cart', component: CartComponent }, // Carrito de compras
  { path: 'about', component: AboutComponent }, // Acerca de la aplicación
  { path: '**', redirectTo: '', pathMatch: 'full' } // Redirección a Home si la ruta no existe
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
