import { Component, OnInit } from '@angular/core';
import { ArtistsService } from '../services/artists.service';

interface Artist {
  idArtista: number;
  nombre: string;
  pais: string;
}

@Component({
  selector: 'app-artistas-list',
  standalone: false,
  templateUrl: './artistas-list.component.html',
  styleUrls: ['./artistas-list.component.scss']
})
export class ArtistasListComponent implements OnInit {
  artists: Artist[] = [];
  errorMessage: string | null = null;

  constructor(private artistsService: ArtistsService) {}

  ngOnInit(): void {
    this.loadArtists();
  }

  loadArtists(): void {
    this.artistsService.getArtists().subscribe({
      next: (response) => {
        console.log('Respuesta del API:', response); // Depuración
        if (Array.isArray(response)) {
          this.artists = response;
        } else {
          this.errorMessage = 'La respuesta del API no es un array válido.';
          console.error('Respuesta inesperada:', response);
        }
      },
      error: (error) => {
        this.errorMessage = 'Error al cargar los artistas. Intenta de nuevo más tarde.';
        console.error('Error en la llamada al API:', error);
      }
    });
  }
}