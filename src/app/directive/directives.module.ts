import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateFormatDirective } from './date-format.directive';

const DIRECTIVES = [
  DateFormatDirective
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DIRECTIVES],
  exports: [DIRECTIVES]
})
export class DirectivesModule { }
