import { WebPlugin } from '@capacitor/core';

import type { EchoPlugin, OpenMapOptions } from './definitions';

export class EchoWeb extends WebPlugin implements EchoPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }

  async openMap(location: OpenMapOptions): Promise<void> {
    // logic here
    debugger;
    console.log(`KEN web.ts : location from web: ${JSON.stringify(location)}`);
  }

  async getForceUpgrade(filter: string): Promise<{ results: any }> {
    console.log('filter: ', filter);
    return {
      results: {
        currentAppVersion: '4.3.0',
        mandatoryAppVersion: '4.3.0',
        appUpgradeRequired: false,
        currentOsVersion: '12.2',
        mandatoryOsVersion: '12.2',
        osUpgradeRequired: false,
      },
    };
  }
}
