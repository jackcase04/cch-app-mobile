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
      }
    },
    version: "1.0.2",
    android: {
      package: "com.jackcase04.cchhouseapp",
      useNextNotificationsApi: true,
      googleServicesFile: process.env.GOOGLE_SERVICES_JSON,
      permissions: [
        "SCHEDULE_EXACT_ALARM",
        "USE_EXACT_ALARM"
      ]
    },
    splash: {
      image: "./assets/splashscreen_logo.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff"
    },
    ios: {
      bundleIdentifier: "com.jackcase04.cchhouseapp",
      infoPlist: {
        UIBackgroundModes: [
          "remote-notification",
          "remote-notification"
        ],
        ITSAppUsesNonExemptEncryption: false
      },
      entitlements: {
        "aps-environment": "development"
      }
    },
    icon: "./assets/appstore.png"
  }
};
