import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { AuthService } from '../services/auth-service/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private register: AuthService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  signup(form: NgForm) {
    if (!form.valid) {
      return 
    }

    const username = form.value.username
    const email = form.value.email
    const password = form.value.password
    const confirmPassword = form.value.repassword

    this.register.register(username, email, password, confirmPassword)
     .subscribe(response => {
      console.log(response)
      this.toastr.success('Success', response.message);
    }, errorMessage => {
      console.log(errorMessage)
      this.toastr.error('Error', errorMessage);
    })
  }

}