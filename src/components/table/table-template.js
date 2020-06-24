const CODES = {
  a: 65,
  z: 90,
};

function toCell() {
  return `
  <div class="cell" contenteditable>
  </div>`;
}
function toChart(_, index) {
  return String.fromCharCode(CODES.a + index);
}

function toColumn(el) {
  return `
  <div class="column">
  ${el}
  </div>`;
}
function createRow(index, content) {
  return `<div class='row'>
  <div class='row-info'>${index ? index : ''}</div>
  <div class='row-data'>${content}</div>
  </div>`;
}

export function createTabale(rowsCount = 15) {
  const colsCount = CODES.z - CODES.a + 1;
  const rows = [];

  const cols = new Array(colsCount)
    .fill('')
    .map(toChart)
    .map(toColumn)
    .join('');

  rows.push(createRow(null, cols));
  for (let i = 0; i < rowsCount; i++) {
    const cells = new Array(colsCount).fill('').map(toCell).join('');
    rows.push(createRow(i + 1, cells));
  }
  console.log(rows);

  return rows.join('');
}
