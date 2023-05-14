import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserSelectorComponent } from './user-selector/user-selector.component';
import { MaterialModule } from '../material.module';
import { HeaderComponent } from './header/header.component';
import { MessageBubbleComponent } from './message-bubble/message-bubble.component';



@NgModule({
  declarations: [
    UserSelectorComponent,
    HeaderComponent,
    MessageBubbleComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    UserSelectorComponent,
    HeaderComponent,
    MessageBubbleComponent
  ]
})
export class BricksModule { }
