var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var GAP_TEXT = 20;
var GAP_TEXT_CENTER = 120;
var DISTANCE_COLUMN = 50;
var NAME_HEIGHT = 250;
var WIDTH_COLUMN = 40;
var HEIGHT_COLUMN = 150;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP_TEXT_CENTER, CLOUD_Y + GAP_TEXT);
  ctx.fillText('Список результатов:', CLOUD_X + GAP_TEXT_CENTER - 13, CLOUD_Y + (GAP_TEXT * 2));

  var maxTime = getMaxElement(times);

  times.forEach(function (time, i) {

    var positionColumn = NAME_HEIGHT - (HEIGHT_COLUMN * time / maxTime);

    ctx.fillStyle = '#000';
    ctx.textBaseline = 'hanging';
    ctx.fillText(names[i], CLOUD_X + GAP_TEXT + ((DISTANCE_COLUMN + GAP_TEXT) * i), NAME_HEIGHT + GAP);
    ctx.fillText(Math.round(time), CLOUD_X + GAP_TEXT + ((DISTANCE_COLUMN + GAP_TEXT) * i), positionColumn - GAP_TEXT);

    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'hsl( 250 ,' + (70 * Math.random()) + '%, 40%)';
    }

    ctx.fillRect(CLOUD_X + GAP_TEXT + ((DISTANCE_COLUMN + GAP_TEXT) * i), positionColumn, WIDTH_COLUMN, HEIGHT_COLUMN * time / maxTime);
  });
};
