'use strict';

require('angular');

angular.module('hitch.link', [])

.filter('link', function() {
    return function(path, env) {
        switch (env) {
            case 'merchant' :
                return process.env.merchant.protocol + process.env.merchant.host + path
            break;
            case 'assets' :
                return process.env.assets.protocol + process.env.assets.host + path
            break;
            case 'api' :
                return process.env.api.protocol + process.env.api.host + path
            break;
            case 'consumer' :
                return process.env.consumer.protocol + process.env.consumer.host + path
            break;
        }
    }
});