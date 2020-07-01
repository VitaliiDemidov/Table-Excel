const CODES = {
  a: 65,
  z: 90,
};

// function toCell(row, col) {
//   return `
//   <div class="cell" contenteditable data-col="${col}>
//   </div>`;
// }
function toCell(row) {
  return function (_, col) {
    return `
<div class="cell" contenteditable data-col="${col}"data-id="${row}:${col}"
data-type="cell">
</div>`;
  };
}
function toChart(_, index) {
  return String.fromCharCode(CODES.a + index);
}

function toColumn(el, index) {
  return `
  <div class="column" data-type='resizable'data-col="${index}" >${el}
<div class="col-resize" data-resize='column'></div></div>`;
}
function createRow(index, content) {
  const resizer = index
    ? `<div class='row-resize' data-resize='row'></div>`
    : '';
  return `<div class='row' data-type='resizable'>
  <div class='row-info'>${index ? index : ''}${resizer}
  </div>
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
  for (let row = 0; row < rowsCount; row++) {
    const cells = new Array(colsCount).fill('').map(toCell(row)).join('');
    rows.push(createRow(row + 1, cells));
  }

  return rows.join('');
}
