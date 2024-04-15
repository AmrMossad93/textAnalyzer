import {NgModule} from '@angular/core';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSlideToggle, MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatInputModule} from "@angular/material/input";
import {MatRadioModule} from "@angular/material/radio";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";

const angularMaterialModules = [
  MatToolbarModule,
  MatSlideToggleModule,
  MatSlideToggle,
  MatInputModule,
  MatRadioModule,
  MatButtonModule,
  MatCardModule
]


@NgModule({
  imports: [angularMaterialModules],
  exports: [angularMaterialModules]
})
export class AngularMaterialModule {
}
