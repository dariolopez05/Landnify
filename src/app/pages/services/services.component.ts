import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="pt-20">
      <!-- Hero Section -->
      <section class="py-16 hero-bg">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div class="animate-fade-in">
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Nuestros <span class="gradient-text">Servicios</span>
            </h1>
            <p class="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Todo lo que necesitas para tener una web profesional que convierta visitantes en clientes
            </p>
          </div>
        </div>
      </section>

      <!-- Main Services -->
      <section class="py-16" #servicesSection>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid lg:grid-cols-2 gap-12 mb-16">
            <!-- Service 1 -->
            <div class="card card-hover animate-on-scroll">
              <div class="flex items-center mb-6">
                <div class="w-16 h-16 bg-gradient-to-r from-violet-500 to-purple-500 rounded-lg flex items-center justify-center mr-4">
                  <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"></path>
                  </svg>
                </div>
                <h2 class="text-2xl font-bold text-white">Diseño Personalizado</h2>
              </div>
              <p class="text-gray-400 mb-6">
                Cada web se diseña desde cero según tu marca, sector y objetivos específicos. 
                Sin plantillas genéricas, tu web será única y profesional.
              </p>
              <ul class="space-y-3">
                <li class="flex items-center text-gray-300">
                  <svg class="w-5 h-5 text-violet-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Diseño único adaptado a tu marca
                </li>
                <li class="flex items-center text-gray-300">
                  <svg class="w-5 h-5 text-violet-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Colores y tipografías corporativas
                </li>
                <li class="flex items-center text-gray-300">
                  <svg class="w-5 h-5 text-violet-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Estructura pensada para conversión
                </li>
              </ul>
            </div>

            <!-- Service 2 -->
            <div class="card card-hover animate-on-scroll">
              <div class="flex items-center mb-6">
                <div class="w-16 h-16 bg-gradient-to-r from-violet-500 to-purple-500 rounded-lg flex items-center justify-center mr-4">
                  <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"></path>
                  </svg>
                </div>
                <h2 class="text-2xl font-bold text-white">Dominio y Correo Incluidos</h2>
              </div>
              <p class="text-gray-400 mb-6">
                Te gestionamos el dominio y configuramos cuentas de correo profesionales 
                con tu nombre de empresa para mayor credibilidad.
              </p>
              <ul class="space-y-3">
                <li class="flex items-center text-gray-300">
                  <svg class="w-5 h-5 text-violet-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Registro y configuración de dominio
                </li>
                <li class="flex items-center text-gray-300">
                  <svg class="w-5 h-5 text-violet-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Correos profesionales (&#64;tuempresa.com)
                </li>
                <li class="flex items-center text-gray-300">
                  <svg class="w-5 h-5 text-violet-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Hosting premium incluido
                </li>
              </ul>
            </div>

            <!-- Service 3 -->
            <div class="card card-hover animate-on-scroll">
              <div class="flex items-center mb-6">
                <div class="w-16 h-16 bg-gradient-to-r from-violet-500 to-purple-500 rounded-lg flex items-center justify-center mr-4">
                  <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 7.89a2 2 0 002.83 0L21 9M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <h2 class="text-2xl font-bold text-white">Formularios Conectados</h2>
              </div>
              <p class="text-gray-400 mb-6">
                Formularios de contacto que se conectan directamente con tu WhatsApp y email, 
                para que nunca pierdas un lead potencial.
              </p>
              <ul class="space-y-3">
                <li class="flex items-center text-gray-300">
                  <svg class="w-5 h-5 text-violet-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Conexión directa a WhatsApp
                </li>
                <li class="flex items-center text-gray-300">
                  <svg class="w-5 h-5 text-violet-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Notificaciones por email automáticas
                </li>
                <li class="flex items-center text-gray-300">
                  <svg class="w-5 h-5 text-violet-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Validación y seguridad anti-spam
                </li>
              </ul>
            </div>

            <!-- Service 4 -->
            <div class="card card-hover animate-on-scroll">
              <div class="flex items-center mb-6">
                <div class="w-16 h-16 bg-gradient-to-r from-violet-500 to-purple-500 rounded-lg flex items-center justify-center mr-4">
                  <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </div>
                <h2 class="text-2xl font-bold text-white">Optimización SEO</h2>
              </div>
              <p class="text-gray-400 mb-6">
                Tu web estará optimizada desde el primer día para aparecer en Google y 
                atraer tráfico orgánico de calidad.
              </p>
              <ul class="space-y-3">
                <li class="flex items-center text-gray-300">
                  <svg class="w-5 h-5 text-violet-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  SEO técnico y de contenido
                </li>
                <li class="flex items-center text-gray-300">
                  <svg class="w-5 h-5 text-violet-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Optimización para móviles
                </li>
                <li class="flex items-center text-gray-300">
                  <svg class="w-5 h-5 text-violet-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Velocidad de carga optimizada
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Automation Section -->
      <section class="py-16 bg-slate-900/50" #automationSection>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-12 animate-on-scroll">
            <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
              <span class="gradient-text">Automatización</span> con n8n
            </h2>
            <p class="text-xl text-gray-300 max-w-3xl mx-auto">
              Conectamos tu web con sistemas de automatización para optimizar tus procesos de negocio
            </p>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="card text-center animate-on-scroll">
              <div class="w-16 h-16 bg-gradient-to-r from-violet-500 to-purple-500 rounded-lg mx-auto mb-6 flex items-center justify-center">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-white mb-4">Notificaciones Instantáneas</h3>
              <p class="text-gray-400">
                Recibe alertas inmediatas por WhatsApp, email o Telegram cuando alguien complete tu formulario.
              </p>
            </div>

            <div class="card text-center animate-on-scroll">
              <div class="w-16 h-16 bg-gradient-to-r from-violet-500 to-purple-500 rounded-lg mx-auto mb-6 flex items-center justify-center">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-white mb-4">Gestión de Leads</h3>
              <p class="text-gray-400">
                Los datos se guardan automáticamente en hojas de cálculo o CRM para mejor seguimiento.
              </p>
            </div>

            <div class="card text-center animate-on-scroll">
              <div class="w-16 h-16 bg-gradient-to-r from-violet-500 to-purple-500 rounded-lg mx-auto mb-6 flex items-center justify-center">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-white mb-4">Respuestas Automáticas</h3>
              <p class="text-gray-400">
                Envío automático de emails de confirmación y materiales informativos a tus clientes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Maintenance Section -->
      <section class="py-16" #maintenanceSection>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-12 animate-on-scroll">
            <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
              Mantenimiento <span class="gradient-text">Mensual</span>
            </h2>
            <p class="text-xl text-gray-300 max-w-3xl mx-auto">
              Por solo 25€/mes, mantén tu web siempre actualizada, segura y funcionando perfectamente
            </p>
          </div>

          <div class="card max-w-4xl mx-auto animate-on-scroll">
            <div class="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 class="text-2xl font-bold text-white mb-6">¿Qué incluye el mantenimiento?</h3>
                <ul class="space-y-4">
                  <li class="flex items-start">
                    <svg class="w-6 h-6 text-violet-400 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <div>
                      <span class="text-white font-medium">Actualizaciones de seguridad</span>
                      <p class="text-gray-400 text-sm">Mantenemos tu web protegida contra amenazas</p>
                    </div>
                  </li>
                  <li class="flex items-start">
                    <svg class="w-6 h-6 text-violet-400 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <div>
                      <span class="text-white font-medium">Backups automáticos</span>
                      <p class="text-gray-400 text-sm">Copias de seguridad semanales de tu web</p>
                    </div>
                  </li>
                  <li class="flex items-start">
                    <svg class="w-6 h-6 text-violet-400 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <div>
                      <span class="text-white font-medium">Soporte técnico</span>
                      <p class="text-gray-400 text-sm">Resolvemos cualquier incidencia rápidamente</p>
                    </div>
                  </li>
                  <li class="flex items-start">
                    <svg class="w-6 h-6 text-violet-400 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <div>
                      <span class="text-white font-medium">Pequeñas modificaciones</span>
                      <p class="text-gray-400 text-sm">Cambios menores de contenido incluidos</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="text-center">
                <div class="bg-gradient-to-r from-violet-500 to-purple-500 rounded-2xl p-8 text-white">
                  <div class="text-4xl font-bold mb-2">25€</div>
                  <div class="text-lg opacity-90 mb-4">por mes</div>
                  <div class="text-sm opacity-80">IVA incluido</div>
                </div>
                <p class="text-gray-400 text-sm mt-4">
                  Sin permanencia. Puedes cancelar cuando quieras.
                </p>
              </div>
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
            Cuéntanos qué necesitas y te prepararemos un presupuesto personalizado
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a routerLink="/contacto" class="btn-primary text-lg px-8 py-4">
              Solicitar presupuesto
            </a>
            <a routerLink="/precios" class="btn-secondary text-lg px-8 py-4">
              Ver precios
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
export class ServicesComponent implements OnInit, AfterViewInit {
  @ViewChild('servicesSection', { static: false }) servicesSection!: ElementRef;
  @ViewChild('automationSection', { static: false }) automationSection!: ElementRef;
  @ViewChild('maintenanceSection', { static: false }) maintenanceSection!: ElementRef;
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
    if (this.servicesSection) observer.observe(this.servicesSection.nativeElement);
    if (this.automationSection) observer.observe(this.automationSection.nativeElement);
    if (this.maintenanceSection) observer.observe(this.maintenanceSection.nativeElement);
    if (this.ctaSection) observer.observe(this.ctaSection.nativeElement);
  }
}