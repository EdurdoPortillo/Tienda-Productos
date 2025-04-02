import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  productosCarrito =[
    {
      titulo: 'Audifonos Bluetoooth',
      imagen: 'assets/images/audifonos.jpg'
    },
    {
      titulo: 'Smartwatch Xiaomi',
      imagen: 'assets/images/smartwatch.jpg'
    },
    {
      titulo: 'Camara Web HD',
      imagen: 'assets/images/camara.jpg'
    },
    {
      titulo: 'Disco Duro Externo',
      imagen: 'assets/images/disco-duro.jpg'
    },
    {
      titulo: 'Bocina Portatil',
      imagen: 'assets/images/bocina.jpg'
    }
  ];
}
