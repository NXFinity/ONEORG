import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  getAppMenus() {
    return [
      { 'text': 'Navigation', 'is_header': true },
      { 'is_divider': true },
      { 'text': 'Users', 'is_header': true },
    ];
  }

  getGuideMenus() {
    return [
      { 'path': '/guide', 'icon': 'bi bi-person-hearts', 'text': 'Welcome' },
      { 'text': 'How To', 'is_header': true },
      { 'path': '/dashboard', 'icon': 'bi bi-cpu', 'text': 'Dashboard' },
    ];
  }
}
