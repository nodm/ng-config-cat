import { createClientWithAutoPoll } from 'configcat-js';
import { Observable, Subject, merge } from 'rxjs';
import { distinctUntilChanged, switchMap } from 'rxjs/operators';

import { ConfigCatUser } from '../models';
import { ConfigCatClient } from './config-cat-client';
import { AutoPollingModeConfiguration } from './auto-polling-mode-configuration';

export class ConfigCatAutoModeClient extends ConfigCatClient {
  private readonly configChangeNotificator = new Subject<void>();

  constructor(sdkKey: string, configCatConfiguration: AutoPollingModeConfiguration) {
    super();
    this.client = createClientWithAutoPoll(sdkKey, {
      pollIntervalSeconds: configCatConfiguration.pollIntervalSeconds,
      configChanged: () => this.configChangeNotificator.next(),
      logger: configCatConfiguration.logger,
      requestTimeoutMs: configCatConfiguration.requestTimeoutMs,
    });
  }

  public getValue<T = boolean>(key: string, defaultValue?: T, user?: ConfigCatUser): Observable<T> {
    return merge(
      super.getValue<T>(key, defaultValue, user),
      this.configChangeNotificator.pipe(switchMap(() => super.getValue<T>(key, defaultValue, user)))
    ).pipe(distinctUntilChanged());
  }
}
