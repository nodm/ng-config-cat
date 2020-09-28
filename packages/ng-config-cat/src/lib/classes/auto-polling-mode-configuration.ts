import { IAutoPollOptions } from 'configcat-common';

import { AutoPollingModeOptions } from '../models';
import { PollingModeConfiguration } from './polling-mode-configuration';

export class AutoPollingModeConfiguration extends PollingModeConfiguration implements IAutoPollOptions {
  public readonly pollIntervalSeconds: number;

  constructor(options: AutoPollingModeOptions = {}) {
    super(options);
    this.pollIntervalSeconds = options.pollInterval;
  }
}
