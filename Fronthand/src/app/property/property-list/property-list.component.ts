import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../../services/housing.service';
import { IProperty } from '../IProperty.interface';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  SellRent = 1;
  properties:Array<IProperty>;

  constructor(private route :ActivatedRoute ,private housingservice : HousingService) { 
    this.properties = []
  }

  ngOnInit(): void {
    if(this.route.snapshot.url.toString()){
      this.SellRent = 2; //Means Rent page else the buy page
    }
    this.housingservice.getAllProperties(this.SellRent).subscribe(
      data => {
        this.properties = data;   
        console.log(data)
      }, error =>{
          console.log(error);
      }
    );
  }

}
