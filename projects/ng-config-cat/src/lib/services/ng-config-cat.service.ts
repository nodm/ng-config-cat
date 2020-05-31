import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  AutoPollingModeConfiguration,
  LazyPollingModeConfiguration,
  ManualPollingModeConfiguration,
  ConfigCatClient,
  ConfigCatAutoModeClient,
  ConfigCatConfiguration,
  ConfigCatLazyModeClient,
  ConfigCatManualModeClient,
} from '../classes';
import { ConfigCatUser } from '../models';

@Injectable({
  providedIn: 'root'
})
export class NgConfigCatService {
  private readonly configCatClient: ConfigCatClient;

  constructor(configuration: ConfigCatConfiguration) {
    const { sdkKey, pollingModeConfiguration } = configuration;

    if (pollingModeConfiguration instanceof AutoPollingModeConfiguration) {
      this.configCatClient = new ConfigCatAutoModeClient(sdkKey, pollingModeConfiguration);
    } else if(pollingModeConfiguration instanceof LazyPollingModeConfiguration) {
      this.configCatClient = new ConfigCatLazyModeClient(sdkKey, pollingModeConfiguration);
    } else if(pollingModeConfiguration instanceof ManualPollingModeConfiguration) {
      this.configCatClient = new ConfigCatManualModeClient(sdkKey, pollingModeConfiguration);
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
