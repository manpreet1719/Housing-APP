import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propertycard',
  templateUrl: './propertycard.component.html',
  styleUrls: ['./propertycard.component.css']
})
export class PropertycardComponent  {

  Property:any = {
    "Id": 1,
    "Name" : "Farm House",
    "Type" : "Housing",
    "Price": 12000

  }

}
