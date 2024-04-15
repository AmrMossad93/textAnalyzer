import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TextAnalyzerRoutingModule } from './text-analyzer-routing.module';
import { TextAnalyzerComponent } from './Components/text-analyzer/text-analyzer.component';
import {AngularMaterialModule} from "../../../../Core/DesignModule/AngularMaterial/angular-material.module";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    TextAnalyzerComponent
  ],
  imports: [
    CommonModule,
    TextAnalyzerRoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule
  ]
})
export class TextAnalyzerModule { }
