import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NofoundComponent } from './nofound/nofound.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NofoundComponent
  ],
  exports:[
    NofoundComponent
  ]
})
export class SharedModule { }
