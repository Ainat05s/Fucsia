import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login-fucsia-flow',
  standalone: false,
  templateUrl: './login-fucsia-flow.component.html',
  styleUrls: ['./login-fucsia-flow.component.scss']
})
export class LoginFucsiaFlowComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(): void {
    this.errorMessage = ''; // Limpiar mensaje de error previo
    this.authService.login(this.email, this.password).subscribe({
      next: (response) => {
        if (response && response[0]?.user) {
          // Mostrar alerta de éxito
          alert('¡Inicio de sesión exitoso! Bienvenido(a), ' + response[0].message);
          // Los datos ya se guardan en localStorage en el AuthService
          this.router.navigate(['/home']);
        } else {
          this.errorMessage = 'Credenciales inválidas. Por favor, intenta de nuevo.';
          alert('Error: Credenciales inválidas. Por favor, intenta de nuevo.');
        }
      },
      error: (err) => {
        this.errorMessage = 'Error al iniciar sesión. Por favor, intenta de nuevo más tarde.';
        alert('Error al iniciar sesión: ' + err.message);
        console.error('Login error:', err);
      }
    });
  }
}