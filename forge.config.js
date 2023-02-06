module.exports = {
  packagerConfig: {},
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {
        // An URL to an ICO file to use as the application icon (displayed in Control Panel > Programs and Features).
        iconUrl: './img/appicon.ico',
        // The ICO file to use as the icon for the generated Setup.exe
        setupIcon: './img/appicon.ico',
      },
    }
  ],
};
