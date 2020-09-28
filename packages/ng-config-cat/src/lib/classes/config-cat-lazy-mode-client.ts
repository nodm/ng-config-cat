import { createClientWithLazyLoad } from 'configcat-js';

import { LazyPollingModeConfiguration } from './lazy-polling-mode-configuration';
import { ConfigCatClient } from './config-cat-client';

export class ConfigCatLazyModeClient extends ConfigCatClient {
  constructor(sdkKey: string, configCatConfiguration: LazyPollingModeConfiguration) {
    super();
    this.client = createClientWithLazyLoad(sdkKey, configCatConfiguration);
  }
}
