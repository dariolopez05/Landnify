import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  template: `
    <div class="pt-20">
      <!-- Hero Section -->
      <section class="py-16 hero-bg">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div class="animate-fade-in">
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Hablemos de tu <span class="gradient-text">proyecto</span>
            </h1>
            <p class="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Cuéntanos qué necesitas y te prepararemos un presupuesto personalizado sin compromiso
            </p>
          </div>
        </div>
      </section>

      <!-- Contact Section -->
      <section class="py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid lg:grid-cols-2 gap-12">
            <!-- Contact Form -->
            <div class="animate-fade-in">
              <div class="card">
                <h2 class="text-2xl font-bold text-white mb-6">Solicita tu presupuesto</h2>
                
                <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="space-y-6">
                  <div>
                    <label for="name" class="block text-sm font-medium text-gray-300 mb-2">
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      formControlName="name"
                      [class.border-red-500]="contactForm.get('name')?.invalid && contactForm.get('name')?.touched"
                      class="w-full px-4 py-3 bg-slate-700 border border-slate-600 text-white rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-300"
                      placeholder="Tu nombre completo"
                    >
                    <div *ngIf="contactForm.get('name')?.invalid && contactForm.get('name')?.touched" 
                         class="text-red-400 text-sm mt-1">
                      El nombre es obligatorio
                    </div>
                  </div>

                  <div>
                    <label for="empresa" class="block text-sm font-medium text-gray-300 mb-2">
                      Empresa / Proyecto
                    </label>
                    <input
                      type="text"
                      id="empresa"
                      formControlName="empresa"
                      class="w-full px-4 py-3 bg-slate-700 border border-slate-600 text-white rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-300"
                      placeholder="Nombre de tu empresa o proyecto"
                    >
                  </div>

                  <div>
                    <label for="email" class="block text-sm font-medium text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      formControlName="email"
                      [class.border-red-500]="contactForm.get('email')?.invalid && contactForm.get('email')?.touched"
                      class="w-full px-4 py-3 bg-slate-700 border border-slate-600 text-white rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-300"
                      placeholder="tu&#64;email.com"
                    >
                    <div *ngIf="contactForm.get('email')?.invalid && contactForm.get('email')?.touched" 
                         class="text-red-400 text-sm mt-1">
                      <span *ngIf="contactForm.get('email')?.errors?.['required']">El email es obligatorio</span>
                      <span *ngIf="contactForm.get('email')?.errors?.['email']">El email no es válido</span>
                    </div>
                  </div>

                  <div>
                    <label for="whatsapp" class="block text-sm font-medium text-gray-300 mb-2">
                      WhatsApp
                    </label>
                    <input
                      type="tel"
                      id="whatsapp"
                      formControlName="whatsapp"
                      class="w-full px-4 py-3 bg-slate-700 border border-slate-600 text-white rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-300"
                      placeholder="+34 600 000 000"
                    >
                  </div>

                  <div>
                    <label for="proyecto" class="block text-sm font-medium text-gray-300 mb-2">
                      Tipo de proyecto
                    </label>
                    <select
                      id="proyecto"
                      formControlName="proyecto"
                      class="w-full px-4 py-3 bg-slate-700 border border-slate-600 text-white rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Selecciona el tipo de proyecto</option>
                      <option value="landing-basica">Landing Page Básica</option>
                      <option value="landing-pro">Landing Page Pro</option>
                    </select>
                  </div>

                  <div>
                    <label for="message" class="block text-sm font-medium text-gray-300 mb-2">
                      Mensaje *
                    </label>
                    <textarea
                      id="message"
                      formControlName="message"
                      rows="4"
                      [class.border-red-500]="contactForm.get('message')?.invalid && contactForm.get('message')?.touched"
                      class="w-full px-4 py-3 bg-slate-700 border border-slate-600 text-white rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-300"
                      placeholder="Cuéntanos más sobre tu proyecto..."
                    ></textarea>
                    <div *ngIf="contactForm.get('message')?.invalid && contactForm.get('message')?.touched" 
                         class="text-red-400 text-sm mt-1">
                      El mensaje es obligatorio
                    </div>
                  </div>

                  <!-- Form validation summary -->
                  <div *ngIf="showValidationErrors" class="p-4 bg-red-900/50 border border-red-500 rounded-lg">
                    <div class="flex items-center">
                      <svg class="w-5 h-5 text-red-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <span class="text-red-300">Por favor, completa todos los campos obligatorios correctamente.</span>
                    </div>
                  </div>

                  <button
                    type="submit"
                    [disabled]="isSubmitting"
                    class="w-full btn-primary text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span *ngIf="!isSubmitting">Enviar solicitud</span>
                    <span *ngIf="isSubmitting" class="flex items-center justify-center">
                      <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Enviando...
                    </span>
                  </button>
                </form>

                <!-- Success/Error Messages -->
                <div *ngIf="submitSuccess" class="mt-6 p-4 bg-green-900/50 border border-green-500 rounded-lg">
                  <div class="flex items-center">
                    <svg class="w-5 h-5 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span class="text-green-300">¡Mensaje enviado correctamente! Te responderemos en menos de 24 horas.</span>
                  </div>
                </div>

                <div *ngIf="submitError" class="mt-6 p-4 bg-red-900/50 border border-red-500 rounded-lg">
                  <div class="flex items-center">
                    <svg class="w-5 h-5 text-red-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                    <span class="text-red-300">Error al enviar el mensaje. Inténtalo de nuevo o contáctanos directamente.</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Contact Info -->
            <div class="animate-fade-in">
              <div class="space-y-8">
                <!-- Direct Contact -->
                <div class="card">
                  <h3 class="text-xl font-bold text-white mb-6">Contacto directo</h3>
                  <div class="space-y-4">
                    <a href="mailto:hola@landnify.com" 
                       class="flex items-center p-4 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-all duration-300 group">
                      <div class="w-12 h-12 bg-violet-500/20 rounded-lg flex items-center justify-center mr-4">
                        <svg class="w-6 h-6 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 7.89a2 2 0 002.83 0L21 9M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                        </svg>
                      </div>
                      <div>
                        <div class="text-white font-medium group-hover:text-violet-400 transition-colors">
                          hola&#64;landnify.com
                        </div>
                        <div class="text-gray-400 text-sm">Escríbenos un email</div>
                      </div>
                    </a>

                    <a href="tel:+34644663666" 
                       class="flex items-center p-4 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-all duration-300 group">
                      <div class="w-12 h-12 bg-violet-500/20 rounded-lg flex items-center justify-center mr-4">
                        <svg class="w-6 h-6 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                        </svg>
                      </div>
                      <div>
                        <div class="text-white font-medium group-hover:text-violet-400 transition-colors">
                          +34 644 66 36 66
                        </div>
                        <div class="text-gray-400 text-sm">Llámanos directamente</div>
                      </div>
                    </a>

                    <a href="https://wa.me/34644663666" target="_blank" rel="noopener noreferrer"
                       class="flex items-center p-4 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-all duration-300 group">
                      <div class="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mr-4">
                        <svg class="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.106"/>
                        </svg>
                      </div>
                      <div>
                        <div class="text-white font-medium group-hover:text-green-400 transition-colors">
                          WhatsApp Business
                        </div>
                        <div class="text-gray-400 text-sm">Respuesta inmediata</div>
                      </div>
                    </a>
                  </div>
                </div>

                <!-- Response Time -->
                <div class="card">
                  <h3 class="text-xl font-bold text-white mb-4">Tiempo de respuesta</h3>
                  <div class="space-y-3">
                    <div class="flex items-center">
                      <svg class="w-5 h-5 text-violet-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span class="text-gray-300">WhatsApp: Inmediato (horario laboral)</span>
                    </div>
                    <div class="flex items-center">
                      <svg class="w-5 h-5 text-violet-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span class="text-gray-300">Email: Menos de 24 horas</span>
                    </div>
                    <div class="flex items-center">
                      <svg class="w-5 h-5 text-violet-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span class="text-gray-300">Llamadas: L-V 9:00-18:00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  isSubmitting = false;
  submitSuccess = false;
  submitError = false;
  showValidationErrors = false;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      empresa: [''],
      email: ['', [Validators.required, Validators.email]],
      whatsapp: [''],
      proyecto: [''],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  ngOnInit(): void {
    // Component initialization
  }

  onSubmit(): void {
    // Reset previous states
    this.showValidationErrors = false;
    this.submitSuccess = false;
    this.submitError = false;

    // Mark all fields as touched to show validation errors
    this.contactForm.markAllAsTouched();

    if (this.contactForm.valid) {
      this.isSubmitting = true;
      
      const formData = this.contactForm.value;
      const webhookUrl = 'https://n8n-n8n.lcm1s3.easypanel.host/webhook-test/24426b3e-34b8-4e98-8bba-10329ec966b2'; // Cambiar por la de producción cuando este acabado

      this.http.post(webhookUrl, formData).subscribe({
        next: (response) => {
          this.isSubmitting = false;
          this.submitSuccess = true;
          this.contactForm.reset();
          // Scroll to success message
          setTimeout(() => {
            const successElement = document.querySelector('.bg-green-900\\/50');
            if (successElement) {
              successElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
          }, 100);
        },
        error: (error) => {
          this.isSubmitting = false;
          this.submitError = true;
          console.error('Error sending form:', error);
        }
      });
    } else {
      // Show validation errors summary
      this.showValidationErrors = true;
      
      // Scroll to first invalid field
      const firstInvalidField = document.querySelector('.border-red-500');
      if (firstInvalidField) {
        firstInvalidField.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }
}