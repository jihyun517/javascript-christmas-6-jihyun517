import EventController from "./controller/EventController.js"

class App {
  constructor(){
    this.eventController = new EventController();
  }
  async run() {
    await this.eventController.eventStart();
  }
}

export default App;
