var fireballSize = 22;
var wizardSpeed = 3;
var wizardWidth = 70;
var getFireballSpeed = function (left) {
  if (left) {
    return 5;
  } else {
    return 2;
  }
};
var getWizardHeight = function () {
  return 1.337 * wizardWidth;
};
var getWizardX = function (width) {
  return width / 2 - 50;
};
var getWizardY = function (height) {
  return height * 0.33;
};
