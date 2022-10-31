import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [
    {
      id: '1',
      image: 'assets/images/thanos.jpg',
      title: 'Figura de Thanos',
      price: 120,
      description: 'Avengers'
    },
    {
      id: '2',
      image: 'assets/images/ash.jpg',
      title: 'Figura de Ash',
      price: 120,
      description: 'Pokemon'
    },
    {
      id: '3',
      image: 'assets/images/carreras_control.jpg',
      title: 'Carrito amarillo',
      price: 600,
      description: 'Carrito de carreras a control remoto'
    },
    {
      id: '4',
      image: 'assets/images/freezer.jpg',
      title: 'Freezer',
      price: 120,
      description: 'Dragon ball Z'
    },
    {
      id: '5',
      image: 'assets/images/sony.jpg',
      title: 'Sony',
      price: 120,
      description: 'Figura de Sony'
    },
    {
      id: '6',
      image: 'assets/images/ferrari.jpg',
      title: 'Stickers',
      price: 120,
      description: 'Carrito ferrari'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  clickProduct (id:number) {
    console.log('product');
    console.log(id);
  }

}
