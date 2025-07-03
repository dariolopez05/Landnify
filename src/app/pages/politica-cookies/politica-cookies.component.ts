import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-politica-cookies',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="pt-28 px-6 max-w-4xl mx-auto text-gray-300">
      <h1 class="text-3xl font-bold mb-6 text-white">Política de Cookies</h1>

      <p>Este sitio utiliza cookies propias y de terceros con fines técnicos y analíticos.</p>

      <h2 class="text-xl font-semibold text-white mt-6 mb-2">Cookies utilizadas:</h2>
      <ul class="list-disc list-inside">
        <li>Cookies técnicas propias para funcionamiento del sitio.</li>
        <li>Google Fonts (puede registrar IP).</li>
        <li>Google Analytics (analiza navegación, requiere consentimiento).</li>
        <li>Botón de WhatsApp (cookies de Meta).</li>
      </ul>

      <h2 class="text-xl font-semibold text-white mt-6 mb-2">Gestión de cookies</h2>
      <p>Puedes configurarlas en tu navegador. Consulta las instrucciones según navegador para permitir, bloquear o eliminar cookies.</p>

      <p class="mt-4">Para más información, escríbenos a <strong>hola&#64;landnify.com</strong></p>
    </div>
  `
})
export class PoliticaCookiesComponent {}
