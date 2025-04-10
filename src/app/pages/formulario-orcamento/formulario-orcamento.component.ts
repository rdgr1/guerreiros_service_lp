import { Component } from '@angular/core';
import { HeroMinifyComponent } from "../../components/hero-minify/hero-minify.component";
import { FormPriceComponent } from "../../components/form-price/form-price.component";


@Component({
  selector: 'app-formulario-orcamento',
  imports: [HeroMinifyComponent, FormPriceComponent],
  templateUrl: './formulario-orcamento.component.html',
  styleUrl: './formulario-orcamento.component.scss'
})
export class FormularioOrcamentoComponent {

}
