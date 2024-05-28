class EventEmitter {
    constructor() {
      this.events = {};
    }
  
    // Register an event listener
    on(event, listener) {
      if (!this.events[event]) {
        this.events[event] = [];
      }
      this.events[event].push(listener);
    }
  
    // Remove an event listener
    off(event, listenerToRemove) {
      if (!this.events[event]) return;
  
      this.events[event] = this.events[event].filter(listener => listener !== listenerToRemove);
    }
  
    // Emit an event
    emit(event, data) {
      if (!this.events[event]) return;
  
      this.events[event].forEach(listener => listener(data));
    }
  }
  
  const eventEmitter = new EventEmitter();
  
  export default eventEmitter;
  