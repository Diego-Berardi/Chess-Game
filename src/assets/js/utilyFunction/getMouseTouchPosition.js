export function getMouseTouchPosition(e) {
  const targetPositions = {
    x: e.x,
    y: e.y,
  };

  if (e.targetTouches) {
    targetPositions.x = e.changedTouches[0].pageX;
    targetPositions.y = e.changedTouches[0].pageY;
  }
  return targetPositions;
}
