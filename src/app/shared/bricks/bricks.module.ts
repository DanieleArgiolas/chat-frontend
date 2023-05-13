import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserSelectorComponent } from './user-selector/user-selector.component';
import { MaterialModule } from '../material.module';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    UserSelectorComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    UserSelectorComponent,
    HeaderComponent
  ]
})
export class BricksModule { }
