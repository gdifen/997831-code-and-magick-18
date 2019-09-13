var wizardWidth = 70;
var PROPORTION_HEIGHT = 1.337;
var CONSTANT_GET_WIZARD_Y = 0.33;

var getFireballSpeed = function (left) {
  return left ? 5 : 2
};

var getWizardHeight = function () {
  return PROPORTION_HEIGHT * wizardWidth;
};

var getWizardX = function (width) {
  return width / 2;
};

var getWizardY = function (height) {
  return height * CONSTANT_GET_WIZARD_Y;
};
