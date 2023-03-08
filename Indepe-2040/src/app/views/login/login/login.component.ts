import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
// import { SharedService } from 'src/app/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;
  loginFailed!: boolean;

  loginForm = this._formBuilder.group({
    emailCtrl: [null, [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
    passwordCtrl: [null, [Validators.required, Validators.minLength(8), Validators.maxLength(32)]]
  });

  onLogin(data: any) {}

  constructor(private router: Router, private _formBuilder: FormBuilder) { }

  ngOnInit(): void { }
}
