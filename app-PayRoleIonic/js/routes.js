angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('payRoleNovo', {
    url: '/novo',
    templateUrl: 'templates/payRoleNovo.html',
    controller: 'payRoleNovoCtrl'
  })

  .state('payRoleDepositar', {
    url: '/depositar',
    templateUrl: 'templates/payRoleDepositar.html',
    controller: 'payRoleDepositarCtrl'
  })

  .state('payRoleAdicionarContatos', {
    url: '/adicionarContato',
    templateUrl: 'templates/payRoleAdicionarContatos.html',
    controller: 'payRoleAdicionarContatosCtrl'
  })

  .state('payRoleConfirmar', {
    url: '/confirmar',
    templateUrl: 'templates/payRoleConfirmar.html',
    controller: 'payRoleConfirmarCtrl'
  })

  .state('payRoleVisualizar', {
    url: '/visualizar',
    templateUrl: 'templates/payRoleVisualizar.html',
    controller: 'payRoleVisualizarCtrl'
  })

  .state('payRole', {
    url: '/inicio',
    templateUrl: 'templates/payRole.html',
    controller: 'payRoleCtrl'
  })

$urlRouterProvider.otherwise('/novo')


});