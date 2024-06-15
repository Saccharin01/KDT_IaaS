const event = new Event("build");

// Listen for the event.
elem.addEventListener("build", (e) => {/* 실행문 */}, false,);

// Dispatch the event.
elem.dispatchEvent(event);