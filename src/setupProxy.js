const apiMocker = require('mocker-api');
const path = require('path');

module.exports = app => {
  apiMocker(app, path.resolve('./mocker/index.js'), {
    changeHost: true,
  });
};
