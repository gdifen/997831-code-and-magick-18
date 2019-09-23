var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var GAP_TEXT = 20;
var GAP_TEXT_CENTER = 120 + CLOUD_X;
var DISTANCE_COLUMN = 50;
var NAME_HEIGHT = 250;
var WIDTH_COLUMN = 40;
var HEIGHT_COLUMN = 150;
var BLACK_COLOR = '#000';
var WHITE_COLOR = '#fff';
var SHADOW_WINDOW = 'rgba(0, 0, 0, 0.7)';
var FONT_MONO = '16px PT Mono';
var RED_COLOR = 'rgba(255, 0, 0, 1)';
var TEXT_LINE = 'hanging';
var MAGRIN_IN_DIAGRAM = DISTANCE_COLUMN + GAP_TEXT + WIDTH_COLUMN;
var PADDING_IN_DIAGRAM = CLOUD_X + GAP_TEXT;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var createText = function (ctx, text, x, y, color, font, baseLine) {
  ctx.fillStyle = color;
  ctx.font = font;
  ctx.textBaseline = baseLine;
  ctx.fillText(text, x, y);
};

var createColor = function (ctx, color) {
  ctx.fillStyle = color;
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

  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, SHADOW_WINDOW);
  renderCloud(ctx, CLOUD_X, CLOUD_Y, WHITE_COLOR);

  createText(ctx, 'Ура вы победили!', GAP_TEXT_CENTER, CLOUD_Y + GAP_TEXT, BLACK_COLOR, FONT_MONO);
  createText(ctx, 'Список результатов:', GAP_TEXT_CENTER - 13, CLOUD_Y + (GAP_TEXT * 2), BLACK_COLOR, FONT_MONO);

  var maxTime = getMaxElement(times);

  times.forEach(function (time, i) {

    var positionColumn = NAME_HEIGHT - (HEIGHT_COLUMN * time / maxTime);

    createText(ctx, names[i], PADDING_IN_DIAGRAM + (MAGRIN_IN_DIAGRAM * i), NAME_HEIGHT + GAP, BLACK_COLOR, FONT_MONO, TEXT_LINE);
    createText(ctx, Math.round(time), PADDING_IN_DIAGRAM + (MAGRIN_IN_DIAGRAM * i), positionColumn - GAP_TEXT, BLACK_COLOR, FONT_MONO, TEXT_LINE);

    names[i] === 'Вы' ? createColor(ctx, RED_COLOR) : createColor(ctx, 'hsl( 250 ,' + (70 * Math.random()) + '%, 40%)');

    ctx.fillRect(PADDING_IN_DIAGRAM + (MAGRIN_IN_DIAGRAM * i), positionColumn, WIDTH_COLUMN, HEIGHT_COLUMN * time / maxTime);
  });
};
