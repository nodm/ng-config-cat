import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgConfigCatConfigurationProvider } from './models';
import { NgConfigCatService } from './services/ng-config-cat.service';


@NgModule({
  imports: [
    CommonModule,
  ]
})
export class NgConfigCatModule {
  static forRoot(configurationProvider: NgConfigCatConfigurationProvider): ModuleWithProviders {
    return {
      ngModule: NgConfigCatModule,
      providers: [
        configurationProvider,
        NgConfigCatService,
      ],
    };
  }
}
