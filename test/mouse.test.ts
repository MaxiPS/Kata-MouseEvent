import { Coordinates } from "../src/coordinates";
import { EventType } from "../src/event-type";
import { Listener } from "../src/listener";
import { Mouse } from "../src/mouse";

class MockListener implements Listener {
  lastEvent: EventType;
  handleMouseEvent(eventType: EventType) {
    this.lastEvent = eventType;
  }
}

describe("Mouse Should", () => {
  let mouse: Mouse;
  let mockListener: MockListener;

  beforeEach(() => {
    mouse = new Mouse();
    mockListener = new MockListener();
    mouse.subscribe(mockListener);
  });

  it("detect click when mouse is clicked", () => {
    mouse.pressLeftButton(200);
    mouse.releaseLeftButton(400);
    expect(mockListener.lastEvent).toBe(EventType.Click);
  });

});
