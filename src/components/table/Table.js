import { ExcelComponent } from '@core/ExcelComponent';
import { createTabale } from './table-template';

export class Table extends ExcelComponent {
  static className = 'excel__table';

  toHTML() {
    return createTabale();
  }
}
