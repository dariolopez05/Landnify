import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <header [class.scrolled]="isScrolled" class="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center py-4">
          <!-- Logo -->
          <a routerLink="/" class="flex items-center space-x-2 group">
            <div class="w-8 h-8 bg-gradient-to-r from-violet-500 to-purple-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span class="text-white font-bold text-lg">L</span>
            </div>
            <span class="text-xl font-bold gradient-text">Landnify</span>
          </a>

          <!-- Desktop Navigation -->
          <div class="hidden md:flex items-center space-x-8">
            <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" 
               class="nav-link text-gray-300 hover:text-violet-400 font-medium transition-colors duration-300">
              Inicio
            </a>
            <a routerLink="/servicios" routerLinkActive="active" 
               class="nav-link text-gray-300 hover:text-violet-400 font-medium transition-colors duration-300">
              Servicios
            </a>
            <a routerLink="/precios" routerLinkActive="active" 
               class="nav-link text-gray-300 hover:text-violet-400 font-medium transition-colors duration-300">
              Precios
            </a>
            <a routerLink="/proyectos" routerLinkActive="active" 
               class="nav-link text-gray-300 hover:text-violet-400 font-medium transition-colors duration-300">
              Proyectos
            </a>
            <a routerLink="/contacto" routerLinkActive="active" 
               class="nav-link text-gray-300 hover:text-violet-400 font-medium transition-colors duration-300">
              Contacto
            </a>
            <a routerLink="/contacto" class="btn-primary ml-4">
              Solicitar Presupuesto
            </a>
          </div>

          <!-- Mobile Menu Button -->
          <button (click)="toggleMobileMenu()" 
                  class="md:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-slate-800 text-gray-300 hover:text-violet-400 transition-colors duration-300">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path *ngIf="!isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
              <path *ngIf="isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>

        <!-- Mobile Navigation -->
        <div *ngIf="isMobileMenuOpen" class="md:hidden pb-4 animate-slide-up">
          <div class="space-y-2">
            <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}"
               (click)="closeMobileMenu()"
               class="block px-4 py-2 text-gray-300 hover:text-violet-400 hover:bg-slate-800 rounded-lg transition-all duration-300">
              Inicio
            </a>
            <a routerLink="/servicios" routerLinkActive="active"
               (click)="closeMobileMenu()"
               class="block px-4 py-2 text-gray-300 hover:text-violet-400 hover:bg-slate-800 rounded-lg transition-all duration-300">
              Servicios
            </a>
            <a routerLink="/precios" routerLinkActive="active"
               (click)="closeMobileMenu()"
               class="block px-4 py-2 text-gray-300 hover:text-violet-400 hover:bg-slate-800 rounded-lg transition-all duration-300">
              Precios
            </a>
            <a routerLink="/proyectos" routerLinkActive="active"
               (click)="closeMobileMenu()"
               class="block px-4 py-2 text-gray-300 hover:text-violet-400 hover:bg-slate-800 rounded-lg transition-all duration-300">
              Proyectos
            </a>
            <a routerLink="/contacto" routerLinkActive="active"
               (click)="closeMobileMenu()"
               class="block px-4 py-2 text-gray-300 hover:text-violet-400 hover:bg-slate-800 rounded-lg transition-all duration-300">
              Contacto
            </a>
            <div class="pt-2">
              <a routerLink="/contacto" (click)="closeMobileMenu()" 
                 class="block w-full text-center btn-primary">
                Solicitar Presupuesto
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  `,
  styles: [`
    header {
      background: rgba(15, 23, 42, 0.8);
      backdrop-filter: blur(12px);
    }

    header.scrolled {
      background: rgba(15, 23, 42, 0.95);
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    }

    .nav-link.active {
      @apply text-violet-400;
      position: relative;
    }

    .nav-link.active::after {
      content: '';
      position: absolute;
      bottom: -8px;
      left: 0;
      right: 0;
      height: 2px;
      background: linear-gradient(to right, #8b5cf6, #a855f7);
      border-radius: 1px;
    }

    .nav-link:hover {
      position: relative;
    }

    .nav-link:hover::after {
      content: '';
      position: absolute;
      bottom: -8px;
      left: 0;
      right: 0;
      height: 2px;
      background: linear-gradient(to right, #8b5cf6, #a855f7);
      border-radius: 1px;
      opacity: 0.5;
    }
  `]
})
export class HeaderComponent implements OnInit {
  isScrolled = false;
  isMobileMenuOpen = false;

  ngOnInit(): void {
    this.checkScroll();
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.checkScroll();
  }

  private checkScroll(): void {
    this.isScrolled = window.pageYOffset > 50;
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
  }
}