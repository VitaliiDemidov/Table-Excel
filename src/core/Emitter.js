export class Emitter {
  constructor() {
    this.listeners = {};
  }
  // dispatch,triger
  // notify listeners if exist
  emit(event, ...args) {
    if (!Array.isArray(this.listeners[event])) {
      return false;
    }
    this.listeners[event].forEach((listener) => {
      listener(...args);
    });
    return true;
  }
  // on,listen
  // add new listener
  subscribe(event, fn) {
    this.listeners[event] = this.listeners[event] || [];
    this.listeners[event].push(fn);
    return () => {
      this.listeners[event] = this.listeners[event].filter(
        (listener) => listener !== fn
      );
    };
  }
}

// const emitter = new Emitter();
// emitter.subscribe('vitalii', (data) => console.log(data));
// emitter.emit('vitalii', 42);
