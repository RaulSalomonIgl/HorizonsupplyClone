import { IconService } from '@/app/core/services/icon.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { CurrencySelectorComponent } from '../../../modules/clients/features/currency-selector/currency-selector.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIcon, CommonModule, CurrencySelectorComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  _isSidebarOpen: boolean = false;
  _isUserMenuOpen: boolean = false;

  constructor(private _iconService: IconService) {}

  toggleSidebar() {
    this._isSidebarOpen = !this._isSidebarOpen;
  }
  toggleUserMenu() {
    this._isUserMenuOpen = !this._isUserMenuOpen;
  }
}
