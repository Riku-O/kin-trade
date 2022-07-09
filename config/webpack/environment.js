const { environment } = require("@rails/webpacker");
const { VueLoaderPlugin } = require("vue-loader");
const vue = require("./loaders/vue");

environment.plugins.prepend("VueLoaderPlugin", new VueLoaderPlugin());
environment.loaders.prepend("vue", vue);
module.exports = environment;

function hotfixPostcssLoaderConfig(subloader) {
  const subloaderName = subloader.loader;
  if (subloaderName === "postcss-loader") {
    subloader.options.postcssOptions = subloader.options.config;
    delete subloader.options.config;
  }
}

environment.loaders.keys().forEach((loaderName) => {
  const loader = environment.loaders.get(loaderName);
  loader.use.forEach(hotfixPostcssLoaderConfig);
});
