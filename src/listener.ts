import { EventType } from "./event-type";

export interface Listener {
  handleMouseEvent(eventType: EventType);
}
