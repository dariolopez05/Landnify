import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-politica-privacidad',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="pt-28 px-6 max-w-4xl mx-auto text-gray-300">
      <h1 class="text-3xl font-bold mb-6 text-white">Política de Privacidad</h1>

      <p><strong>Responsable:</strong> Darío López Garrido</p>
      <p><strong>Contacto:</strong> hola&#64;landnify.com – 644 66 36 66</p>

      <p class="mt-4"><strong>Finalidad:</strong> Gestionar las consultas mediante formulario y analizar el tráfico con Google Analytics.</p>
      <p><strong>Base legal:</strong> Consentimiento del usuario.</p>
      <p><strong>Conservación:</strong> Se conservarán los datos el tiempo necesario para gestionar la consulta.</p>
      <p><strong>Destinatarios:</strong> Google (Analytics), WhatsApp (Meta).</p>
      <p><strong>Derechos:</strong> Puedes ejercer tus derechos escribiendo a hola&#64;landnify.com.</p>
    </div>
  `
})
export class PoliticaPrivacidadComponent {}
