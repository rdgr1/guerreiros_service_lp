import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { ButtonSecondComponent } from "../../components/button-second/button-second.component";

@Component({
  selector: 'app-inicio',
  imports: [ButtonSecondComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})
export class InicioComponent {

}
