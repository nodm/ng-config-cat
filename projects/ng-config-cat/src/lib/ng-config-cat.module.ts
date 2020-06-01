import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NG_CONFIG_CAT_OPTIONS_TOKEN } from './constants/ng-config-cat-options.token';
import { NgConfigCatConfiguration } from './models';


@NgModule({
  imports: [
    CommonModule,
  ]
})
export class NgConfigCatModule {
  static forRoot(ngConfigCatConfiguration: NgConfigCatConfiguration): ModuleWithProviders {
    return {
      ngModule: NgConfigCatModule,
      providers: [
        {
          provide: NG_CONFIG_CAT_OPTIONS_TOKEN,
          useValue: ngConfigCatConfiguration
        },
      ],
    };
  }

  constructor (@Optional() @SkipSelf() parentModule?: NgConfigCatModule) {
    if (parentModule) {
      throw new Error('NgConfigCatModule is already loaded. Import it in the AppModule only.');
    }
  }
}
