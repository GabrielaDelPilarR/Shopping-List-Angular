import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {Router} from '@angular/router'; 
import { Item } from '../../models/item';
import {ItemService} from '../../services/item.service';

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})
export class AdditemComponent {
  id:number=0;
  title:string= '';
  price:number= 0;
  quantity: number= 0;
  @Output() addItem:EventEmitter<any> = new EventEmitter();

  constructor(private router:Router, private itemService:ItemService) { }

  ngOnInit(): void {

  }

  onSubmit(){
    const item = new Item();
    item.id=this.id;
    item.title = this.title;
    item.price = this.price;
    item.quantity = this.quantity;
    item.completed = false;

    this.itemService.addItem(item)
      this.router.navigate(['/']);
    

    /* this.addItem.emit(item);
    this.router.navigate(['/']);  */
  }
}
