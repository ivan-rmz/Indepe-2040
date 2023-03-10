import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-forms-registro',
  templateUrl: './forms-registro.component.html',
  styleUrls: ['./forms-registro.component.css']
})
export class FormsRegistroComponent implements OnInit{
  datosGeneralesInfanteFormGroup !: FormGroup;
  firstFormGroup !: FormGroup;

  ngOnInit(): void {
    this.datosGeneralesInfanteFormGroup = this._formBuilder.group({
      nombre: [null, Validators.required],
      apellido_p: [null, Validators.required],
      apellido_m: [null, Validators.required],
      CURP: [null, Validators.required],
      foto: [null, Validators.required],
      persona_2040: [null, Validators.required],
      fecha_nacimiento: [null, Validators.required],
      fecha_tentativa_nacimiento: [null, Validators.required],
      canal_difusion_plan: [null, Validators.required],
      sexo: [null, Validators.required],
      telefono: [null, Validators.required],
      estatus_acomp: [null, Validators.required],
      responsable: [null, Validators.required],
      seguro_medico: [null, Validators.required],
    });
    this.firstFormGroup = this._formBuilder.group({
      nombre: [null, Validators.required],
    });
  }
  country = new FormControl(null, [Validators.required]);
  state = new FormControl({ value: null, disabled: true }, [
    Validators.required,
  ]);
  city = new FormControl({ value: null, disabled: true }, [
    Validators.required,
  ]);
  constructor(private _formBuilder : FormBuilder) {}
}
