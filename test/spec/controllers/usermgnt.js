'use strict';

describe('Controller: UsermgntCtrl', function () {

  // load the controller's module
  beforeEach(module('suriApp'));

  var UsermgntCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UsermgntCtrl = $controller('UsermgntCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(UsermgntCtrl.awesomeThings.length).toBe(3);
  });
});
