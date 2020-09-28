import { createClientWithManualPoll } from 'configcat-js';

import { ConfigCatClient } from './config-cat-client';
import { ManualPollingModeConfiguration } from './manual-polling-mode-configuration';

export class ConfigCatManualModeClient extends ConfigCatClient {
  constructor(sdkKey: string, configCatConfiguration: ManualPollingModeConfiguration) {
    super();
    this.client = createClientWithManualPoll(sdkKey, configCatConfiguration);
  }
}
