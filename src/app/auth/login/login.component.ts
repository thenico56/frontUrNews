import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginUser } from 'src/app/interfaces/User';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  @ViewChild('form') form!: NgForm

  public error = ''

  public User: LoginUser = {
    email: '',
    pass: '',
    token: ''
  }

  constructor(private service: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  submit() {
    this.service.login(this.User).subscribe( resp => {
      this.router.navigate(['./home/news'])
    }, err => {
      this.error = 'Can not login right now, please try again'
  })
  }

}
