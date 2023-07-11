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
}
