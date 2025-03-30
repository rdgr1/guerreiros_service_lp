import { Component } from '@angular/core';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { InicioComponent } from "./pages/inicio/inicio.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, InicioComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}

