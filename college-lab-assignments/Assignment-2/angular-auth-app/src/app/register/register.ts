import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {

  name = '';
  email = '';
  password = '';

  constructor(private authService: AuthService) {}

  register() {
    const data = {
      name: this.name,
      email: this.email,
      password: this.password
    };

    this.authService.register(data).subscribe({
      next: () => alert("User registered successfully"),
      error: (err) => alert(err.error.message)
    });
  }
}