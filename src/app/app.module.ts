import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFucsiaFlowComponent } from './login-fucsia-flow/login-fucsia-flow.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { InicoFucsiaFlowComponent } from './inico-fucsia-flow/inico-fucsia-flow.component';
import { ExplorarFucsiaFlowComponent } from './explorar-fucsia-flow/explorar-fucsia-flow.component';
import { PerfilFucsiaFlowComponent } from './perfil-fucsia-flow/perfil-fucsia-flow.component';
import { ReproduccionCancionesComponent } from './reproduccion-canciones/reproduccion-canciones.component';
import { ArtistasComponent } from './artistas/artistas.component';
import { AlbumesComponent } from './albumes/albumes.component';
import { AlbumesCancionesComponent } from './albumes-canciones/albumes-canciones.component';
import { ArtistasListComponent } from './artistas-list/artistas-list.component';
import { GenerosComponent } from './generos/generos.component';
import { SafePipe } from './pipes/safe.pipe';
import { YouTubePlayerModule } from '@angular/youtube-player';

@NgModule({
  declarations: [
    AppComponent,
    LoginFucsiaFlowComponent,
    InicoFucsiaFlowComponent,
    ExplorarFucsiaFlowComponent,
    PerfilFucsiaFlowComponent,
    ReproduccionCancionesComponent,
    ArtistasComponent,
    AlbumesComponent,
    AlbumesCancionesComponent,
    ArtistasListComponent,
    GenerosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    SafePipe,
    YouTubePlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }