import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    // canActivate: [authGuard],
    loadChildren: () =>
      import('./modules/clients/client.routes').then((m) => m.CLIENT_ROUTES),
  },
  // Ruta predeterminada
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  //Rutas para control de incidentes
  // Ruta para páginas no encontradas
  { path: '**', redirectTo: '/404' },
];
