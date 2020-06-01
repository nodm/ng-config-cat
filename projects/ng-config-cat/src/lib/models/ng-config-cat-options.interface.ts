import { ConfigCatPollingModeConfiguration } from './config-cat-polling-mode-configuration.type';

export interface NgConfigCatConfiguration {
  sdkKey: string;
  configuration?: ConfigCatPollingModeConfiguration;
}
