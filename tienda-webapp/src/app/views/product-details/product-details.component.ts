import { Component } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {
  producto ={
    id:2,
    nombre: "Smartphone Samsung",
    descripcion: 'Un smartphone con pantalla AMOLED, camara triple y bateria de larga duracion.',
    precio:9000
  };

  agregarAlCarrito(){
    alert('Producto agregado al carrito (esto es solouna simulacion).');
  }
}
