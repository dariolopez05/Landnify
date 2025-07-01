import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';

interface MetaData {
  title?: string;
  description?: string;
  keywords?: string;
  og?: {
    title?: string;
    description?: string;
    image?: string;
    url?: string;
    type?: string;
  };
  twitter?: {
    card?: string;
    title?: string;
    description?: string;
    image?: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private title = inject(Title);
  private meta = inject(Meta);
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);

  constructor() {
    this.init();
  }

  private init(): void {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => {
          let route = this.activatedRoute;
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        })
      )
      .subscribe(route => {
        const routeData = route.snapshot.data;
        if (routeData['meta']) {
          this.updateMetaTags(routeData['meta']);
        }
        if (route.snapshot.title) {
          this.title.setTitle(route.snapshot.title);
        }
      });
  }

  updateMetaTags(data: MetaData): void {
    // Basic meta tags
    if (data.description) {
      this.meta.updateTag({ name: 'description', content: data.description });
    }
    
    if (data.keywords) {
      this.meta.updateTag({ name: 'keywords', content: data.keywords });
    }

    // Open Graph tags
    if (data.og) {
      if (data.og.title) {
        this.meta.updateTag({ property: 'og:title', content: data.og.title });
      }
      if (data.og.description) {
        this.meta.updateTag({ property: 'og:description', content: data.og.description });
      }
      if (data.og.image) {
        this.meta.updateTag({ property: 'og:image', content: data.og.image });
      }
      if (data.og.url) {
        this.meta.updateTag({ property: 'og:url', content: data.og.url });
      }
      this.meta.updateTag({ property: 'og:type', content: data.og.type || 'website' });
    }

    // Twitter Card tags
    if (data.twitter || data.og) {
      const twitter = data.twitter || {};
      this.meta.updateTag({ name: 'twitter:card', content: twitter.card || 'summary_large_image' });
      this.meta.updateTag({ name: 'twitter:title', content: twitter.title || data.og?.title || '' });
      this.meta.updateTag({ name: 'twitter:description', content: twitter.description || data.og?.description || '' });
      this.meta.updateTag({ name: 'twitter:image', content: twitter.image || data.og?.image || '' });
    }

    // Additional SEO tags
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });
    this.meta.updateTag({ name: 'author', content: 'Landnify' });
    this.meta.updateTag({ name: 'viewport', content: 'width=device-width, initial-scale=1' });
    this.meta.updateTag({ 'http-equiv': 'Content-Type', content: 'text/html; charset=UTF-8' });
  }

  setCanonicalUrl(url: string): void {
    let link: HTMLLinkElement | null = document.querySelector("link[rel='canonical']");
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', url);
  }
}