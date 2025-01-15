import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class IconService {
  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) {
    this.registerIcons();
  }

  private registerIcons(): void {
    this.iconRegistry.addSvgIcon(
      'instagram',
      this.sanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/brand-instagram.svg'
      )
    );
    this.iconRegistry.addSvgIcon(
      'meta',
      this.sanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/brand-meta.svg'
      )
    );
    this.iconRegistry.addSvgIcon(
      'pinterest',
      this.sanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/brand-pinterest.svg'
      )
    );
    this.iconRegistry.addSvgIcon(
      'x',
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/brand-x.svg')
    );
    this.iconRegistry.addSvgIcon(
      'youtube',
      this.sanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/brand-youtube.svg'
      )
    );
    this.iconRegistry.addSvgIcon(
      'disc',
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/disc.svg')
    );
    this.iconRegistry.addSvgIcon(
      'logo',
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/logo.svg')
    );
    this.iconRegistry.addSvgIcon(
      'cart',
      this.sanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/shopping-cart.svg'
      )
    );
  }
}
