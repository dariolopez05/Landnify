import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <!-- Hero Section -->
    <section class="relative min-h-[90vh] flex items-center justify-center hero-bg overflow-hidden">
      <!-- Background elements -->
      <div class="absolute inset-0 -z-10">
        <div class="absolute top-20 left-10 w-72 h-72 bg-violet-500/20 rounded-full filter blur-3xl"></div>
        <div class="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl"></div>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="animate-fade-in">
          <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Landing pages profesionales<br>
            <span class="gradient-text">que convierten</span>
          </h1>
          <p class="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Tu web lista, optimizada y funcionando — sin complicaciones
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a routerLink="/precios" class="btn-primary text-lg px-8 py-4 animate-pulse-glow">
              Precios desde 249€
            </a>

            <a routerLink="/proyectos" class="btn-secondary text-lg px-8 py-4">
              Ver ejemplos
            </a>
          </div>
        </div>

        <!-- Scroll indicator - Fixed centering for mobile -->
        <div class="scroll-indicator">
          <div class="w-6 h-10 border-2 border-violet-400 rounded-full flex justify-center">
            <div class="w-1 h-3 bg-violet-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- What is a Landing Page Section -->
    <section class="py-16 bg-slate-900/50" #whatIsSection>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12 animate-on-scroll">
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
            ¿Qué es una <span class="gradient-text">landing page</span>?
          </h2>
          <p class="text-xl text-gray-300 max-w-3xl mx-auto">
            Una landing page es una web profesional diseñada específicamente para convertir visitas en clientes, 
            captar leads y hacer crecer tu negocio.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div class="card card-hover animate-on-scroll text-center">
            <div class="w-16 h-16 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-white mb-4">Conversión Optimizada</h3>
            <p class="text-gray-400">
              Diseñadas específicamente para convertir visitantes en clientes potenciales o ventas reales.
            </p>
          </div>

          <div class="card card-hover animate-on-scroll text-center">
            <div class="w-16 h-16 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-white mb-4">SEO Profesional</h3>
            <p class="text-gray-400">
              Optimizadas para aparecer en Google y atraer tráfico orgánico de calidad a tu negocio.
            </p>
          </div>

          <div class="card card-hover animate-on-scroll text-center">
            <div class="w-16 h-16 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-white mb-4">100% Responsive</h3>
            <p class="text-gray-400">
              Perfectas en móvil, tablet y desktop. Tu web se ve profesional en cualquier dispositivo.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-16" #featuresSection>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12 animate-on-scroll">
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
            ¿Por qué elegir <span class="gradient-text">Landnify</span>?
          </h2>
          <p class="text-xl text-gray-300 max-w-3xl mx-auto">
            Creamos webs profesionales a medida, sin plantillas, con trato directo y soporte real.
          </p>
        </div>

        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div class="space-y-8 animate-on-scroll">
            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-violet-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-semibold text-white mb-2">Diseño 100% Personalizado</h3>
                <p class="text-gray-400">
                  Cada web se diseña desde cero según tu marca y objetivos. Nada de plantillas genéricas.
                </p>
              </div>
            </div>

            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-violet-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-semibold text-white mb-2">Trato Directo y Personal</h3>
                <p class="text-gray-400">
                  Trabajas directamente con nosotros. Sin intermediarios, con atención personalizada real.
                </p>
              </div>
            </div>

            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-violet-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-semibold text-white mb-2">Optimización y Velocidad</h3>
                <p class="text-gray-400">
                  Webs rápidas, SEO optimizado y pensadas para convertir desde el primer día.
                </p>
              </div>
            </div>

            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-violet-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path>
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-semibold text-white mb-2">Soporte Continuo</h3>
                <p class="text-gray-400">
                  Mantenimiento, actualizaciones y soporte técnico para que nunca tengas problemas.
                </p>
              </div>
            </div>
          </div>

          <div class="relative animate-on-scroll">
            <div class="relative">
              <img src="https://images.pexels.com/photos/3584994/pexels-photo-3584994.jpeg?auto=compress&cs=tinysrgb&w=800" 
                   alt="Desarrollo web profesional" 
                   class="rounded-2xl shadow-2xl">
              <div class="absolute inset-0 bg-gradient-to-t from-violet-900/50 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Quick Services Preview -->
    <section class="py-16 bg-slate-900/50" #servicesPreview>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12 animate-on-scroll">
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
            Lo que incluimos en <span class="gradient-text">cada proyecto</span>
          </h2>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="card text-center animate-on-scroll">
            <div class="w-12 h-12 bg-gradient-to-r from-violet-500 to-purple-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"></path>
              </svg>
            </div>
            <h3 class="font-semibold text-white mb-2">Diseño Personalizado</h3>
            <p class="text-gray-400 text-sm">Adaptado a tu marca y objetivos</p>
          </div>

          <div class="card text-center animate-on-scroll">
            <div class="w-12 h-12 bg-gradient-to-r from-violet-500 to-purple-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"></path>
              </svg>
            </div>
            <h3 class="font-semibold text-white mb-2">Dominio y Hosting</h3>
            <p class="text-gray-400 text-sm">Todo incluido y configurado</p>
          </div>

          <div class="card text-center animate-on-scroll">
            <div class="w-12 h-12 bg-gradient-to-r from-violet-500 to-purple-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 7.89a2 2 0 002.83 0L21 9M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </div>
            <h3 class="font-semibold text-white mb-2">Formularios Conectados</h3>
            <p class="text-gray-400 text-sm">WhatsApp y email automático</p>
          </div>

          <div class="card text-center animate-on-scroll">
            <div class="w-12 h-12 bg-gradient-to-r from-violet-500 to-purple-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
            <h3 class="font-semibold text-white mb-2">SEO Optimizado</h3>
            <p class="text-gray-400 text-sm">Para aparecer en Google</p>
          </div>
        </div>

        <div class="text-center mt-8 animate-on-scroll">
          <a routerLink="/servicios" class="btn-primary">
            Ver todos los servicios
          </a>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16" #ctaSection> 
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-on-scroll">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
          ¿Listo para tener tu <span class="gradient-text">web profesional</span>?
        </h2>
        <p class="text-xl text-gray-300 mb-8">
          Solicita tu presupuesto personalizado sin compromiso. Te respondemos en menos de 24 horas.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a routerLink="/contacto" class="btn-primary text-lg px-8 py-4">
            Solicitar presupuesto
          </a>
          <a href="https://wa.me/34644663666" target="_blank" rel="noopener noreferrer" 
             class="btn-secondary text-lg px-8 py-4 flex items-center justify-center space-x-2">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.106"/>
            </svg>
            <span>WhatsApp directo</span>
          </a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    :host {
      display: block;
      padding-top: 80px;
    }
  `]
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('whatIsSection', { static: false }) whatIsSection!: ElementRef;
  @ViewChild('featuresSection', { static: false }) featuresSection!: ElementRef;
  @ViewChild('servicesPreview', { static: false }) servicesPreview!: ElementRef;
  @ViewChild('ctaSection', { static: false }) ctaSection!: ElementRef;


  ngOnInit(): void {
    // Component initialization
  }

  ngAfterViewInit(): void {
    this.setupScrollAnimations();
  }

  private setupScrollAnimations(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.animate-on-scroll').forEach((el, index) => {
            setTimeout(() => {
              el.classList.add('animate');
            }, index * 100);
          });
        }
      });
    }, { threshold: 0.1 });

    // Observe sections
    if (this.whatIsSection) observer.observe(this.whatIsSection.nativeElement);
    if (this.featuresSection) observer.observe(this.featuresSection.nativeElement);
    if (this.servicesPreview) observer.observe(this.servicesPreview.nativeElement);
    if (this.ctaSection) observer.observe(this.ctaSection.nativeElement);
  }
}