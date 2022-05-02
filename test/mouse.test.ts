import { Coordinates } from "../src/coordinates";
import { EventType } from "../src/event-type";
import { Listener } from "../src/listener";
import { Mouse } from "../src/mouse";

class MockListener implements Listener {
  eventList: EventType[];

  constructor() {
    this.eventList = [];
  }

  handleMouseEvent(eventType: EventType) {
    this.eventList.push(eventType);
  }
}

describe("Mouse Should", () => {
  let mouse: Mouse;
  let mockListener: MockListener;

  const sendInstantClick = (time: number) => {
    mouse.pressLeftButton(time);
    mouse.releaseLeftButton(time);
  };

  beforeEach(() => {
    mouse = new Mouse();
    mockListener = new MockListener();
    mouse.subscribe(mockListener);
  });

  it("correctly detect a single click", () => {
    sendInstantClick(0);

    expect(mockListener.eventList.pop()).toStrictEqual(EventType.Click);
  });

  it("correctly detect a double click", () => {
    sendInstantClick(0);
    sendInstantClick(0);

    expect(mockListener.eventList.pop()).toStrictEqual(EventType.DoubleClick);
  });

  it("correctly detects two different clicks", () => {
    sendInstantClick(0);
    sendInstantClick(500);

    expect(mockListener.eventList).toStrictEqual([EventType.Click, EventType.Click]);
  });
});
