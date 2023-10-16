import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class TopMenuService {
	getAppMenus() {
		return [
      { 'path': '/guide', 'icon': 'bi bi-bookmark-star', 'text': 'Where to begin?' },
      { 'path': '/guide/discovery', 'icon': 'bi bi-person-hearts', 'text': 'Discovering yourself' },
      { 'path': '/guide/risks', 'icon': 'bi bi-exclamation-square', 'text': 'Understanding the Risks' },
      { 'path': '/guide/rewards', 'icon': 'bi bi-gem', 'text': 'Reap the Rewards' },
      { 'path': '/guide/benefits', 'icon': 'bi bi-plus', 'text': 'Get the Benefits' },
        ];
	}
}
