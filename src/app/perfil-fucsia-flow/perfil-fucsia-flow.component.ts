import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil-fucsia-flow',
  standalone: false,
  templateUrl: './perfil-fucsia-flow.component.html',
  styleUrl: './perfil-fucsia-flow.component.scss'
})
export class PerfilFucsiaFlowComponent {
  // Datos de ejemplo para el usuario
  user = {
    name: 'Juan Pérez',
    email: 'juan.perez@example.com',
    profilePic: 'https://via.placeholder.com/150',
    description: 'Amante de la música pop y el rock alternativo.'
  };

  // Datos de ejemplo para listas de favoritos
  favoriteSongs = [
    { title: 'Bohemian Rhapsody', artist: 'Queen' },
    { title: 'Shape of You', artist: 'Ed Sheeran' },
    { title: 'Blinding Lights', artist: 'The Weeknd' }
  ];

  favoriteAlbums = [
    { title: 'K-12', year: '2019', artist: 'Melanie Martinez' },
    { title: 'Reggaeton 2017, 2018, 2019 &...', year: '2023', artist: 'Various Artists' }
  ];

  favoriteArtists = ['Queen', 'The Beatles', 'Dua Lipa'];

  // Función para cerrar sesión
  logout(): void {
    // Placeholder: Implementa aquí tu lógica de cierre de sesión
    console.log('Cerrando sesión...');
    // Ejemplo: Puedes redirigir al usuario o limpiar el estado
    // this.authService.logout();
    // this.router.navigate(['/login']);
  }
}