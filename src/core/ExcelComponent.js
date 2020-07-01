import { DomListener } from '@core/DomListener';

export class ExcelComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners);
    this.name = options.name || '';
    this.emitter = options.emitter;
    this.unsubscribes = [];

    this.prepare();
  }
  // configurate component before init
  prepare() {}
  // returns template of component
  toHTML() {
    return '';
  }
  // notify listener about event
  $emit(event, ...args) {
    this.emitter.emit(event, ...args);
  }
  // subscribe to the event
  $on(event, fn) {
    const unsub = this.emitter.subscribe(event, fn);
    this.unsubscribes.push(unsub);
  }
  // initialize component nad add DOM listiner
  init() {
    this.initDOMListeners();
  }
  destroy() {
    this.removeDOMListeners();
    this.unsubscribes.forEach((unsub) => unsub());
  }
}
