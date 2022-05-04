import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { Routes , RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PropertycardComponent } from './property/propertycard/propertycard.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { HousingService } from './services/housing.service';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { PropertyDetailComponent } from './property/property-detail/property-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserLoginComponent } from './users/user-login/user-login.component';
import { UserRegisterComponent } from './users/user-register/user-register.component';
import { UserserviceService } from './services/userservice.service';
import { AuthService } from './services/auth.service';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

const appRoutes :Routes = [
  {path: '' , component : PropertyListComponent},
  {path: 'rent-property' , component : PropertyListComponent},
  {path: 'add-property' , component : AddPropertyComponent},
  {path: 'property-detail/:id' , component : PropertyDetailComponent},
  {path: 'user/login' , component : UserLoginComponent},
  {path: 'user/register' , component : UserRegisterComponent},
  {path: '**' , component : PropertyListComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PropertycardComponent,
    PropertyListComponent,
    AddPropertyComponent,
    PropertyDetailComponent,
    UserLoginComponent,
    UserRegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    TooltipModule.forRoot(),
    TabsModule.forRoot(),
    ButtonsModule.forRoot(),
    BsDatepickerModule.forRoot()

  ],
  providers: [
    HousingService,
    UserserviceService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
