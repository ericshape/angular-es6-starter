/**
 * Created by ericshape on 5/1/16.
 */

function AuthConfig($stateProvider, $httpProvider) {
    'ngInject';

    // Define the routes
    $stateProvider

        .state('app.login', {
            url: '/login',
            templateUrl: 'auth/auth.html',
            title: 'Sign in'
        })

        .state('app.register', {
            url: '/register',
            templateUrl: 'auth/auth.html',
            title: 'Sign up'
        });

};

export default AuthConfig;
