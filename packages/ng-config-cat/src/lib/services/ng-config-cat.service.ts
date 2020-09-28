import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import {
  AutoPollingModeConfiguration,
  LazyPollingModeConfiguration,
  ManualPollingModeConfiguration,
  ConfigCatClient,
  ConfigCatAutoModeClient,
  ConfigCatLazyModeClient,
  ConfigCatManualModeClient,
} from '../classes';
import { NG_CONFIG_CAT_OPTIONS_TOKEN } from '../constants/ng-config-cat-options.token';
import { ConfigCatUser, NgConfigCatConfiguration } from '../models';

@Injectable({
  providedIn: 'root'
})
export class NgConfigCatService {
  private readonly configCatClient: ConfigCatClient;

  constructor(@Inject(NG_CONFIG_CAT_OPTIONS_TOKEN) ngConfigCatConfiguration: NgConfigCatConfiguration) {
    const { sdkKey, configuration = new AutoPollingModeConfiguration() } = ngConfigCatConfiguration;

    if (configuration instanceof AutoPollingModeConfiguration) {
      this.configCatClient = new ConfigCatAutoModeClient(sdkKey, configuration);
    } else if(configuration instanceof LazyPollingModeConfiguration) {
      this.configCatClient = new ConfigCatLazyModeClient(sdkKey, configuration);
    } else if(configuration instanceof ManualPollingModeConfiguration) {
      this.configCatClient = new ConfigCatManualModeClient(sdkKey, configuration);
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
