import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.mobtechi.toolsguru',
  appName: 'ToolsGuru',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    Splash: {
      launchShowDuration: 2500,
      launchAutoHide: true,
      backgroundColor: '#0172ab',
      androidSplashResourceName: 'assets/splash',
      showSpinner: false,
      splashFullScreen: false,
    },
  }
};

export default config;
