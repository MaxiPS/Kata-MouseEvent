
// system.currentMill()

// (ClickCurrentMillis - AnotherClickCurrentMillis - AnotherClickCurrentMillis < 500) [TripleClick]
// (ClickCurrentMillis -  < 500) [TripleClick]
//if (ClickCurrentMillis - AnotherClickCurrentMillis < 500) [DoubleClick(500milis),Click(800)]




export class Mouse {
  listeners;
  timeWindowInMillisecondsForDoubleClick;

  constructor() {
    this.listeners = new Array();
    this.timeWindowInMillisecondsForDoubleClick = 500;
  }

  pressLeftButton = (currentTimeInMilliseconds: number) => {
    
  };

  releaseLeftButton = (currentTimeInMilliseconds: number) => {
    /*... implement this method ...*/
  };

  move = (from, to, currentTimeInMilliseconds) => {
    /*... implement this method ...*/
  };

  subscribe = (listener) => {
    this.listeners.push(listener);
  };

  notifySubscribers = (eventType) => {
    this.listeners.forEach((listener) => listener.handleMouseEvent(eventType));
  };
}
