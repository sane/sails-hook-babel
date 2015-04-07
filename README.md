# sails-hook-babel
[![npm version](https://badge.fury.io/js/sails-hook-babel.svg)](https://npmjs.org/package/sails-hook-babel) [![Dependency Status](https://img.shields.io/david/artificialio/sails-hook-babel.svg?style=flat)](https://david-dm.org/artificialio/sails-hook-babel)

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
stage   | ((integer)) | Which [stage](http://babeljs.io/docs/usage/experimental/) of Proposals to use 0 being the most experimental.  Defaults to 2.
loose          | ((boolean)) | Whether or not use babel's [loose](http://babeljs.io/docs/usage/loose/) mode.  Defaults to `true`.
ignore          | ((boolean/Regex)) | Can be `false` or a regex of what to ignore. For default mode see http://babeljs.io/docs/usage/require/
only          | ((Regex)) | Whether or not use babel's [loose](http://babeljs.io/docs/usage/loose/) mode. For default mode see http://babeljs.io/docs/usage/require/
extensions          | ((array)) | Pass an array of extensions, such as ['.js', '.es'].  For default mode see http://babeljs.io/docs/usage/require/

That&rsquo;s it!
