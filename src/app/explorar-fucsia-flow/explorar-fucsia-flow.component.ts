import { Component } from '@angular/core';

@Component({
  selector: 'app-explorar-fucsia-flow',
  standalone: false,
  templateUrl: './explorar-fucsia-flow.component.html',
  styleUrl: './explorar-fucsia-flow.component.scss'
})
export class ExplorarFucsiaFlowComponent {
  // Datos de ejemplo para canciones sugeridas
  suggestedSongs: { title: string; artist: string }[] = [
    { title: 'Dancing Queen', artist: 'ABBA' },
    { title: 'Levitating', artist: 'Dua Lipa' },
    { title: 'Uptown Funk', artist: 'Mark Ronson ft. Bruno Mars' }
  ];

  onSearch(event: Event): void {
    const input = event.target as HTMLInputElement;
    console.log('Búsqueda:', input.value); // Aquí puedes implementar la lógica de búsqueda
  }
}