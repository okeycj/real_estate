import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  properties: Array<any> = [
    {
      "Id": 1,
      "Name": "Abacha House",
      "Type": "House",
      "Price": 12000
    },
    {
      "Id": 2,
      "Name": "Mbanefo House",
      "Type": "House",
      "Price": 12000
    },
    {
      "Id": 3,
      "Name": "Eni njoku House",
      "Type": "House",
      "Price": 12000
    },
    {
      "Id": 4,
      "Name": "Liberty House",
      "Type": "House",
      "Price": 12000
    },
    {
      "Id": 5,
      "Name": "Kingsily House",
      "Type": "House",
      "Price": 12000
    },
    {
      "Id": 6,
      "Name": "Buhari House",
      "Type": "House",
      "Price": 12000
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
