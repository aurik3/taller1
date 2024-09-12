import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/home/navbar/navbar.component";
import {MatGridListModule} from '@angular/material/grid-list';
import { CardComponent } from "./components/home/card/card.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, MatGridListModule, CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  products: Array<{ name: string, price: number,image:string }> = [
    { name: 'leche', price: 25.90,image:'https://s2.abcstatics.com/media/bienestar/2020/07/09/leche-fucha-kqoG--1248x698@abc.jpg'},
    { name: 'huevos', price: 30.28,image:'https://imagenes.20minutos.es/files/image_990_556/uploads/imagenes/2022/07/22/huevos.jpeg' },
    { name: 'pan', price: 68.69,image:'https://www.hola.com/horizon/landscape/918cb28d3a78-pan-leche-t.jpg' },
    { name: 'arroz', price: 65.49,image:'https://d36fw6y2wq3bat.cloudfront.net/recipes/el-perfecto-arroz-blanco/900/el-perfecto-arroz-blanco_version_1655956867.jpg' },
  ];

  totalSum: number = 0;

  onTotalSumReceived(total: number): void {
    this.totalSum = total;
  }

}
