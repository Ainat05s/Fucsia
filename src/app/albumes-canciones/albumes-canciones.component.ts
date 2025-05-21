import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface Song {
  title: string;
  artist: string;
  isVideo?: boolean;
}

interface Album {
  id: number;
  title: string;
  artist: string;
  releaseDate: string;
  cover: string;
  songs: Song[];
}

@Component({
  selector: 'app-albumes-canciones',
  standalone: false,
  templateUrl: './albumes-canciones.component.html',
  styleUrl: './albumes-canciones.component.scss'
})
export class AlbumesCancionesComponent implements OnInit {
  album: Album = {
    id: 1,
    title: 'YHLQMDLG',
    artist: 'Bad Bunny',
    releaseDate: '29 Feb 2020',
    cover: 'https://via.placeholder.com/100',
    songs: [
      { title: 'Si Veo a Tu Mamá', artist: 'Bad Bunny', isVideo: true },
      { title: 'La Dificil', artist: 'Bad Bunny' },
      { title: 'Pero Ya No', artist: 'Bad Bunny' },
      { title: 'La Santa', artist: 'Bad Bunny, Daddy Yankee' },
      { title: 'Yo Perreo Sola', artist: 'Bad Bunny', isVideo: true }
    ]
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Obtener el ID del álbum desde la ruta (opcional, por ahora usamos un álbum fijo)
    const id = this.route.snapshot.paramMap.get('id');
    // Aquí podrías cargar el álbum correspondiente desde un servicio si tuvieras múltiples álbumes
    console.log('ID del álbum:', id);
  }
}