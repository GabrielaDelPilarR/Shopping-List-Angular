import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Item } from '../models/item';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  items: Item[]=[
    {
      id: 0,
      title: 'manzana',
      price: 20,
      quantity: 4,
      completed: false
    },
    {
      id: 0,
      title: 'leche',
      price: 20,
      quantity: 4,
      completed: true
    },
    {
      id: 0,
      title: 'leche',
      price: 20,
      quantity: 4,
      completed: true
    }
  ]

  constructor() { }


   getItems(){
    return this.items;
  } 
 
  addItem(item:Item){
    this.items.unshift(item)
  }


  
}
