import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../services/albums.service';

interface Album {
  idAlbum: number;
  titulo: string;
  fecha_lanzamiento: string;
  artista: string;
}

@Component({
  selector: 'app-albumes',
  standalone: false,
  templateUrl: './albumes.component.html',
  styleUrls: ['./albumes.component.scss']
})
export class AlbumesComponent implements OnInit {
  albums: Album[] = [];
  errorMessage: string | null = null;

  constructor(private albumsService: AlbumsService) {}

  ngOnInit(): void {
    this.loadAlbums();
  }

  loadAlbums(): void {
    this.albumsService.getAlbums().subscribe({
      next: (response) => {
        console.log('Respuesta del API:', response); // Depuración
        if (Array.isArray(response)) {
          this.albums = response;
        } else {
          this.errorMessage = 'La respuesta del API no es un array válido.';
          console.error('Respuesta inesperada:', response);
        }
      },
      error: (error) => {
        this.errorMessage = 'Error al cargar los álbumes. Intenta de nuevo más tarde.';
        console.error('Error en la llamada al API:', error);
      }
    });
  }
}