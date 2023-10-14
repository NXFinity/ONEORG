import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'uk.oneorg.mobile',
  appName: 'oneorg',
  webDir: '../dist/portal',
  bundledWebRuntime: false,
  server: {
    androidScheme: 'https',
  },
};

export default config;
