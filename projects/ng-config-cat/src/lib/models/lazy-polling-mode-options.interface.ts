import { PollingModeOptions } from './polling-mode-options.interface';

export interface LazyPollingModeOptions extends PollingModeOptions  {
  cacheTimeToLive?: number;
}
