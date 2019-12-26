module.exports = {
  // ...other vue-cli plugin options...
  lintOnSave: false,
  pwa: {
    name: 'Constantine Minhagim',
    themeColor: '#3e7ab8',
    msTileColor: '#ffffff',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    workboxOptions: {
      navigateFallback: '/index.html',
    },
  },
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/_variables.scss";`,
        includePaths: ["./node_modules"]
      }
    }
  }
}