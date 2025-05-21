import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFucsiaFlowComponent } from './login-fucsia-flow/login-fucsia-flow.component';
import { InicoFucsiaFlowComponent } from './inico-fucsia-flow/inico-fucsia-flow.component';
import { ExplorarFucsiaFlowComponent } from './explorar-fucsia-flow/explorar-fucsia-flow.component';
import { PerfilFucsiaFlowComponent } from './perfil-fucsia-flow/perfil-fucsia-flow.component';
import { ReproduccionCancionesComponent } from './reproduccion-canciones/reproduccion-canciones.component';
import { ArtistasComponent } from './artistas/artistas.component';

const routes: Routes = [
  { path: 'login', component: LoginFucsiaFlowComponent },
  { path: 'home', component: InicoFucsiaFlowComponent },
  { path: 'explorar', component: ExplorarFucsiaFlowComponent },
  { path: 'perfil', component: PerfilFucsiaFlowComponent },
  { path: 'reproduccion', component: ReproduccionCancionesComponent },
  { path: 'artistas', component: ArtistasComponent }, // Nueva ruta agregada
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }