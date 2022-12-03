import { Logger } from "./logger";
import { Canvas } from "./canvas";

// Visual objects
import { Dino } from "./dino";

export class Render {
  start() {
    Logger.print("game started");

    this.#render();
  }

  #clear() {
    const { canvas, context } = Canvas.getCanvasAndContext();
    context.clearRect(0, 0, canvas.width, canvas.height);
  }

  #render() {
    const dino = new Dino();

    dino.renderDino();
  }
}
