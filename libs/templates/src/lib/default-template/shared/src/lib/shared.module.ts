import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [FormsModule, ReactiveFormsModule, CommonModule, RouterModule],
  exports: [FormsModule, ReactiveFormsModule, CommonModule, RouterModule],
  declarations: [],
})
export class SharedModule {
  static forRoot() {
    return {
      ngModule: SharedModule,
      providers: [],
    };
  }
}
