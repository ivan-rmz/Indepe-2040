import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { UserInfo } from 'src/app/models/infoUser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  loginFailed!: boolean;

  loginForm = this._formBuilder.group({
    emailCtrl: [null],
    passwordCtrl: [null]
  });

  constructor(private router: Router, private _formBuilder: FormBuilder, private dataService: DataService) { }

  ngOnInit(): void { }

  onLogin(data:any) {
    this.dataService.getUserData(data[0].value, data[1].value).subscribe({
      next: (data: any) => {
        if (data != null) {
          this.loginFailed = false;
          localStorage.setItem('token', JSON.stringify(data));
          console.log(localStorage.getItem('token'));
          console.log('Aqui redirige');
          this.router.navigate(['menu']);
        } else {
          this.loginFailed = true;
          console.log(localStorage.getItem('token'));
          console.log('Login fallido');
        }
      }, error: (error: any) => {
        console.log(error);
      }
    })
  }

}
