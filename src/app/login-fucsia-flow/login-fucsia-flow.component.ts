import { Component } from '@angular/core';

@Component({
  selector: 'app-login-fucsia-flow',
  standalone: false,
  templateUrl: './login-fucsia-flow.component.html',
  styleUrl: './login-fucsia-flow.component.scss'
})
export class LoginFucsiaFlowComponent {
  // Propiedades para los valores del formulario
  name: string = '';
  email: string = '';
  password: string = '';

  // Función para manejar el envío del formulario
  onSubmit(): void {
    console.log('Formulario enviado:', {
      name: this.name,
      email: this.email,
      password: this.password
    });
    // Aquí puedes implementar la lógica de autenticación
    // Ejemplo: this.authService.login(this.email, this.password);
  }
}