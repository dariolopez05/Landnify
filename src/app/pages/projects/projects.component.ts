import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Project {
  id: number;
  title: string;
  client: string;
  description: string;
  image: string;
  features: string[];
  category: string;
  url?: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="pt-20">
      <!-- Hero Section -->
      <section class="py-16 hero-bg">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div class="animate-fade-in">
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Nuestros <span class="gradient-text">Proyectos</span>
            </h1>
            <p class="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Descubre ejemplos reales de landing pages que hemos creado para empresas y profesionales
            </p>
          </div>
        </div>
      </section>

      <!-- Projects Grid -->
      <section class="py-16" #projectsSection>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8" *ngIf="filteredProjects && filteredProjects.length > 0">
            <div
              *ngFor="let project of filteredProjects; trackBy: trackByProject"
              class="project-card card card-hover animate-on-scroll group cursor-pointer"
              (click)="openProject(project)"
            >
              <!-- Project Image -->
              <div class="relative overflow-hidden rounded-lg mb-6">
                <img
                  [src]="project.image"
                  [alt]="project.title"
                  class="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                >
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div class="absolute top-4 right-4">
                  <span class="bg-violet-500 text-white text-xs px-2 py-1 rounded-full">
                    {{ project.category }}
                  </span>
                </div>
              </div>

              <!-- Project Info -->
              <div>
                <h3 class="text-xl font-bold text-white mb-2 group-hover:text-violet-400 transition-colors">
                  {{ project.title }}
                </h3>
                <p class="text-gray-400 text-sm mb-3">{{ project.client }}</p>
                <p class="text-gray-300 mb-4">{{ project.description }}</p>

                <!-- Features -->
                <div class="flex flex-wrap gap-2 mb-4">
                  <span
                    *ngFor="let feature of project.features; trackBy: trackByFeature"
                    class="text-xs bg-slate-700 text-violet-300 px-2 py-1 rounded"
                  >
                    {{ feature }}
                  </span>
                </div>

                <!-- View More Button -->
                <div class="flex items-center text-violet-400 group-hover:text-violet-300 transition-colors">
                  <span class="text-sm font-medium">Ver proyecto</span>
                  <svg class="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <!-- Empty State -->
          <div *ngIf="!filteredProjects || filteredProjects.length === 0" class="text-center py-12">
            <div class="text-gray-400 text-lg">
              No hay proyectos en esta categoría
            </div>
          </div>
        </div>
      </section>

      <!-- Project Modal -->
      <div
        *ngIf="selectedProject"
        class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
        (click)="closeProject()"
      >
        <div
          class="bg-slate-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          (click)="$event.stopPropagation()"
        >
          <div class="relative">
            <!-- Close Button -->
            <button
              (click)="closeProject()"
              class="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>

            <!-- Project Image -->
            <img
              [src]="selectedProject.image"
              [alt]="selectedProject.title"
              class="w-full h-64 md:h-80 object-cover rounded-t-2xl"
            >
          </div>

          <div class="p-8">
            <div class="flex items-center justify-between mb-6">
              <div>
                <h2 class="text-3xl font-bold text-white mb-2">{{ selectedProject.title }}</h2>
                <p class="text-violet-400 font-medium">{{ selectedProject.client }}</p>
              </div>
              <span class="bg-violet-500 text-white px-3 py-1 rounded-full">
                {{ selectedProject.category }}
              </span>
            </div>

            <p class="text-gray-300 text-lg mb-8">{{ selectedProject.description }}</p>

            <!-- Features Grid -->
            <div class="mb-8">
              <h3 class="text-xl font-semibold text-white mb-4">Características implementadas:</h3>
              <div class="grid md:grid-cols-2 gap-3">
                <div
                  *ngFor="let feature of selectedProject.features; trackBy: trackByFeature"
                  class="flex items-center"
                >
                  <svg class="w-5 h-5 text-violet-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-gray-300">{{ feature }}</span>
                </div>
              </div>
            </div>

            <!-- Actions -->
            <div class="flex flex-col sm:flex-row gap-4">
              <a
                *ngIf="selectedProject.url"
                [href]="selectedProject.url"
                target="_blank"
                rel="noopener noreferrer"
                class="btn-primary text-center"
              >
                Ver sitio web
              </a>
              <a routerLink="/contacto" class="btn-secondary text-center">
                Solicitar proyecto similar
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA Section -->
      <section class="py-16 bg-slate-900/50" #ctaSection>
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-on-scroll">
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
            ¿Te gusta lo que ves? <span class="gradient-text">Creemos el tuyo</span>
          </h2>
          <p class="text-xl text-gray-300 mb-8">
            Cada proyecto es único. Cuéntanos tu idea y crearemos algo especial para ti.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a routerLink="/contacto" class="btn-primary text-lg px-8 py-4">
              Empezar mi proyecto
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

    .filter-btn.active {
      @apply bg-violet-500 border-violet-500 text-white;
    }

    .project-card {
      @apply transition-all duration-300;
    }

    .project-card:hover {
      @apply transform -translate-y-2 shadow-xl shadow-violet-500/20;
    }
  `]
})
export class ProjectsComponent implements OnInit, AfterViewInit {
  @ViewChild('filterSection', { static: false }) filterSection!: ElementRef;
  @ViewChild('projectsSection', { static: false }) projectsSection!: ElementRef;
  @ViewChild('ctaSection', { static: false }) ctaSection!: ElementRef;

  selectedProject: Project | null = null;


  projects: Project[] = [
    {
      id: 1,
      title: 'Clínica Dental Sonrisa',
      client: 'Dr. García Odontología',
      description: 'Landing page para clínica dental con sistema de citas online y información de servicios.',
      image: 'https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Formulario de citas', 'Galería de antes/después', 'WhatsApp directo', 'SEO local', 'Responsive'],
      category: 'Servicios'
    },
    {
      id: 2,
      title: 'TechFlow Consulting',
      client: 'Consultoría IT',
      description: 'Web corporativa para empresa de consultoría tecnológica con generación de leads automática.',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Automatización n8n', 'CRM integrado', 'Blog corporativo', 'Calculadora de precios', 'Chat bot'],
      category: 'Servicios'
    },
    {
      id: 3,
      title: 'Abogado Martínez',
      client: 'Despacho de abogados',
      description: 'Landing page profesional para abogado especialista en derecho civil y familiar.',
      image: 'https://images.pexels.com/photos/5668882/pexels-photo-5668882.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Formulario consulta', 'Calendario citas', 'Testimonios', 'SEO jurídico', 'RGPD compliant'],
      category: 'Profesionales'
    },
    {
      id: 4,
      title: 'Tienda Eco Natural',
      client: 'Productos ecológicos',
      description: 'E-commerce de productos naturales con pasarela de pago y gestión de inventario.',
      image: 'https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Tienda online', 'Pago seguro', 'Gestión stock', 'Email marketing', 'Analíticas'],
      category: 'E-commerce'
    },
    {
      id: 5,
      title: 'Restaurante La Plaza',
      client: 'Gastronomía mediterránea',
      description: 'Web para restaurante con carta digital, reservas online y delivery.',
      image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Carta digital', 'Reservas online', 'Pedidos delivery', 'Galería platos', 'Google Maps'],
      category: 'Restaurantes'
    },
    {
      id: 6,
      title: 'FitLife Personal Training',
      client: 'Entrenador personal',
      description: 'Landing page para entrenador personal con planes de entrenamiento y nutrición.',
      image: 'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Planes training', 'Calculadora IMC', 'Transformaciones', 'Booking clases', 'App móvil'],
      category: 'Profesionales'
    }
  ];

  filteredProjects: Project[] = [];

  ngOnInit(): void {
    // Initialize with all projects
    this.filteredProjects = [...this.projects];
  }

  ngAfterViewInit(): void {
    this.setupScrollAnimations();
  }

  openProject(project: Project): void {
    this.selectedProject = project;
    document.body.style.overflow = 'hidden';
  }

  closeProject(): void {
    this.selectedProject = null;
    document.body.style.overflow = 'auto';
  }

  trackByProject(index: number, project: Project): number {
    return project.id;
  }

  trackByCategory(index: number, category: string): string {
    return category;
  }

  trackByFeature(index: number, feature: string): string {
    return feature;
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
    if (this.filterSection) observer.observe(this.filterSection.nativeElement);
    if (this.projectsSection) observer.observe(this.projectsSection.nativeElement);
    if (this.ctaSection) observer.observe(this.ctaSection.nativeElement);
  }
}