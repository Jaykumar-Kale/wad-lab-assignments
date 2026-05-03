import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  email = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    const data = {
      email: this.email,
      password: this.password
    };

    this.authService.login(data).subscribe({
      next: (res) => {
        localStorage.setItem('token', res.token);
        alert("Login successful");
        this.router.navigate(['/profile']);
      },
      error: (err) => alert(err.error.message)
    });
  }
}