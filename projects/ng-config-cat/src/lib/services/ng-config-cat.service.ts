import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NG_CONFIG_CAT_CONFIGURATION_TOKEN } from '../constants/ng-config-cat-config.token';
import {
  AutoPollingModeConfiguration,
  LazyPollingModeConfiguration,
  ManualPollingModeConfiguration,
  ConfigCatClient,
  ConfigCatAutoModeClient,
  ConfigCatLazyModeClient,
  ConfigCatManualModeClient,
} from '../classes';
import { ConfigCatUser, NgConfigCatConfiguration } from '../models';

@Injectable()
export class NgConfigCatService {
  private readonly configCatClient: ConfigCatClient;

  constructor(@Inject(NG_CONFIG_CAT_CONFIGURATION_TOKEN) configuration: NgConfigCatConfiguration) {
    const { sdkKey, configCatConfiguration = new AutoPollingModeConfiguration() } = configuration;

    if (configCatConfiguration instanceof AutoPollingModeConfiguration) {
      this.configCatClient = new ConfigCatAutoModeClient(sdkKey, configCatConfiguration);
    } else if(configCatConfiguration instanceof LazyPollingModeConfiguration) {
      this.configCatClient = new ConfigCatLazyModeClient(sdkKey, configCatConfiguration);
    } else if(configCatConfiguration instanceof ManualPollingModeConfiguration) {
      this.configCatClient = new ConfigCatManualModeClient(sdkKey, configCatConfiguration);
    } else {
      throw new TypeError(
        'NgConfigCat configuration should be represent by an instance of PollingModeConfiguration class'
      );
    }
  }

  public getValue<T = boolean>(key: string, defaultValue?: T, user?: ConfigCatUser): Observable<T>{
    return this.configCatClient.getValue<T>(key, defaultValue, user);
  }

  public getAllKeys(): Promise<string[]> {
    return this.configCatClient.getAllKeys();
  }

  public forceRefresh(): Promise<void> {
    return this.configCatClient.forceRefresh();
  }
}
