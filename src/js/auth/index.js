/**
 * Created by ericshape on 5/1/16.
 */

import angular from 'angular';

// Create the home module where our functionality can attach to
let authModule = angular.module('app.auth', []);


// Include our UI-Router config settings
import AuthConfig from './auth.config';
authModule.config(AuthConfig);

// controllers
import AuthCtrl from './auth.controller';
authModule.controller('AuthCtrl', AuthCtrl);


export default authModule;