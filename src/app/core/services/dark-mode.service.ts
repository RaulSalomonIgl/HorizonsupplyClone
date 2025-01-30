import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DarkModeService {
  private _darkMode = false;

  constructor() {
    this._darkMode = JSON.parse(localStorage.getItem('color-theme') || 'false');
    this.applyTheme();
  }

  private applyTheme() {
    if (this._darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  toggleTheme() {
    this._darkMode = !this._darkMode;
    localStorage.setItem('color-theme', JSON.stringify(this._darkMode));
    this.applyTheme();
  }
}
