import { Component } from '@angular/core';

interface Song {
  title: string;
  artist: string;
}

interface Genre {
  name: string;
  songs: Song[];
  isExpanded: boolean;
}

@Component({
  selector: 'app-generos',
  standalone: false,
  templateUrl: './generos.component.html',
  styleUrl: './generos.component.scss'
})
export class GenerosComponent {
  genres: Genre[] = [
    {
      name: 'Pop',
      songs: [
        { title: 'As It Was', artist: 'Harry Styles' },
        { title: 'Bad Habits', artist: 'Ed Sheeran' },
        { title: 'Levitating', artist: 'Dua Lipa' }
      ],
      isExpanded: false
    },
    {
      name: 'Reggaetón',
      songs: [
        { title: 'Te Boté', artist: 'Nio García' },
        { title: 'Dákiti', artist: 'Bad Bunny' },
        { title: 'Pepas', artist: 'Farruko' }
      ],
      isExpanded: false
    },
    {
      name: 'Rock',
      songs: [
        { title: 'Sweet Child O\' Mine', artist: 'Guns N\' Roses' },
        { title: 'Bohemian Rhapsody', artist: 'Queen' },
        { title: 'Smells Like Teen Spirit', artist: 'Nirvana' }
      ],
      isExpanded: false
    },
    {
      name: 'Indie',
      songs: [
        { title: 'The Night We Met', artist: 'Lord Huron' },
        { title: 'Ophelia', artist: 'The Lumineers' },
        { title: 'Electric Love', artist: 'BØRNS' }
      ],
      isExpanded: false
    }
  ];

  toggleGenre(index: number): void {
    this.genres[index].isExpanded = !this.genres[index].isExpanded;
  }
}