import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
	public appMode: string = 'dark';
	public appTheme: string = 'theme-orange';
	public appCover: string = '';

	public appBoxedLayout: boolean = false;
  public appHeaderNone: boolean = false;
  public appTopNav: boolean = true;
  public appFooter: boolean = true;

  public appSidebarNone: boolean = false;
  public appSidebarCollapsed: boolean = false;

  public appContentClass: string = '';
  public appContentFullHeight: boolean = true;
  public appContentFullWidth: boolean = true;
}
