import { Coordinates } from "./coordinates";
import { EventType } from "./event-type";
import { Listener } from "./listener";

/*
press 0 0
release 100 click
press 400
release 600 click
press 700
release 700 click X
*/

export class Mouse {
  listeners: Listener[];
  timeWindowInMilliseconds: number;
  clicksInCurrentWindow: number;
  lastPressesTimes: number[];

  constructor() {
    this.listeners = new Array<Listener>();
    this.timeWindowInMilliseconds = 500;
    this.clicksInCurrentWindow = 0;
    this.lastPressesTimes = [];
  }

  pressLeftButton = (currentTimeInMilliseconds: number) => {
    this.lastPressesTimes.push(currentTimeInMilliseconds);
  };

  releaseLeftButton = (currentTimeInMilliseconds: number) => {
    const firstPressInWindow = this.lastPressesTimes[0];
    if (currentTimeInMilliseconds - firstPressInWindow >=
      this.timeWindowInMilliseconds
    ) {
      this.clicksInCurrentWindow = 0;
      this.lastPressesTimes = this.lastPressesTimes.slice(-1);
    }

    let currentEventType: EventType;
    switch (this.clicksInCurrentWindow) {
      case 0:
        currentEventType = EventType.Click;
        this.clicksInCurrentWindow++;
        break;
      case 1:
        currentEventType = EventType.DoubleClick;
        this.clicksInCurrentWindow++;
        break;
      case 2:
        currentEventType = EventType.TripleClick;
        this.clicksInCurrentWindow = 0;
        break;
      default:
        break;
    }
    this.notifySubscribers(currentEventType);
  };

  move = (
    from: Coordinates,
    to: Coordinates,
    currentTimeInMilliseconds: number
  ) => {
    /*... implement this method ...*/
  };

  subscribe = (listener: Listener) => {
    this.listeners.push(listener);
  };

  notifySubscribers = (eventType: EventType) => {
    this.listeners.forEach((listener) => listener.handleMouseEvent(eventType));
  };
}
