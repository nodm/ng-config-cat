import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutoPollingModeConfiguration, ConfigCatConfiguration } from './classes';
import { NG_CONFIG_CAT_OPTIONS_TOKEN } from './constants/ng-config-cat-options.token';
import { NgConfigCatOptions } from './models';


@NgModule({
  imports: [
    CommonModule,
  ]
})
export class NgConfigCatModule {
  static forRoot(configuration: NgConfigCatOptions): ModuleWithProviders {
    return {
      ngModule: NgConfigCatModule,
      providers: [
        {
          provide: NG_CONFIG_CAT_OPTIONS_TOKEN,
          useValue: configuration
        },
        {
          provide: ConfigCatConfiguration,
          useFactory: provideNgConfigCatServiceOptions,
          deps: [NG_CONFIG_CAT_OPTIONS_TOKEN]
        }
      ],
    };
  }

  constructor (@Optional() @SkipSelf() parentModule?: NgConfigCatModule) {
    if (parentModule) {
      throw new Error('NgConfigCatModule is already loaded. Import it in the AppModule only.');
    }
  }
}

export function provideNgConfigCatServiceOptions(config: NgConfigCatOptions): ConfigCatConfiguration {
  const { sdkKey, configuration = new AutoPollingModeConfiguration() } = config;

  return new ConfigCatConfiguration(sdkKey, configuration);
}
