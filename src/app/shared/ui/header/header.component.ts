import { IconService } from '@/app/core/services/icon.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { CurrencySelectorComponent } from '../../../modules/clients/features/currency-selector/currency-selector.component';
import { DarkModeSwitcherComponent } from '../dark-mode-switcher/dark-mode-switcher.component';
import { CollectionService } from '@/app/core/services/collection.service';
import { CollectionsNamePipe } from '@/app/core/pipes/collections-name.pipe';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatIcon,
    CommonModule,
    CurrencySelectorComponent,
    DarkModeSwitcherComponent,
    CollectionsNamePipe,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  _isSidebarOpen: boolean = false;
  _isUserMenuOpen: boolean = false;
  data: any[] = [];

  constructor(
    private _iconService: IconService,
    private _collectionService: CollectionService
  ) {}

  ngOnInit(): void {
    // Llamamos al servicio para obtener los datos
    this._collectionService.getData().subscribe(
      (response) => {
        this.data = response.urlset.url.sort((first: any, second: any) => {
          const textA = first.loc._text.toLowerCase();
          const textB = second.loc._text.toLowerCase();
          return textA < textB ? -1 : textA > textB ? 1 : 0;
        }); // Asignamos los datos obtenidos a la variable 'data'
      },
      (error) => {
        console.error('Error al obtener los datos:', error);
      }
    );
  }
  toggleSidebar() {
    this._isSidebarOpen = !this._isSidebarOpen;
  }
  toggleUserMenu() {
    this._isUserMenuOpen = !this._isUserMenuOpen;
  }
}
