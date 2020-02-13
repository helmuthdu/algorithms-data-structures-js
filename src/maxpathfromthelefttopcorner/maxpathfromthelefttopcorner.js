// --- Directions
// You are given a matrix A consisting of N rows and M columns, where each cell contains
// a digit. Your task is to find a continuous sequence of neighbouring cells, starting in
// the top-left corner and ending in the bottom-right corner (going only down and right),
// that creates the biggest possible integer by concatenation of digits on the path.
// By neighbouring cells we mean cells that have exactly one common side.
// --- Examples
// maxPathFromTheLeftTopCorner([[9, 9, 7], [9, 7, 2], [6, 9, 5], [9, 1, 2]]) === "997952"

const getArrayValue = (arr, row, col) => (arr && arr[row] && arr[row][col]) || -1;

const maxPathFromTheLeftTopCorner = (arr, row = 0, col = 0, out = String(arr[0][0])) => {
  const rightValue = getArrayValue(arr, row, col + 1);
  const downValue = getArrayValue(arr, row + 1, col);
  const right = rightValue === -1 ? out : maxPathFromTheLeftTopCorner(arr, row, col + 1, out + rightValue);
  const down = downValue === -1 ? out : maxPathFromTheLeftTopCorner(arr, row + 1, col, out + downValue);
  return Number(right) > Number(down) ? right : down;
};

module.exports = maxPathFromTheLeftTopCorner;
