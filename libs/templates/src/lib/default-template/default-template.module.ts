import { ModuleWithProviders, NgModule } from '@angular/core';
import { TitleService } from './services/title.service';
import { HeaderComponent } from './components/header/header.component';
import { UserComponent } from './components/header/assets/user/user.component';
import { NotificationsComponent } from './components/header/assets/notifications/notifications.component';
import { MenuComponent } from './components/header/assets/menu/menu.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SidebarMobileBackdropComponent } from './components/sidebar-mobile-backdrop/sidebar-mobile-backdrop.component';
import {CardBodyComponent, CardComponent, CardExpandTogglerComponent, CardFooterComponent,
  CardGroupComponent, CardHeaderComponent, CardImgOverlayComponent } from './components/card/card.component';
import { FooterComponent } from './components/footer/footer.component';
import { ThemePanelComponent } from './components/theme-panel/theme-panel.component';
import { NavScrollComponent } from './components/nav-scroll/nav-scroll.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MaterialModule } from './modules/material.module';
import { IconModule } from './modules/icon.module';
import { MenuService } from './services/menus.service';
import { SettingsService } from './services/settings.service';
import { VariablesService } from './services/variables.service';
import { TopMenuService } from './services/topMenu.service';
import { SharedModule } from "./shared/src";
import { NgScrollbarModule} from "ngx-scrollbar";
import { NgxMasonryModule} from "ngx-masonry";
import { NgbDatepickerModule, NgbTimepickerModule, NgbTypeaheadModule } from "@ng-bootstrap/ng-bootstrap";
import { NgxMaskDirective, NgxMaskPipe } from "ngx-mask";
import { NgSelectModule } from "@ng-select/ng-select";
import { NgChartsModule } from "ng2-charts";
import { NgApexchartsModule } from "ng-apexcharts";
import { HighlightModule } from "ngx-highlightjs";
import { FullCalendarModule } from "@fullcalendar/angular";
import { ColorSketchModule } from "ngx-color/sketch";
import { CountdownModule } from "ngx-countdown";
import { TagInputModule } from "ngx-chips";

const themeComponents = [
  HeaderComponent,
  UserComponent,
  NotificationsComponent,
  MenuComponent,
  TopNavComponent,
  SidebarComponent,
  SidebarMobileBackdropComponent,
  CardComponent,
  CardHeaderComponent,
  CardBodyComponent,
  CardFooterComponent,
  CardImgOverlayComponent,
  CardGroupComponent,
  CardExpandTogglerComponent,
  FooterComponent,
  ThemePanelComponent,
  NavScrollComponent,
  NavbarComponent,
];
const themeModules = [
  MaterialModule,
  IconModule,
  NgScrollbarModule,
  NgxMasonryModule,
  NgbDatepickerModule,
  NgbTimepickerModule,
  NgbTypeaheadModule,
  NgxMaskDirective,
  NgxMaskPipe,
  NgSelectModule,
  NgChartsModule,
  NgApexchartsModule,
  HighlightModule,
  FullCalendarModule,
  ColorSketchModule,
  CountdownModule,
  TagInputModule,
];
const themeServices = [
  MenuService,
  SettingsService,
  VariablesService,
  TopMenuService,
  TitleService,
];
@NgModule({
  imports: [SharedModule, ...themeModules],
  declarations: [...themeComponents],
  exports: [SharedModule, ...themeModules, ...themeComponents],
})
export class DefaultTemplateModule {
  static forRoot(): ModuleWithProviders<DefaultTemplateModule> {
    return {
      ngModule: DefaultTemplateModule,
      providers: [
        ...themeServices,
      ],
    };
  }
}
