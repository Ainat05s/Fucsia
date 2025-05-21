import { Component, OnInit } from '@angular/core';
import { ContentService } from '../services/content.service';

interface Song {
  idCancion: number;
  titulo: string;
  duracion: string;
  youtube_link: string;
  album: string;
  artista: string;
}

@Component({
  selector: 'app-inico-fucsia-flow',
  standalone: false,
  templateUrl: './inico-fucsia-flow.component.html',
  styleUrls: ['./inico-fucsia-flow.component.scss']
})
export class InicoFucsiaFlowComponent implements OnInit {
  songs: Song[] = [];
  errorMessage: string = '';

  constructor(private contentService: ContentService) {}

  ngOnInit(): void {
    // Carga la API de YouTube
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);

    this.contentService.getHomeContent().subscribe({
      next: (response) => {
        this.songs = response;
      },
      error: (err) => {
        this.errorMessage = 'Error al cargar las canciones. Por favor, intenta de nuevo más tarde.';
        console.error('Error fetching home content:', err);
      }
    });
  }

  getYouTubeVideoId(youtubeLink: string): string {
    const videoIdMatch = youtubeLink.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&\?]+)/);
    return videoIdMatch ? videoIdMatch[1] : '';
  }
}