import { Coordinates } from "./coordinates";
import { EventType } from "./event-type";
import { Listener } from "./listener";

export class Mouse {
  listeners: Listener[];
  timeWindowInMillisecondsForDoubleClick: number;
  clicked: boolean;

  constructor() {
    this.listeners = new Array<Listener>();
    this.timeWindowInMillisecondsForDoubleClick = 500;
    this.clicked = false;
  }

  pressLeftButton = (currentTimeInMilliseconds: number) => {
    
  };

  releaseLeftButton = (currentTimeInMilliseconds: number) => {
    if (!this.clicked) {
      this.notifySubscribers(EventType.Click);
      this.clicked = true;
    } else {
      this.notifySubscribers(EventType.DoubleClick);
    }
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
