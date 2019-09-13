var wizardWidth = 70;
var proportionHeight = 1.337;
var constantGetWizardY = 0.33;

var getFireballSpeed = function (left) {
  return (left ? 5 : 2)
};

var getWizardHeight = function () {
  return proportionHeight * wizardWidth;
};

var getWizardX = function (width) {
  return width / 2;
};

var getWizardY = function (height) {
  return height * constantGetWizardY;
};
