import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { throwError } from 'rxjs';
import {ProductsService} from 'src/app/products.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  createFormGroup(){
    return new FormGroup({
      email: new FormControl(''),
      nombre: new FormControl(''),
      mensaje: new FormControl(''),
    })
  }
  register: FormGroup;

  constructor(private db : ProductsService)
{(
this.register = this.createFormGroup());
}

  ngOnInit(): void {
  }

  onRegister(){
    this.db.savePerson(this.register.value);
    console.log(this.register.value);
    alert('Los datos se han guardado correctamente');
  }

}


