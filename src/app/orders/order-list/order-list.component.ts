import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  displayedColumns: string[] = ['id', 'name', 'units', 'variant'];
  dataSource = ELEMENT_DATA;
}

export interface PeriodicElement {
  name: string;
  id: number;
  units: number;
  variant: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, name: 'Shoe', units: 1, variant: 'Red-color'},
  {id: 2, name: 'Bottle', units: 4, variant: 'Blue-color'},
  {id: 3, name: 'Cap', units: 1, variant: 'Yellow-color'},
  {id: 4, name: 'T-shirts', units: 4, variant: 'Orange-color'},
  {id: 5, name: 'Shoe', units: 10, variant: 'Red-color'},
  {id: 6, name: 'Bottle', units: 4, variant: 'Green-color'},
];
