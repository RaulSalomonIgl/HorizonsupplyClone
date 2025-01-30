import { DarkModeService } from '@/app/core/services/dark-mode.service';
import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-dark-mode-switcher',
  standalone: true,
  imports: [MatIcon],
  templateUrl: './dark-mode-switcher.component.html',
  styleUrl: './dark-mode-switcher.component.css',
})
export class DarkModeSwitcherComponent {
  protected isDarkMode = false;

  constructor(private _darkModeService: DarkModeService) {
    this.isDarkMode = JSON.parse(
      localStorage.getItem('color-theme') || 'false'
    );
  }

  toggleTheme() {
    this._darkModeService.toggleTheme();
    this.isDarkMode = !this.isDarkMode;
  }
}
