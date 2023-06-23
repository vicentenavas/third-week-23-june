import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-on-top-button',
  templateUrl: './on-top-button.component.html',
  styleUrls: ['./on-top-button.component.css']
})
export class OnTopButtonComponent {
  isScrolled: boolean = false;

  @HostListener('window:scroll')
  onScroll(): void {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0;
    this.isScrolled = scrollPosition > windowHeight / 2;
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}
