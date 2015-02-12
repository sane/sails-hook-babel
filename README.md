# sails-hook-traceur
[![npm version](https://badge.fury.io/js/sails-hook-traceur.svg)](https://npmjs.org/package/sails-hook-traceur) [![Dependency Status](https://img.shields.io/david/artificialio/sails-hook-traceur.svg?style=flat)](https://david-dm.org/artificialio/sails-hook-traceur)

*Needs at least Sails version 0.11-rc to work*

[Sails JS](http://sailsjs.org) hook to activate ES6/7 Javascript code for your whole sails app, via [traceur](https://github.com/google/traceur-compiler).

### Installation

`npm install sails-hook-traceur`

### Usage

Just lift your app as normal, and enjoy the future of Javascript today. To see what is possible, see: https://github.com/google/traceur-compiler/wiki/LanguageFeatures

### Configuration

By default, configuration lives in `sails.config.traceur`.  The configuration key (`traceur`) can be changed by setting `sails.config.hooks['sails-hook-traceur'].configKey`.

Parameter      | Type                | Details
-------------- | ------------------- |:---------------------------------
compile        | ((boolean)) | Whether or not sails should compile/allow ES6/7 code.  Defaults to `true`.

That&rsquo;s it!
