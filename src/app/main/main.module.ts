import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat/chat.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../shared/material.module';
import {  CustomInputsModule } from '../shared/custom-form/custom-inputs.module';
import { BricksModule } from '../shared/bricks/bricks.module';



const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ChatComponent
  }
]

@NgModule({
  declarations: [
    ChatComponent,


  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CustomInputsModule,
    BricksModule,
    MaterialModule

  ]
})
export class MainModule { }
