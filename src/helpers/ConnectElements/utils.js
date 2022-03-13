// helper functions, it turned out chrome doesn't support Math.sgn()
export const signum = (x) => (x < 0 ? -1 : 1);
export const absolute = (x) => (x < 0 ? -x : x);

export const drawPath = (svg, path, startX, startY, endX, endY) => {
  // get the path's stroke width (if one wanted to be  really precize, one could use half the stroke size)

  const stroke = parseFloat(path.getAttribute('stroke-width'));
  // check if the svg is big enough to draw the path, if not, set heigh/width
  if (svg.getAttribute('height') < endY) svg.setAttribute('height', endY);
  if (svg.getAttribute('width') < startX + stroke) svg.setAttribute('width', startX + stroke);
  if (svg.getAttribute('width') < endX + stroke) svg.setAttribute('width', endX + stroke);

  // draw the path
  path.setAttribute('d', `M${startX} ${startY} L${endX} ${endY}`);
};

export const connectElements = (container, svg, path, startElem, endElem) => {
  // if first element is lower than the second, swap!
  if (startElem.getBoundingClientRect().top > endElem.getBoundingClientRect().top) {
    const temp = startElem;
    startElem = endElem;
    endElem = temp;
  }

  // get (top, left) corner coordinates of the svg container
  const svgTop = container.getBoundingClientRect().top;
  const svgLeft = container.getBoundingClientRect().left;

  // get (top, left) coordinates for the two elements
  const startCoord = startElem.getBoundingClientRect();
  const endCoord = endElem.getBoundingClientRect();

  // calculate path's start (x,y)  coords
  // we want the x coordinate to visually result in the element's mid point
  const startX = startCoord.left + 0.5 * startCoord.width - svgLeft; // x = left offset + 0.5*width - svg's left offset
  const startY = startCoord.top + 0.5 * startCoord.height - svgTop; // y = top offset + height - svg's top offset

  // calculate path's end (x,y) coords
  const endX = endCoord.left + 0.5 * endCoord.width - svgLeft;

  const endY = endCoord.top + 0.5 * startCoord.height - svgTop;

  // call function for drawing the path
  drawPath(svg, path, startX, startY, endX, endY);
};
