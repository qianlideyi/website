/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
/* eslint no-console: "off" */
const postcss = require('postcss');
const autoprefixer = require('js/swiper-5.4.5/scripts/utils/autoprefixer');

module.exports = async (content, { from = undefined, to = undefined } = {}) => new Promise((resolve, reject) => {
  postcss([autoprefixer])
    .process(content, { from, to })
    .then((result) => {
      result.warnings().forEach((warn) => {
        console.warn(warn.toString());
      });
      resolve(result.css);
    })
    .catch((err) => {
      reject(err);
      throw err;
    });
});
