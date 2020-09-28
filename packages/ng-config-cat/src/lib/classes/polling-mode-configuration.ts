import { createConsoleLogger } from 'configcat-js';
import { LogLevel, IConfigCatLogger } from 'configcat-common';

import { PollingModeOptions } from '../models';

export abstract class PollingModeConfiguration {
  public readonly logger: IConfigCatLogger;
  public readonly requestTimeoutMs: number;

  protected constructor(options: PollingModeOptions) {
    if (options.logLevel && options.logLevel !== LogLevel.Off) {
      this.logger = createConsoleLogger(options.logLevel);
    }
    this.requestTimeoutMs = options.requestTimeout;
  }
}
