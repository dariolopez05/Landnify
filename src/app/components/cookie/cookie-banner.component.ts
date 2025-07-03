import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cookie-banner',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="showBanner" class="fixed bottom-0 inset-x-0 bg-slate-900 text-gray-200 p-4 z-50 shadow-lg">
      <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0">
        <p class="text-sm text-center md:text-left">
          Usamos cookies para analizar el tráfico y mejorar tu experiencia. Puedes aceptar o rechazar su uso.
        </p>
        <div class="flex space-x-3 justify-center">
          <button (click)="acceptCookies()" class="bg-violet-600 hover:bg-violet-700 text-white text-sm px-4 py-2 rounded">
            Aceptar
          </button>
          <button (click)="declineCookies()" class="bg-slate-700 hover:bg-slate-600 text-white text-sm px-4 py-2 rounded">
            Rechazar
          </button>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class CookieBannerComponent implements OnInit {
  showBanner = false;

  ngOnInit(): void {
    const accepted = localStorage.getItem('cookiesAccepted');
    if (accepted === null) {
      this.showBanner = true;
    } else if (accepted === 'true') {
      this.loadAnalytics();
    }
  }

  acceptCookies(): void {
    localStorage.setItem('cookiesAccepted', 'true');
    this.loadAnalytics();
    this.showBanner = false;
  }

  declineCookies(): void {
    localStorage.setItem('cookiesAccepted', 'false');
    this.showBanner = false;
  }

  private loadAnalytics(): void {
    const script1 = document.createElement('script');
    script1.src = 'https://www.googletagmanager.com/gtag/js?id=G-DBBWDKSVH0'; // 👈 Reemplaza con tu ID real
    script1.async = true;
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){ dataLayer.push(arguments); }
      gtag('js', new Date());
      gtag('config', 'G-DBBWDKSVH0');
    `;
    document.head.appendChild(script2);
  }
}
