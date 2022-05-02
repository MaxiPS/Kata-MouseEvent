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

  it("correctly detect a single click", () => {
    mouse.pressLeftButton(0);
    mouse.releaseLeftButton(0);

    expect(mockListener.lastEvent).toBe(EventType.Click);
  });

  it("correctly detect a double click", () => {
    mouse.pressLeftButton(0);
    mouse.releaseLeftButton(0);
    mouse.pressLeftButton(0);
    mouse.releaseLeftButton(0);

    expect(mockListener.lastEvent).toBe(EventType.DoubleClick);
  });
});
