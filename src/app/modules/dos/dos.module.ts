import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DosComponent } from './components/dos/dos.component';



@NgModule({
  declarations: [
    DosComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [DosComponent]
})
export class DosModule { }
