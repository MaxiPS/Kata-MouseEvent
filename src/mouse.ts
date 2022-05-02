import { Coordinates } from "./coordinates";
import { EventType } from "./event-type";
import { Listener } from "./listener";

export class Mouse {
  listeners: Listener[];
  timeWindowInMillisecondsForDoubleClick: number;
  clicked: boolean;
  lastTimePressed: number;

  constructor() {
    this.listeners = new Array<Listener>();
    this.timeWindowInMillisecondsForDoubleClick = 500;
    this.clicked = false;
  }

  pressLeftButton = (currentTimeInMilliseconds: number) => {
    if (!this.clicked) {
      this.lastTimePressed = currentTimeInMilliseconds;
    }
  };

  releaseLeftButton = (currentTimeInMilliseconds: number) => {
    if (
      this.clicked &&
      currentTimeInMilliseconds - this.lastTimePressed <
        this.timeWindowInMillisecondsForDoubleClick
    ) {
      this.notifySubscribers(EventType.DoubleClick);
      this.clicked = false;
    } else {
      this.notifySubscribers(EventType.Click);
      this.clicked = true;
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
