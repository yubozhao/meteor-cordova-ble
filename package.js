Package.describe({
  name: 'bozhao:cordova-ble',
  summary: 'BLE plugin for meteor',
  version: '0.0.8',
  git: 'https://github.com/yubozhao/meteor-cordova-ble.git'
});

Cordova.depends({
  "com.evothings.ble": "0.0.1"
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use('underscore');
  api.addFiles('easy-ble.js', 'client');
  api.addFiles('ti-sensortag.js', 'client');

  api.export('TISensorTag', 'client');
  api.export('easyble', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('bozhao:cordova-ble');
});
