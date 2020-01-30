module.exports = {
  // ...other vue-cli plugin options...
  lintOnSave: false,
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/_variables.scss";`,
        includePaths: ["./node_modules"]
      }
    }
  },
  pwa: {
    name: 'Constantine Minhagim',
    themeColor: '#3e7ab8',
    msTileColor: '#ffffff',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: 'src/service-worker.js'
    }
  }
}
