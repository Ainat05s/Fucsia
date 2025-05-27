import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArtistsService } from '../services/artists.service';

interface ArtistResponse {
  idAlbum: number;
  titulo: string;
  fecha_lanzamiento: string;
  artista: string;
  idCancion: number;
  cancion_titulo: string;
  duracion: string;
  youtube_link: string;
  genero: string;
}

interface Song {
  idCancion: number;
  titulo: string;
  reproducciones: string;
  youtube_link: string;
}

interface Album {
  idAlbum: number;
  titulo: string;
  anio: string;
}

interface Artist {
  idArtista: string;
  nombre: string;
  monthlyListeners: string;
  backgroundImage: string;
  songs: Song[];
  albums: Album[];
}

@Component({
  selector: 'app-artistas',
  standalone: false,
  templateUrl: './artistas.component.html',
  styleUrls: ['./artistas.component.scss']
})
export class ArtistasComponent implements OnInit {
  artist: Artist | null = null;
  errorMessage: string = '';
  isLoading: boolean = false;
  activeTab: 'songs' | 'albums' = 'songs';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private artistsService: ArtistsService
  ) {}

  ngOnInit(): void {
    // Carga la API de YouTube
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);

    // Obtener idArtista desde la ruta
    const idArtista = this.route.snapshot.paramMap.get('id');
    if (idArtista) {
      this.loadArtistDetails(idArtista);
    } else {
      this.errorMessage = 'No se proporcionó un ID de artista válido.';
    }
  }

  loadArtistDetails(id: string): void {
    this.isLoading = true;
    this.artistsService.getArtistById(id).subscribe({
      next: (response: ArtistResponse[]) => {
        console.log('Respuesta del API de artista:', response); // Depuración
        if (response && response.length > 0) {
          const firstItem = response[0];
          this.artist = {
            idArtista: id,
            nombre: firstItem.artista,
            monthlyListeners: '13.1M', // Estático
            backgroundImage: 'https://via.placeholder.com/1200x300', // Placeholder
            songs: response.map((item: ArtistResponse) => ({
              idCancion: item.idCancion,
              titulo: item.cancion_titulo,
              reproducciones: this.generateRandomPlays(),
              youtube_link: item.youtube_link
            })),
            albums: response.map((item: ArtistResponse) => ({
              idAlbum: item.idAlbum,
              titulo: item.titulo,
              anio: new Date(item.fecha_lanzamiento).getFullYear().toString()
            }))
          };
        } else {
          this.errorMessage = 'No se encontraron datos para este artista.';
        }
        this.isLoading = false;
      },
      error: (err) => {
        this.errorMessage = 'Error al cargar los datos del artista. Intenta de nuevo más tarde.';
        console.error('Error fetching artist:', err);
        this.isLoading = false;
      }
    });
  }

  toggleTab(tab: 'songs' | 'albums'): void {
    this.activeTab = tab;
  }

  playSong(songId: number): void {
    this.router.navigate(['/reproduccion', songId]);
  }

  viewAlbum(albumId: number): void {
    this.router.navigate(['/albumes', albumId]);
  }

  getYouTubeVideoId(youtubeLink: string): string {
    const videoIdMatch = youtubeLink.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&\?]+)/);
    return videoIdMatch ? videoIdMatch[1] : '';
  }

  private generateRandomPlays(): string {
    const plays = Math.floor(Math.random() * 600_000_000) + 100_000_000;
    return plays.toLocaleString();
  }
}