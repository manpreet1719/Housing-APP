import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs/tabset.component';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {

  @ViewChild('Form')
  addPropertyForm!: NgForm;
  @ViewChild('formTabs') formTabs?: TabsetComponent;

  propertyTypes : Array<string> = ['House','Apartment','Duplex'];
  furnishTypes : Array<string> = ['Fully','Semi','Unfurnished'];

  propertyView = {
      "Id": 1,
      "SellRent": 2,
      "Name" : "Farm House6",
      "Type" : "Housing",
      "Price": 12000
     
  };

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  onBack(){

    this.router.navigate(['/']);
  }
  onSubmit(){
    console.log("FORM has BEEN SUBMITTED");
    console.log(this.addPropertyForm);
  }

  selectTab(tabId: number) {
    if (this.formTabs?.tabs[tabId]) {
      this.formTabs.tabs[tabId].active = true;
    }
  }

}
