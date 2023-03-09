import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-forms-registro',
  templateUrl: './forms-registro.component.html',
  styleUrls: ['./forms-registro.component.css']
})
export class FormsRegistroComponent {
  firstFormGroup = this._formBuilder.group({
    nombre: ['', Validators.required],
  });
  country = new FormControl(null, [Validators.required]);
  state = new FormControl({ value: null, disabled: true }, [
    Validators.required,
  ]);
  city = new FormControl({ value: null, disabled: true }, [
    Validators.required,
  ]);
  constructor(private _formBuilder : FormBuilder) {}
}
