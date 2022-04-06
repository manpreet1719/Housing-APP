import { Component, Input, OnInit } from '@angular/core';
import { IProperty } from '../IProperty.interface';

@Component({
  selector: 'app-propertycard',
  templateUrl: './propertycard.component.html',
  styleUrls: ['./propertycard.component.css']
})
export class PropertycardComponent  {
  @Input()
  property!: IProperty;

}
