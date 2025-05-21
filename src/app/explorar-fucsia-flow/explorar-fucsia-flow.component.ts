import { Component, OnInit } from '@angular/core';
import { SearchService } from '../services/search.service';

interface Song {
  type: string;
  id: number;
  name: string;
  album: string;
  artist: string;
  youtube_link: string;
}

@Component({
  selector: 'app-explorar-fucsia-flow',
  standalone: false,
  templateUrl: './explorar-fucsia-flow.component.html',
  styleUrls: ['./explorar-fucsia-flow.component.scss']
})
export class ExplorarFucsiaFlowComponent implements OnInit {
  suggestedSongs: Song[] = [];
  searchResults: Song[] = [];
  errorMessage: string = '';
  searchQuery: string = '';

  constructor(private searchService: SearchService) {}

  ngOnInit(): void {
    // Carga la API de YouTube
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);

    // Carga canciones sugeridas con una letra aleatoria
    const randomLetter = String.fromCharCode(97 + Math.floor(Math.random() * 26)); // Genera una letra de 'a' a 'z'
    this.loadSuggestedSongs(randomLetter);
  }

  loadSuggestedSongs(query: string): void {
    this.searchService.search(query).subscribe({
      next: (response) => {
        this.suggestedSongs = response;
      },
      error: (err) => {
        this.errorMessage = 'Error al cargar las canciones sugeridas. Por favor, intenta de nuevo más tarde.';
        console.error('Error fetching suggested songs:', err);
      }
    });
  }

  onSearch(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.searchQuery = input.value.trim();
    if (this.searchQuery) {
      this.searchService.search(this.searchQuery).subscribe({
        next: (response) => {
          this.searchResults = response;
          this.errorMessage = '';
        },
        error: (err) => {
          this.errorMessage = 'Error al realizar la búsqueda. Por favor, intenta de nuevo más tarde.';
          this.searchResults = [];
          console.error('Error searching:', err);
        }
      });
    } else {
      this.searchResults = [];
      this.errorMessage = '';
    }
  }

  getYouTubeVideoId(youtubeLink: string): string {
    const videoIdMatch = youtubeLink.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&\?]+)/);
    return videoIdMatch ? videoIdMatch[1] : '';
  }
}