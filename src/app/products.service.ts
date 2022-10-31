import { Injectable } from '@angular/core';
import { Product} from './product.model';
import { PersonaI } from './model/persona.model';
import {observable} from 'rxjs';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import { ProductsComponent } from './products/products.component';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private contactoCollection: AngularFireList<any>;

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

  constructor(private afs: AngularFireDatabase) { }

  getAllProducts() {
    return this.products;
  }

  getProduct(id:string){
    return this.products.find(item => id===item.id);
  }
  savePerson(personai: PersonaI) {
    this.contactoCollection = this.GetUsersList();
    this.contactoCollection.push({
    email: personai.email,
    nombre: personai.nombre,
    mensaje: personai.mensaje
     })
  }

  GetUsersList() {
    this.contactoCollection = this.afs.list('jugueton-d5601');
    return this.contactoCollection;
    console.log(this.contactoCollection);
  }

  
  

}
