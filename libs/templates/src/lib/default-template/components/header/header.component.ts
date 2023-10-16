import { Component, Input, Output, EventEmitter, Renderer2, OnDestroy } from '@angular/core';
import {SettingsService} from "../../services/settings.service";
import {AuthService} from "@one/core";


declare var slideToggle: any;

interface NotificationData {
  icon: string;
  title: string;
  time: string;
}

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  host: {
  	class: 'app-header'
  }
})
export class HeaderComponent {
	notificationData : NotificationData[] = [];

	/*
	notificationData = [{
		icon: 'bi bi-bag text-theme',
		title: 'NEW ORDER RECEIVED ($1,299)',
		time: 'JUST NOW'
	}]
	*/

  constructor(public appSettings: SettingsService,
              public authService: AuthService) { }

	handleToggleSidebarCollapsed(event: MouseEvent) {
		event.preventDefault();

		if (!this.appSettings.appSidebarNone) {
			var elm = document.getElementById('app');
			if (elm) {
				elm.classList.toggle('app-sidebar-collapsed');
			}
		}
	}

	handleToggleMobileSidebar(event: MouseEvent) {
		event.preventDefault();

		if (!(this.appSettings.appSidebarNone && this.appSettings.appTopNav)) {
			var elm = document.getElementById('app');
			if (elm) {
				elm.classList.toggle('app-sidebar-mobile-toggled');
			}
		} else {
			slideToggle(document.querySelector('.app-top-nav'));
			window.scrollTo(0, 0);
		}
	}

	handleAppToggleClass(event: MouseEvent, className: string) {
		event.preventDefault();

		var elm = document.getElementById('app');
		if (elm) {
			elm.classList.toggle(className);
		}
	}
}
