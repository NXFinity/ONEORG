import { Component } from '@angular/core';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  host: {
  	class: 'app-footer'
  }
})

export class FooterComponent {
	year = new Date().getFullYear();

  constructor(private settingsService: SettingsService) {
  }
  get fullDate(): string {
    return `${this.year}`;
  }
}
