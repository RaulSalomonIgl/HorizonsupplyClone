import { NotificationService } from '@/app/core/services/notification.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [CommonModule, MatIcon],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.css',
})
export class NotificationComponent {
  message?: string | null = null;
  title?: string | null = null;

  constructor(private _notificationService: NotificationService) {
    this._notificationService.notification$.subscribe((notification) => {
      this.title = notification?.title;
      this.message = notification?.message;
    });
  }
}
