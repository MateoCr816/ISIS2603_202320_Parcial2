import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DinosaurioComponent } from './dinosaurio.component';
import { DinosaurioDetailComponent } from './dinosaurio-detail/dinosaurio-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DinosaurioComponent, DinosaurioDetailComponent],
  exports: [DinosaurioComponent]
})
export class DinosaurioModule { }
