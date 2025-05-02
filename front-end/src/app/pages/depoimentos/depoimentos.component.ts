import { Component, ElementRef, ViewChild } from '@angular/core';
import { CardAvaliationComponent } from "../../components/card-avaliation/card-avaliation.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-depoimentos',
  imports: [ CardAvaliationComponent, CommonModule ],
  templateUrl: './depoimentos.component.html',
  styleUrls:   ['./depoimentos.component.scss']  // ← note o "s" no final
})
export class DepoimentosComponent {
  @ViewChild('carousel', { static: false }) carousel!: ElementRef;

  scrollLeft() {
    const cardWidth = this.carousel.nativeElement
      .querySelector('app-card-avaliation')?.offsetWidth || 250;
    this.carousel.nativeElement
      .scrollBy({ left: -cardWidth - 16, behavior: 'smooth' });
  }
  
  scrollRight() {
    const cardWidth = this.carousel.nativeElement
      .querySelector('app-card-avaliation')?.offsetWidth || 250;
    this.carousel.nativeElement
      .scrollBy({ left:  cardWidth + 16, behavior: 'smooth' });
  }
  
  depoimentos = [
    {
      img: 'assets/imgs/svg/cards-beneficios/pic1.svg',
      name: 'João Abreu Silva',
      rating: 5,
      depoiment: 'Atendimento impecável e fácil de solicitar um serviço, estou 100% satisfeito!!!'
    },
    {
      img: 'assets/imgs/svg/cards-beneficios/pic2.svg',
      name: 'Lucas Abreu',
      rating: 5,
      depoiment: 'Profissionais já vieram uniformizados e equipados, uma empresa bem organizada.'
    },
    {
      img: 'assets/imgs/svg/cards-beneficios/pic3.svg',
      name: 'Carla Pereira Simões',
      rating: 5,
      depoiment: 'Profissionais que solucionaram meu serviço sem burocracia, recomendo.'
    },
    {
      img: 'assets/imgs/svg/cards-beneficios/pic4.svg',
      name: 'Fernanda Matos',
      rating: 4,
      depoiment: 'Equipe muito bem treinada, mas o atendimento no início foi um pouco demorado.'
    },
    {
      img: 'assets/imgs/svg/cards-beneficios/pic5.svg',
      name: 'André Vilela',
      rating: 5,
      depoiment: 'Tudo certo, pessoal super ágil e educado.'
    },
    {
      img: 'assets/imgs/svg/cards-beneficios/pic6.svg',
      name: 'Natália Gonçalves',
      rating: 4,
      depoiment: 'Boa experiência no geral, recomendo.'
    }
  ];
}
