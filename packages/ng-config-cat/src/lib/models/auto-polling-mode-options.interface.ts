import { PollingModeOptions } from './polling-mode-options.interface';

export interface AutoPollingModeOptions extends PollingModeOptions {
  pollInterval?: number;
}
