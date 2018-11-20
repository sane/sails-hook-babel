# sails-hook-babel
[![npm version](https://badge.fury.io/js/sails-hook-babel.svg)](https://npmjs.org/package/sails-hook-babel) [![Dependency Status](https://img.shields.io/david/sane/sails-hook-babel.svg?style=flat)](https://david-dm.org/sane/sails-hook-babel)

*Needs at least Sails version 0.11.0 to work*

[Sails JS](http://sailsjs.org) hook to activate ES6/7 Javascript code for your whole sails app, via [https://babeljs.io/](https://babeljs.io/).

### Installation

`npm install sails-hook-babel`

### Usage

Just lift your app as normal, and enjoy the future of Javascript today. To see what is possible, see: https://babeljs.io/docs/learn-es6/

### Configuration

By default, configuration lives in `sails.config.babel`.  The configuration key (`babel`) can be changed by setting `sails.config.hooks['sails-hook-babel'].configKey`.

Parameter      | Type                | Details
-------------- | ------------------- |:---------------------------------
compile        | ((boolean)) | Whether or not sails should compile future JS code.  Defaults to `true`.
polyfill       | ((boolean)) | Whether or not use `babel-polyfill`.  Defaults to `false`.
presets        | ((array)) | Which presets to transpile your code with. Defaults to [@babel/preset-env](https://babeljs.io/docs/en/babel-preset-env/).

Also you can use [other Babel 7 options](https://babeljs.io/docs/en/options).

That&rsquo;s it!
