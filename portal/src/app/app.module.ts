import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { provideNgxMask } from "ngx-mask";
import { HIGHLIGHT_OPTIONS } from "ngx-highlightjs";
import { NG_SCROLLBAR_OPTIONS } from "ngx-scrollbar";
import { TitleService } from "../../../libs/templates/src/lib/default-template/services/title.service";
import { DefaultTemplateModule } from "@one/templates";
import { CoreModule } from "@one/core";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    DefaultTemplateModule,
    CoreModule,
  ],
  providers: [
    Title,
    provideNgxMask(), {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        coreLibraryLoader: () => import('highlight.js/lib/core'),
        languages: {
          typescript: () => import('highlight.js/lib/languages/typescript'),
          css: () => import('highlight.js/lib/languages/css'),
          xml: () => import('highlight.js/lib/languages/xml')
        }
      }
    }, {
      provide: NG_SCROLLBAR_OPTIONS,
      useValue: {
        visibility: 'hover'
      }
    }],  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private titleService: TitleService) {
    this.titleService.setDynamicTitle();
  }
}
