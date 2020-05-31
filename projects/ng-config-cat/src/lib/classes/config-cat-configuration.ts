import { ConfigCatPollingModeConfiguration } from '../models';

export class ConfigCatConfiguration {
  constructor(public sdkKey: string, public pollingModeConfiguration: ConfigCatPollingModeConfiguration) {
  }
}
