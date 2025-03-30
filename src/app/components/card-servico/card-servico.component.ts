import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-servico',
  imports: [],
  templateUrl: './card-servico.component.html',
  styleUrl: './card-servico.component.scss'
})
export class CardServicoComponent {
@Input() textPrimary: string = '';
@Input() textSecondary: string = '';
@Input() img: string = '';
}
