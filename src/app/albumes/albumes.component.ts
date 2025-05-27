import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../services/albums.service';

interface Album {
  idAlbum: number;
  titulo: string;
  artista: string;
  fecha_lanzamiento: string;
  cover?: string; // Opcional, ya que no viene en la respuesta del API
}

@Component({
  selector: 'app-albumes',
  standalone: false,
  templateUrl: './albumes.component.html',
  styleUrl: './albumes.component.scss'
})
export class AlbumesComponent implements OnInit {
  albums: Album[] = [];
  errorMessage: string | null = null;
  isLoading: boolean = false;

  constructor(private albumsService: AlbumsService) {}

  ngOnInit(): void {
    this.loadAlbums();
  }

  loadAlbums(): void {
    this.isLoading = true;
    this.albumsService.getAlbums().subscribe({
      next: (response) => {
        console.log('Respuesta del API de álbumes:', response); // Depuración
        if (Array.isArray(response)) {
          this.albums = response.map(item => ({
            idAlbum: item.idAlbum,
            titulo: item.titulo,
            artista: item.artista,
            fecha_lanzamiento: item.fecha_lanzamiento,
            cover: item.cover || 'https://via.placeholder.com/40' // Fallback para cover
          }));
        } else {
          this.errorMessage = 'La respuesta del API no es un array válido.';
          console.error('Respuesta inesperada:', response);
        }
        this.isLoading = false;
      },
      error: (error) => {
        this.errorMessage = 'Error al cargar los álbumes. Intenta de nuevo más tarde.';
        console.error('Error en la llamada al API:', error);
        this.isLoading = false;
      }
    });
  }
}