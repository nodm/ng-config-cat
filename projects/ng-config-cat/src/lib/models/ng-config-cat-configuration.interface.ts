import {
  AutoPollingModeConfiguration,
  LazyPollingModeConfiguration,
  ManualPollingModeConfiguration,
} from '../classes';

export interface NgConfigCatConfiguration {
  sdkKey: string;
  configCatConfiguration?: AutoPollingModeConfiguration | LazyPollingModeConfiguration | ManualPollingModeConfiguration;
}
