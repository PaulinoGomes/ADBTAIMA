angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('tabsController.pLAY', {
    url: '/page1',
    views: {
      'tab1': {
        templateUrl: 'templates/pLAY.html',
        controller: 'pLAYCtrl'
      }
    }
  })

  .state('tabsController.lIVE', {
    url: '/page2',
    views: {
      'tab2': {
        templateUrl: 'templates/lIVE.html',
        controller: 'lIVECtrl'
      }
    }
  })

  .state('tabsController.sOBRE', {
    url: '/page3',
    views: {
      'tab3': {
        templateUrl: 'templates/sOBRE.html',
        controller: 'sOBRECtrl'
      }
    }
  })

   .state('tabsController.site', {
    url: '/page4',
    views: {
      'tab4': {
        templateUrl: 'templates/site.html',
        controller: 'siteCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

$urlRouterProvider.otherwise('/page1/page1')


});