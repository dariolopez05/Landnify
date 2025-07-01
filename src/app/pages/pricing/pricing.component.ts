import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="pt-20">
      <!-- Hero Section -->
      <section class="py-16 hero-bg">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div class="animate-fade-in">
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Precios <span class="gradient-text">transparentes</span>
            </h1>
            <p class="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Elige el plan que mejor se adapte a tu proyecto. Sin sorpresas, sin letra pequeña.
            </p>
          </div>
        </div>
      </section>

      <!-- Pricing Plans -->
      <section class="py-16" #pricingSection>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <!-- Plan Básico -->
            <div class="card card-hover animate-on-scroll">
              <div class="text-center mb-8">
                <h2 class="text-2xl font-bold text-white mb-4">Plan Básico</h2>
                <div class="flex items-baseline justify-center">
                  <span class="text-4xl font-bold text-white">249€</span>
                  <span class="text-gray-400 ml-2">una vez</span>
                </div>
                <p class="text-gray-400 mt-2">Perfecto para empezar</p>
              </div>

              <ul class="space-y-4 mb-8">
                <li class="flex items-center">
                  <svg class="w-5 h-5 text-violet-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-gray-300">Diseño personalizado y responsive</span>
                </li>
                <li class="flex items-center">
                  <svg class="w-5 h-5 text-violet-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-gray-300">Hasta 5 secciones de contenido</span>
                </li>
                <li class="flex items-center">
                  <svg class="w-5 h-5 text-violet-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-gray-300">Formulario de contacto básico</span>
                </li>
                <li class="flex items-center">
                  <svg class="w-5 h-5 text-violet-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-gray-300">SEO básico optimizado</span>
                </li>
                <li class="flex items-center">
                  <svg class="w-5 h-5 text-violet-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-gray-300">Hosting incluido primer año</span>
                </li>
                <li class="flex items-center">
                  <svg class="w-5 h-5 text-violet-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-gray-300">Certificado SSL gratuito</span>
                </li>
              </ul>

              <a routerLink="/contacto" class="block w-full btn-secondary text-center">
                Elegir Plan Básico
              </a>
            </div>

            <!-- Plan Pro -->
            <div class="card card-hover animate-on-scroll relative">
              <!-- Popular badge -->
              <div class="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span class="bg-gradient-to-r from-violet-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Más Popular
                </span>
              </div>

              <div class="text-center mb-8">
                <h2 class="text-2xl font-bold text-white mb-4">Plan Pro</h2>
                <div class="flex items-baseline justify-center">
                  <span class="text-4xl font-bold gradient-text">349€</span>
                  <span class="text-gray-400 ml-2">una vez</span>
                </div>
                <p class="text-gray-400 mt-2">Para negocios serios</p>
              </div>

              <ul class="space-y-4 mb-8">
                <li class="flex items-center">
                  <svg class="w-5 h-5 text-violet-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-gray-300">Todo lo del Plan Básico</span>
                </li>
                <li class="flex items-center">
                  <svg class="w-5 h-5 text-violet-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-gray-300">Hasta 10 secciones de contenido</span>
                </li>
                <li class="flex items-center">
                  <svg class="w-5 h-5 text-violet-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-gray-300">Automatización con n8n</span>
                </li>
                <li class="flex items-center">
                  <svg class="w-5 h-5 text-violet-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-gray-300">Dominio personalizado incluido</span>
                </li>
                <li class="flex items-center">
                  <svg class="w-5 h-5 text-violet-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-gray-300">Correos profesionales configurados</span>
                </li>
                <li class="flex items-center">
                  <svg class="w-5 h-5 text-violet-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-gray-300">Integración WhatsApp Business</span>
                </li>
                <li class="flex items-center">
                  <svg class="w-5 h-5 text-violet-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-gray-300">SEO avanzado y Google Analytics</span>
                </li>
                <li class="flex items-center">
                  <svg class="w-5 h-5 text-violet-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-gray-300">Optimización de velocidad avanzada</span>
                </li>
              </ul>

              <a routerLink="/contacto" class="block w-full btn-primary text-center">
                Elegir Plan Pro
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- Maintenance Section -->
      <section class="py-16 bg-slate-900/50" #maintenanceSection>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-12 animate-on-scroll">
            <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
              Mantenimiento <span class="gradient-text">Mensual</span>
            </h2>
            <p class="text-xl text-gray-300 max-w-3xl mx-auto">
              Mantén tu web siempre actualizada, segura y funcionando al 100%
            </p>
          </div>

          <div class="max-w-4xl mx-auto">
            <div class="card text-center animate-on-scroll">
              <div class="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div class="bg-gradient-to-r from-violet-500 to-purple-500 rounded-2xl p-8 text-white mb-6">
                    <div class="text-5xl font-bold mb-2">25€</div>
                    <div class="text-lg opacity-90 mb-1">por mes</div>
                    <div class="text-sm opacity-80">IVA incluido</div>
                  </div>
                  <p class="text-gray-400 text-sm">
                    Sin permanencia. Cancela cuando quieras.
                  </p>
                </div>
                <div class="text-left">
                  <h3 class="text-xl font-bold text-white mb-6">Incluye:</h3>
                  <ul class="space-y-3">
                    <li class="flex items-center">
                      <svg class="w-5 h-5 text-violet-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span class="text-gray-300">Actualizaciones de seguridad</span>
                    </li>
                    <li class="flex items-center">
                      <svg class="w-5 h-5 text-violet-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span class="text-gray-300">Copias de seguridad semanales</span>
                    </li>
                    <li class="flex items-center">
                      <svg class="w-5 h-5 text-violet-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span class="text-gray-300">Soporte técnico prioritario</span>
                    </li>
                    <li class="flex items-center">
                      <svg class="w-5 h-5 text-violet-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span class="text-gray-300">Cambios menores de contenido</span>
                    </li>
                    <li class="flex items-center">
                      <svg class="w-5 h-5 text-violet-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span class="text-gray-300">Monitoreo 24/7</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- FAQ Section -->
      <section class="py-16" #faqSection>
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-12 animate-on-scroll">
            <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
              Preguntas <span class="gradient-text">Frecuentes</span>
            </h2>
          </div>

          <div class="space-y-6">
            <div class="card animate-on-scroll">
              <h3 class="text-xl font-semibold text-white mb-3">¿Qué incluye el precio inicial?</h3>
              <p class="text-gray-400">
                El precio incluye el diseño completo, desarrollo, configuración de hosting, dominio el primer año,
                correos profesionales y toda la optimización SEO básica para que tu web esté lista para funcionar.
              </p>
            </div>

            <div class="card animate-on-scroll">
              <h3 class="text-xl font-semibold text-white mb-3">¿Cuánto tiempo tarda en estar lista?</h3>
              <p class="text-gray-400">
                Normalmente entre 5-10 días laborables, dependiendo de la complejidad del proyecto y la rapidez
                en la entrega de contenidos por tu parte.
              </p>
            </div>

            <div class="card animate-on-scroll">
              <h3 class="text-xl font-semibold text-white mb-3">¿Es obligatorio el mantenimiento mensual?</h3>
              <p class="text-gray-400">
                No, es completamente opcional. Sin embargo, lo recomendamos encarecidamente para mantener tu web
                segura, actualizada y funcionando sin problemas.
              </p>
            </div>

            <div class="card animate-on-scroll">
              <h3 class="text-xl font-semibold text-white mb-3">¿Puedo hacer cambios después?</h3>
              <p class="text-gray-400">
                Sí, cambios menores están incluidos en el mantenimiento mensual. Para cambios mayores,
                te preparamos un presupuesto adicional específico.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="py-16 bg-slate-900/50" #ctaSection>
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-on-scroll">
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
            ¿Listo para empezar tu <span class="gradient-text">proyecto</span>?
          </h2>
          <p class="text-xl text-gray-300 mb-8">
            Cuéntanos qué necesitas y te prepararemos un presupuesto personalizado sin compromiso
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a routerLink="/contacto" class="btn-primary text-lg px-8 py-4">
              Solicitar presupuesto gratuito
            </a>
            <a href="https://wa.me/34644663666" target="_blank" rel="noopener noreferrer"
               class="btn-secondary text-lg px-8 py-4 flex items-center justify-center space-x-2">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.106"/>
              </svg>
              <span>Consulta por WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class PricingComponent implements OnInit, AfterViewInit {
  @ViewChild('pricingSection', { static: false }) pricingSection!: ElementRef;
  @ViewChild('maintenanceSection', { static: false }) maintenanceSection!: ElementRef;
  @ViewChild('faqSection', { static: false }) faqSection!: ElementRef;
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
    if (this.pricingSection) observer.observe(this.pricingSection.nativeElement);
    if (this.maintenanceSection) observer.observe(this.maintenanceSection.nativeElement);
    if (this.faqSection) observer.observe(this.faqSection.nativeElement);
    if (this.ctaSection) observer.observe(this.ctaSection.nativeElement);
  }
}