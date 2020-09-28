import { IManualPollOptions } from 'configcat-common';

import { PollingModeOptions } from '../models';
import { PollingModeConfiguration } from './polling-mode-configuration';

export class ManualPollingModeConfiguration extends PollingModeConfiguration implements IManualPollOptions {
  constructor(options: PollingModeOptions = {}) {
    super(options);
  }
}
