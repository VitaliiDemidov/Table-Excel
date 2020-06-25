import { ExcelComponent } from '@core/ExcelComponent';
import { createTabale } from './table-template';
import { resizeHandler } from './table-size';
import { shouldResize } from './table-functions';

export class Table extends ExcelComponent {
  static className = 'excel__table';
  constructor($root) {
    super($root, {
      listeners: ['mousedown'],
    });
  }
  onMousedown(event) {
    if (shouldResize(event)) {
      resizeHandler(this.$root, event);
    }
  }

  toHTML() {
    return createTabale();
  }
}
