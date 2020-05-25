/*
 * Public API Surface of ng-config-cat
 */

export { LogLevel } from 'configcat-common';
export { NgConfigCatModule } from './lib/ng-config-cat.module';
export { NG_CONFIG_CAT_CONFIGURATION_TOKEN } from './lib/constants/ng-config-cat-config.token';
export {
  AutoPollingModeConfiguration,
  LazyPollingModeConfiguration,
  ManualPollingModeConfiguration,
} from './lib/classes';
export {
  NgConfigCatConfiguration,
  AutoPollingModeOptions,
  LazyPollingModeOptions,
  PollingModeOptions,
} from './lib/models';
export { NgConfigCatService } from './lib/services/ng-config-cat.service';
