module.exports = {
  packagerConfig: {},
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {
        // An URL to an ICO file to use as the application icon (displayed in Control Panel > Programs and Features).
        iconUrl: 'https://raw.githubusercontent.com/VikashAnandJha/mini_notes/main/img/appicon.ico',
        // The ICO file to use as the icon for the generated Setup.exe
        setupIcon: './img/appicon.ico',
      },
    }
  ],publishers: [
    {
      name: '@electron-forge/publisher-github',
      config: {
        repository: {
          owner: 'VikashAnandJha',
          name: 'mini_notes',
        },
        prerelease: false,
        draft: false,
      },
    },
  ],
};
