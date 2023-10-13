import {ModuleWithProviders, NgModule} from '@angular/core';

@NgModule({
  imports: [],
  exports: [],
  declarations: [],
})
export class DefaultTemplateModule {
  static forRoot(): ModuleWithProviders<DefaultTemplateModule> {
    return {
      ngModule: DefaultTemplateModule,
      providers: [],
    };
  }
}
