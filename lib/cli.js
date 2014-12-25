/*
 * ebookr-cli
 *
 * Copyright (c) 2014 Arne Hassel, contributors
 * Licensed under the MIT license.
 * https://github.com/ebookr/ebookr-cli/blob/master/LICENSE
 */

'use strict';

// External lib.
var nopt = require('nopt');

// CLI options we care about.
exports.known = {help: Boolean, version: Boolean};
exports.aliases = {h: '--help', V: '--version'};

// Parse them and return an options object.
Object.defineProperty(exports, 'options', {
  get: function() {
    return nopt(exports.known, exports.aliases, process.argv, 2);
  }
});