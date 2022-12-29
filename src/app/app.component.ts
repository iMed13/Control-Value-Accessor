import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Control-Value-Accessor';
  public form: FormGroup;

  constructor(
    private _fb: FormBuilder,) {
    this.form = this._fb.group({
      inputControl: [null]
    })
  }

  onSubmit() {
    console.log(this.form.getRawValue())
  }

  setValue() {
    this.form.controls['inputControl'].setValue('this is default value')
  }

  empty() {
    this.form.controls['inputControl'].setValue('')
    this.form.updateValueAndValidity();
  }
}
