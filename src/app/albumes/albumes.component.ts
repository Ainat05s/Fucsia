import { Component } from '@angular/core';

interface Album {
  id: number;
  title: string;
  artist: string; // Cambiado de 'year' a 'artist'
  cover: string;
}

@Component({
  selector: 'app-albumes',
  standalone: false,
  templateUrl: './albumes.component.html',
  styleUrl: './albumes.component.scss'
})
export class AlbumesComponent {
  albums: Album[] = [
    { id: 1, title: 'YHLQMDLG', artist: 'Bad Bunny', cover: 'https://via.placeholder.com/40' },
    { id: 2, title: 'El Inevitable', artist: 'Camila', cover: 'https://via.placeholder.com/40' },
    { id: 3, title: 'Vida Nueva', artist: 'Reik', cover: 'https://via.placeholder.com/40' },
    { id: 4, title: 'Horizonte', artist: 'Sin Bandera', cover: 'https://via.placeholder.com/40' },
    { id: 5, title: 'Caminos', artist: 'Jesse & Joy', cover: 'https://via.placeholder.com/40' }
  ];
}