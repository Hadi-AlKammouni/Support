import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { AuthService } from '../services/auth-service/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  token?: any
  constructor(private logout: AuthService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.token = localStorage.getItem('token')
    this.logout.logout(this.token)
    .subscribe(response => {
      console.log(response)
      this.toastr.success('Success', response.message);
    }, errorMessage => {
      console.log(errorMessage)
      this.toastr.error('Error', errorMessage);
   })
  }

}
