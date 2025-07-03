import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-aviso-legal',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="pt-28 px-6 max-w-4xl mx-auto text-gray-300">
      <h1 class="text-3xl font-bold mb-6 text-white">Aviso Legal</h1>
      <p><strong>Titular:</strong> Darío López Garrido</p>
      <p><strong>Correo:</strong> hola&#64;landnify.com</p>
      <p><strong>Teléfono:</strong> 644 66 36 66</p>
      <p><strong>Ubicación:</strong> Valencia, España</p>

      <p class="mt-4">Este aviso legal regula el uso del sitio web landnify.com...</p>
      <p class="mt-4">El usuario se compromete a hacer un uso adecuado...</p>
      <p class="mt-4">Todos los contenidos del sitio son propiedad de Darío López Garrido...</p>
      <p class="mt-4">El titular se reserva el derecho a modificar este aviso legal en cualquier momento.</p>
    </div>
  `
})
export class AvisoLegalComponent {}
