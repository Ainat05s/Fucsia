import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from '../services/profile.service';

interface ProfileResponse {
  idUsuario: number;
  nombre: string;
  email: string;
  fecha_registro: string;
  idCancion: number;
  titulo: string;
  duracion: string;
  youtube_link: string;
  album: string;
  artista: string;
}

@Component({
  selector: 'app-perfil-fucsia-flow',
  standalone: false,
  templateUrl: './perfil-fucsia-flow.component.html',
  styleUrls: ['./perfil-fucsia-flow.component.scss']
})
export class PerfilFucsiaFlowComponent implements OnInit {
  user = {
    name: '',
    email: '',
    profilePic: 'https://via.placeholder.com/150',
    description: 'Amante de la música pop y el rock alternativo.'
  };
  favoriteSongs: ProfileResponse[] = [];
  errorMessage: string = '';

  constructor(private profileService: ProfileService, private router: Router) {}

  ngOnInit(): void {
    // Carga la API de YouTube
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);

    // Obtener userId desde localStorage
    const authData = JSON.parse(localStorage.getItem('authData') || '{}');
    const userId = authData.id;

    if (userId) {
      this.profileService.getProfile(userId).subscribe({
        next: (response) => {
          if (response && response.length > 0) {
            this.user.name = response[0].nombre;
            this.user.email = response[0].email;
            this.favoriteSongs = response; // Asigna las canciones favoritas
          } else {
            this.errorMessage = 'No se encontraron datos del perfil.';
          }
        },
        error: (err) => {
          this.errorMessage = 'Error al cargar el perfil. Por favor, intenta de nuevo más tarde.';
          console.error('Error fetching profile:', err);
        }
      });
    } else {
      this.errorMessage = 'No se encontró el ID de usuario. Por favor, inicia sesión.';
      this.router.navigate(['/login']);
    }
  }

  logout(): void {
    localStorage.removeItem('authData');
    this.router.navigate(['/login']);
  }

  getYouTubeVideoId(youtubeLink: string): string {
    const videoIdMatch = youtubeLink.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&\?]+)/);
    return videoIdMatch ? videoIdMatch[1] : '';
  }
}