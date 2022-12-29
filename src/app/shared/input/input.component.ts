import {Component, EventEmitter, forwardRef, Input, OnInit, Output} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements ControlValueAccessor, OnInit {
  private _value: any;
  @Output() check: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input() set value(val) {
    this._value = !!val ? val : null;
    if (this.onChange) {
      this.onChange(this._value);
    }
    if (this.onTouched) {
      this.onTouched();
    }
  }

  get value() {
    return this._value;
  }

  constructor() {
  }

  ngOnInit(): void {
  }

  onChange: any = (_: any) => {
  };
  onTouched: any = () => {
  };

  registerOnChange(fn: (value: Date | null) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  writeValue(value: any): void {
    this.value = value;
  }

}
