import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface notification {
  title: string;
  message: string;
}

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor() {}

  private notificationSubject = new BehaviorSubject<notification | null>(null);
  notification$ = this.notificationSubject.asObservable();

  showNotification(
    p_title: string,
    p_message: string,
    duration: number = 3000
  ): void {
    this.notificationSubject.next({ title: p_title, message: p_message });
    setTimeout(() => {
      this.notificationSubject.next(null); // Ocultar después del tiempo definido
    }, duration);
  }
}
