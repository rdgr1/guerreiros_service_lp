import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewInit,
  OnDestroy,
  Inject,
  PLATFORM_ID
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CardAvaliationComponent } from '../../components/card-avaliation/card-avaliation.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-depoimentos',
  standalone: true,
  imports: [CardAvaliationComponent, CommonModule],
  templateUrl: './depoimentos.component.html',
  styleUrls: ['./depoimentos.component.scss']
})
export class DepoimentosComponent implements AfterViewInit, OnDestroy {
  @ViewChild('carousel', { static: false }) carousel!: ElementRef<HTMLDivElement>;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

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

  private slideWidth!: number;
  private total!: number;
  private gap = 16;
  private autoplayId!: any;
  private autoplayDelay = 4500; // 3 segundos

  ngAfterViewInit(): void {
    // só roda no browser
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const el = this.carousel.nativeElement;
    const cards = Array.from(el.querySelectorAll('app-card-avaliation')) as HTMLElement[];
    this.total = cards.length;
    this.slideWidth = cards[0].offsetWidth + this.gap;

    // clona todos os slides no início e no fim
    cards.forEach(card => {
      el.appendChild(card.cloneNode(true));
      el.insertBefore(card.cloneNode(true), el.firstChild);
    });

    // posiciona no “início verdadeiro”
    el.scrollLeft = this.slideWidth * this.total;

    // ao chegar nas bordas clonadas, faz o pulo silencioso
    el.addEventListener('scroll', () => {
      if (el.scrollLeft <= 0) {
        el.scrollLeft += this.slideWidth * this.total;
      } else if (el.scrollLeft >= this.slideWidth * this.total * 2) {
        el.scrollLeft -= this.slideWidth * this.total;
      }
    });

    this.startAutoplay();
  }

  scrollLeft(): void {
    const el = this.carousel.nativeElement;
    const target = el.scrollLeft - this.slideWidth;

    if (typeof el.scrollBy === 'function') {
      el.scrollBy({ left: -this.slideWidth, behavior: 'smooth' });
    } else {
      el.scrollLeft = target; // smooth via CSS
    }
  }

  scrollRight(): void {
    const el = this.carousel.nativeElement;
    const target = el.scrollLeft + this.slideWidth;

    if (typeof el.scrollBy === 'function') {
      el.scrollBy({ left: this.slideWidth, behavior: 'smooth' });
    } else {
      el.scrollLeft = target;
    }
  }

  private startAutoplay(): void {
    this.autoplayId = setInterval(() => this.scrollRight(), this.autoplayDelay);
  }

  pauseAutoplay(): void {
    clearInterval(this.autoplayId);
  }

  resumeAutoplay(): void {
    clearInterval(this.autoplayId);
    this.startAutoplay();
  }

  ngOnDestroy(): void {
    clearInterval(this.autoplayId);
  }
}