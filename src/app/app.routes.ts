import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(c => c.HomeComponent),
    title: 'Landnify – Landing pages profesionales que convierten',
    data: {
      meta: {
        description: 'Diseñamos landing pages para empresas, servicios y profesionales. Webs rápidas, modernas y listas para captar clientes.',
        keywords: 'landing page, diseño web, páginas web profesionales, conversión, SEO',
        og: {
          title: 'Landnify – Landing pages profesionales que convierten',
          description: 'Diseñamos landing pages para empresas, servicios y profesionales. Webs rápidas, modernas y listas para captar clientes.',
          image: 'https://landnify.com/og-image.jpg',
          url: 'https://landnify.com'
        }
      }
    }
  },
  {
    path: 'servicios',
    loadComponent: () => import('./pages/services/services.component').then(c => c.ServicesComponent),
    title: 'Servicios – Landnify',
    data: {
      meta: {
        description: 'Descubre nuestros servicios de creación de landing pages profesionales, diseño web, automatización y mantenimiento.',
        keywords: 'servicios diseño web, landing pages personalizadas, SEO, automatización, mantenimiento web',
        og: {
          title: 'Servicios – Landnify',
          description: 'Descubre nuestros servicios de creación de landing pages profesionales, diseño web, automatización y mantenimiento.',
          image: 'https://landnify.com/og-services.jpg',
          url: 'https://landnify.com/servicios'
        }
      }
    }
  },
  {
    path: 'precios',
    loadComponent: () => import('./pages/pricing/pricing.component').then(c => c.PricingComponent),
    title: 'Precios – Landnify',
    data: {
      meta: {
        description: 'Consulta nuestros precios para landing pages profesionales, con opciones de mantenimiento y automatización.',
        keywords: 'precios landing page, tarifa diseño web, presupuesto web profesional',
        og: {
          title: 'Precios – Landnify',
          description: 'Consulta nuestros precios para landing pages profesionales, con opciones de mantenimiento y automatización.',
          image: 'https://landnify.com/og-pricing.jpg',
          url: 'https://landnify.com/precios'
        }
      }
    }
  },
  {
    path: 'proyectos',
    loadComponent: () => import('./pages/projects/projects.component').then(c => c.ProjectsComponent),
    title: 'Proyectos – Landnify',
    data: {
      meta: {
        description: 'Descubre ejemplos de webs creadas por Landnify. Inspírate con proyectos reales de landing pages optimizadas para conversión y visibilidad.',
        keywords: 'portfolio diseño web, ejemplos landing pages, proyectos realizados, casos de éxito',
        og: {
          title: 'Proyectos – Landnify',
          description: 'Descubre ejemplos de webs creadas por Landnify. Inspírate con proyectos reales de landing pages optimizadas para conversión y visibilidad.',
          image: 'https://landnify.com/og-projects.jpg',
          url: 'https://landnify.com/proyectos'
        }
      }
    }
  },
  {
    path: 'contacto',
    loadComponent: () => import('./pages/contact/contact.component').then(c => c.ContactComponent),
    title: 'Contacto – Landnify',
    data: {
      meta: {
        description: 'Solicita tu presupuesto para una landing page profesional. Escríbenos a hola@landnify.com o llama al +34 644 66 36 66.',
        keywords: 'contacto Landnify, presupuesto landing page, diseño web contacto',
        og: {
          title: 'Contacto – Landnify',
          description: 'Solicita tu presupuesto para una landing page profesional. Escríbenos a hola@landnify.com o llama al +34 644 66 36 66.',
          image: 'https://landnify.com/og-contact.jpg',
          url: 'https://landnify.com/contacto'
        }
      }
    }
  },
  {
    path: '**',
    redirectTo: ''
  }
];