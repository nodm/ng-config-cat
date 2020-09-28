import { Observable } from 'rxjs';
import { fromPromise } from 'rxjs/internal-compatibility';

import { ConfigCatUser } from '../models';

export abstract class ConfigCatClient {
  protected client;

  public getValue<T = boolean>(key: string, defaultValue?: T, user?: ConfigCatUser): Observable<T> {
    return fromPromise(this.client.getValueAsync(key, defaultValue, user));
  }

  public getAllKeys(): Promise<string[]> {
    return this.client.getAllKeysAsync();
  }

  public forceRefresh(): Promise<void> {
    return this.client.forceRefreshAsync();
  }
}

