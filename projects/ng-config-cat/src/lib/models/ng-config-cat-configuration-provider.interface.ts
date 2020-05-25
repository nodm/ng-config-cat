import { InjectionToken } from '@angular/core';
import { NgConfigCatConfiguration } from './ng-config-cat-configuration.interface';

export interface NgConfigCatConfigurationProvider {
  provide: InjectionToken<string>;
  useFactory(): NgConfigCatConfiguration;
}
