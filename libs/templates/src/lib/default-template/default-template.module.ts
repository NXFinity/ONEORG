import { ModuleWithProviders, NgModule } from '@angular/core';
import { TitleService } from './services/title.service';


const themeServices = [
  TitleService,
];
@NgModule({
  imports: [],
  declarations: [],
  exports: [],
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
