export interface EchoPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
  openMap(options: OpenMapOptions): Promise<void>;
  getForceUpgrade(filter: string): Promise<{ results: any }>;
}

export interface OpenMapOptions {
  latitude: number;
  longitude: number;
}
