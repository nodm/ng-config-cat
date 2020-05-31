import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutoPollingModeConfiguration, ConfigCatConfiguration } from './classes';
import { NG_CONFIG_CAT_CONFIGURATION_TOKEN } from './constants/ng-config-cat-config.token';
import { NgConfigCatConfiguration } from './models';


@NgModule({
  imports: [
    CommonModule,
  ]
})
export class NgConfigCatModule {
  static forRoot(configuration: NgConfigCatConfiguration): ModuleWithProviders {
    return {
      ngModule: NgConfigCatModule,
      providers: [
        {
          provide: NG_CONFIG_CAT_CONFIGURATION_TOKEN,
          useValue: configuration
        },
        {
          provide: ConfigCatConfiguration,
          useFactory: provideNgConfigCatServiceOptions,
          deps: [NG_CONFIG_CAT_CONFIGURATION_TOKEN]
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

export function provideNgConfigCatServiceOptions(config: NgConfigCatConfiguration): ConfigCatConfiguration {
  const { sdkKey, configuration = new AutoPollingModeConfiguration() } = config;

  return new ConfigCatConfiguration(sdkKey, configuration);
}
