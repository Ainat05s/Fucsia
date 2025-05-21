import { Component } from '@angular/core';

interface Artist {
  id: number;
  name: string;
  cover: string;
  followers: number;
}

@Component({
  selector: 'app-artistas-list',
  standalone: false,
  templateUrl: './artistas-list.component.html',
  styleUrl: './artistas-list.component.scss'
})
export class ArtistasListComponent {
  artists: Artist[] = [
    { id: 1, name: 'HUMBE', cover: 'https://via.placeholder.com/40', followers: 123456 },
    { id: 2, name: 'ROSALÍA', cover: 'https://via.placeholder.com/40', followers: 789012 },
    { id: 3, name: 'Rihanna', cover: 'https://via.placeholder.com/40', followers: 456789 },
    { id: 4, name: 'Billie Eilish', cover: 'https://via.placeholder.com/40', followers: 234567 },
    { id: 5, name: 'Justin Bieber', cover: 'https://via.placeholder.com/40', followers: 567890 },
    { id: 6, name: 'Nicki Nicole', cover: 'https://via.placeholder.com/40', followers: 345678 }
  ];
}