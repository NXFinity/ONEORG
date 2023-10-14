import { ModuleWithProviders, NgModule } from '@angular/core';
import { TitleService } from "../default-template/services/title.service";

const themeServices = [
  TitleService,
];
@NgModule({
  imports: [],
  declarations: [],
  exports: [],
})
export class SocialTemplateModule {
  static forRoot(): ModuleWithProviders<SocialTemplateModule> {
  return {
    ngModule: SocialTemplateModule,
    providers: [
      ...themeServices,
    ],
  };
}
}
