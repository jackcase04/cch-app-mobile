export default {
  expo: {
    scheme: "acme",
    plugins: [
      "expo-router"
    ],
    assetBundlePatterns: [
      "**/*"
    ],
    name: "CCH App",
    slug: "cch-house-app",
    orientation: "portrait",
    extra: {
      router: {
        origin: false
      },
      eas: {
        projectId: "b3adeaa2-9352-48d6-9170-d82d93300aed"
      },
      apiUrl: process.env.PROD_API_URL,
      apiKey: process.env.API_KEY
    },
    version: "2.0.2",
    android: {
      package: "com.jackcase04.cchhouseapp",
      useNextNotificationsApi: true,
      googleServicesFile: process.env.GOOGLE_SERVICES_JSON
    },
    // Splash used to go here
    ios: {
      bundleIdentifier: "com.jackcase04.cchhouseapp",
      infoPlist: {
        UIBackgroundModes: [
          "remote-notification"
        ],
        ITSAppUsesNonExemptEncryption: false,
        NSAppTransportSecurity: {
          NSAllowsArbitraryLoads: true
        }
      },
      entitlements: {
        "aps-environment": "production"
      }
    },
    icon: "./assets/appstore.png"
  }
};
