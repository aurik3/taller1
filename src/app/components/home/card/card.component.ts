import { Component, EventEmitter, Input, Output } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule,MatGridListModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() products: Array<{ name: string, price: number, image: string }> = [];
  @Output() addCard = new EventEmitter<number>();

  card:[] = [];


  addProduct(list:any){
    console.log(list)
   /* this.card.push(list) */
   //this.addCard.emit(this.card)
  }
}
