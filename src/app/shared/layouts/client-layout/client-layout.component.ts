import { Component } from '@angular/core';
import { AppComponent } from '../../../app.component';
import { HeaderComponent } from '../../ui/header/header.component';
import { FooterComponent } from '../../ui/footer/footer.component';
import { NotificationComponent } from '../../ui/notification/notification.component';

@Component({
  selector: 'app-client-layout',
  standalone: true,
  imports: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NotificationComponent,
  ],
  templateUrl: './client-layout.component.html',
  styleUrl: './client-layout.component.css',
})
export class ClientLayoutComponent {}
