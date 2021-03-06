import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NG_CONFIG_CAT_OPTIONS_TOKEN } from './constants/ng-config-cat-options.token';
import { NgConfigCatConfiguration } from './models';
import {
  NgConfigCatFeatureEnabledDirective,
  NgConfigCatFeatureDisabledDirective,
} from './directives';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    NgConfigCatFeatureEnabledDirective,
    NgConfigCatFeatureDisabledDirective,
  ],
  exports: [
    NgConfigCatFeatureEnabledDirective,
    NgConfigCatFeatureDisabledDirective,
  ],
})
export class NgConfigCatModule {
  static forRoot(ngConfigCatConfiguration: NgConfigCatConfiguration): ModuleWithProviders<NgConfigCatModule> {
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
