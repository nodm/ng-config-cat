import { ILazyLoadingOptions } from 'configcat-common';
import { LazyPollingModeOptions } from '../models';
import { PollingModeConfiguration } from './polling-mode-configuration';

export class LazyPollingModeConfiguration extends PollingModeConfiguration implements ILazyLoadingOptions {
  public cacheTimeToLiveSeconds: number;

  constructor(options: LazyPollingModeOptions = {}) {
    super(options);
    this.cacheTimeToLiveSeconds = options.cacheTimeToLive;
  }
}
