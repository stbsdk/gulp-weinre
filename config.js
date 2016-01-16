/**
 * WEb INspector REmote debugger server configuration for weinre gulp task.
 *
 * @author Stanislav Kalashnik <darkpark.main@gmail.com>
 * @license GNU GENERAL PUBLIC LICENSE Version 3
 */

'use strict';

var extend = require('extend'),
    config = require('spa-gulp/config');


// base config
// each profile inherits all options from the "default" profile
module.exports = extend(true, {}, config, {
    default: {
        // listening HTTP port to provide client interface
        port: 8080,

        // address to listen
        host: '-all-',

        // full logging
        logging: false,

        // debug servers session id
        name: 'anonymous'
    }
});
