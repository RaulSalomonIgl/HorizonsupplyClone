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
      'left',
      this.sanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/chevron-left.svg'
      )
    );
    this.iconRegistry.addSvgIcon(
      'right',
      this.sanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/chevron-right.svg'
      )
    );
    this.iconRegistry.addSvgIcon(
      'circle-check',
      this.sanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/circle-check.svg'
      )
    );
    this.iconRegistry.addSvgIcon(
      'decrement',
      this.sanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/decrement.svg'
      )
    );
    this.iconRegistry.addSvgIcon(
      'disc',
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/disc.svg')
    );
    this.iconRegistry.addSvgIcon(
      'favorite-filled',
      this.sanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/heart-filled.svg'
      )
    );
    this.iconRegistry.addSvgIcon(
      'favorite',
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/heart.svg')
    );
    this.iconRegistry.addSvgIcon(
      'increment',
      this.sanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/increment.svg'
      )
    );
    this.iconRegistry.addSvgIcon(
      'logo',
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/logo.svg')
    );
    this.iconRegistry.addSvgIcon(
      'moon',
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/moon.svg')
    );
    this.iconRegistry.addSvgIcon(
      'more',
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/plus.svg')
    );
    this.iconRegistry.addSvgIcon(
      'add-cart',
      this.sanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/shopping-cart-plus.svg'
      )
    );
    this.iconRegistry.addSvgIcon(
      'cart',
      this.sanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/shopping-cart.svg'
      )
    );
    this.iconRegistry.addSvgIcon(
      'star',
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/star.svg')
    );
    this.iconRegistry.addSvgIcon(
      'sun',
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/sun.svg')
    );
    this.iconRegistry.addSvgIcon(
      'view',
      this.sanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/visibility.svg'
      )
    );
  }
}
