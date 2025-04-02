import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  productos=[
    {id:1, nombre: 'Laptop', precio: 18900},
    {id:2, nombre: 'Smartphone', precio: 9000},
    {id:3, nombre: 'Monitor', precio: 3900},
    {id:4, nombre: 'Teclado', precio: 1200},
    {id:5, nombre: 'Mouse', precio: 800}
  ];

}
