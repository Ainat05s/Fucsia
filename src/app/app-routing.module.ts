import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFucsiaFlowComponent } from './login-fucsia-flow/login-fucsia-flow.component';
import { InicoFucsiaFlowComponent } from './inico-fucsia-flow/inico-fucsia-flow.component';
import { ExplorarFucsiaFlowComponent } from './explorar-fucsia-flow/explorar-fucsia-flow.component';
import { PerfilFucsiaFlowComponent } from './perfil-fucsia-flow/perfil-fucsia-flow.component';
import { ReproduccionCancionesComponent } from './reproduccion-canciones/reproduccion-canciones.component';
import { ArtistasComponent } from './artistas/artistas.component';
import { AlbumesComponent } from './albumes/albumes.component';
import { AlbumesCancionesComponent } from './albumes-canciones/albumes-canciones.component';
import { ArtistasListComponent } from './artistas-list/artistas-list.component';

const routes: Routes = [
  { path: 'login', component: LoginFucsiaFlowComponent },
  { path: 'home', component: InicoFucsiaFlowComponent },
  { path: 'explorar', component: ExplorarFucsiaFlowComponent },
  { path: 'perfil', component: PerfilFucsiaFlowComponent },
  { path: 'reproduccion', component: ReproduccionCancionesComponent },
  { path: 'artistas', component: ArtistasComponent },
  { path: 'albumes', component: AlbumesComponent },
  { path: 'albumes/:id', component: AlbumesCancionesComponent },
  { path: 'artistas-list', component: ArtistasListComponent }, // Nueva ruta para ArtistasListComponent
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }