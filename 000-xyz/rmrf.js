#! /usr/bin/env node

/**
 * [rmrf : node cli tools]
 * @author: xgqfrms
 * @date: 2017-01-01
 */

const path = require('path');
const rimraf = require('rimraf');

console.log(`hello world!`);
let folder_pathname = path.resolve(__dirname, "dist/js");

// https://github.com/isaacs/rimraf#api
// rimraf(f, [opts], callback);
rimraf.sync(folder_pathname, {}, function() {
    // callback
    console.log("this is a rmrf callback!");
});
