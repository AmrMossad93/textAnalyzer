import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MainRoutingModule} from './main-routing.module';
import {MainComponent} from './Components/main/main.component';
import {AngularMaterialModule} from "../../Core/DesignModule/AngularMaterial/angular-material.module";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule
  ]
})
export class MainModule {
}
