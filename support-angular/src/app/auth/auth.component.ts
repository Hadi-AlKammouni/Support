import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { AuthService } from '../services/auth-service/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private auth: AuthService, private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
    const loaded = localStorage.getItem('logout')
    if(!loaded){
      localStorage.setItem('logout','loaded')
      location.reload()
    } else {
      localStorage.removeItem('logout') 
    }
  }

  signup(form: NgForm) {
    if (!form.valid) {
      return 
    }

    const username = form.value.username
    const email = form.value.email
    const password = form.value.password
    const confirmPassword = form.value.repassword

    this.auth.register(username, email, password, confirmPassword)
     .subscribe(response => {
      console.log(response)
      localStorage.setItem("token", response.access_token)
      this.router.navigate(['/weather'])
      this.toastr.success('Success', response.message);
    }, errorMessage => {
      console.log(errorMessage)
      this.toastr.error('Error', errorMessage);
    })
  }

  login(form: NgForm) {
    if (!form.valid) {
      return 
    }

    const email = form.value.email
    const password = form.value.password

    this.auth.login(email, password)
     .subscribe(response => {
      console.log(response)
      localStorage.setItem("token", response.access_token)
      this.router.navigate(['/weather'])
      this.toastr.success('Success', "Logged in successfully.");
    }, errorMessage => {
      console.log(errorMessage)
      this.toastr.error('Error', errorMessage);
    })
  }

}