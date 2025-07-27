export default {
  expo: {
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
      eas: {
        projectId: "b3adeaa2-9352-48d6-9170-d82d93300aed"
      }
    },
    version: "1.0.2",
    android: {
      package: "com.jackcase04.cchhouseapp",
      useNextNotificationsApi: true,
      googleServicesFile: process.env.GOOGLE_SERVICES_JSON
    },
    ios: {
      bundleIdentifier: "com.jackcase04.cchhouseapp",
      infoPlist: {
        UIBackgroundModes: ["remote-notification"],
        ITSAppUsesNonExemptEncryption: false,
        NSAppTransportSecurity: {
          NSAllowsArbitraryLoads: true
        }
      },
      entitlements: {
        "aps-environment": process.env.EAS_BUILD_PROFILE === "production" ? "production" : "development"
      }
    },
    icon: "./assets/appstore.png"
  }
};
