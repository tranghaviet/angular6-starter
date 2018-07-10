import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  username;
  password;

  constructor(protected authService: AuthService) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.username, this.password).subscribe(data => {
      alert('success');
      console.log(data);
    },
    err => {
      console.error(err);
    });
  }
}
