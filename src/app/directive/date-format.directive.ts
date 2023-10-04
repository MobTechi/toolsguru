import { Directive, HostListener, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appDateFormat]'
})
export class DateFormatDirective {
  @Input('appDateFormat') dateFormat: string = 'DD-MM-YYYY';

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('input', ['$event'])
  onInput(event: Event) {
    const input = this.el.nativeElement as HTMLInputElement;
    const value = input.value.replace(/\D/g, ''); // Remove non-numeric characters
    const formattedValue = this.formatDate(value);
    // Update the input element's value
    this.renderer.setProperty(input, 'value', formattedValue);
  }

  private formatDate(value: string): string {
    const day = value.slice(0, 2);
    const month = value.slice(2, 4);
    const year = value.slice(4, 8);
    const formattedValue = [day, month, year].filter(Boolean).join('-');
    return formattedValue;
  }
}
