import { Coordinates } from "./coordinates";
import { EventType } from "./event-type";
import { Listener } from "./listener";

export class Mouse {
  listeners;
  timeWindowInMillisecondsForDoubleClick;

  constructor() {
    this.listeners = new Array<Listener>();
    this.timeWindowInMillisecondsForDoubleClick = 500;
  }

  pressLeftButton = (currentTimeInMilliseconds: number) => {};

  releaseLeftButton = (currentTimeInMilliseconds: number) => {
    /*... implement this method ...*/
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
