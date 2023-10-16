import { Component } from '@angular/core';
import { NotificationData } from './interface/notification.interface';
import { AuthService } from "@one/core";

@Component({
  selector: 'genesis-header-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent {

  notificationData : NotificationData[] = [];

  constructor(public authService: AuthService) {}

  /*
  notificationData = [{
    icon: 'bi bi-bag text-theme',
    title: 'NEW ORDER RECEIVED ($1,299)',
    time: 'JUST NOW'
  }]
  */
}
