import { Component } from '@angular/core';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { InicioComponent } from "./pages/inicio/inicio.component";
import { CommonModule } from '@angular/common';
import { NossosServicosComponent } from './pages/nossos-servicos/nossos-servicos.component';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, InicioComponent,NossosServicosComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}

