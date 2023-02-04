import { Component } from '@angular/core';
import {Item} from '../../models/item'
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent {
  items: Item[] = [];
  total:number=0;

  constructor(private itemService:ItemService){

  }
  // ngOnInit():void{
  //   this.items = [
  //     {
  //     id:0,
  //     title: 'manzana',
  //     price: 10.5,
  //     quantity: 4,
  //     completed:false
  //   },
  //   {
  //     id:1,
  //     title: 'pan',
  //     price: 13.5,
  //     quantity: 8,
  //     completed:true
  //   }
  // ]
  // this.getTotal();
  // }

  ngOnInit(): void{
    this.items = this.itemService.getItems();
    this.getTotal();
  }

  deleteItem(item:Item){
    this.items = this.items.filter(x=> x.id !== item.id)
    this.getTotal()
  }

  toggleItem(item:Item){
    this.getTotal()
  }

  getTotal(){
    this.total = this.items
    .filter(item=>!item.completed )
    .map(item=>item.quantity*item.price)
    .reduce((acc, item)=> acc += item,0)
  }
}
