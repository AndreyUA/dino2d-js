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

  #activateListeners(visualObjectInstance) {
    const keyboardEvent = (event) => {
      if (event.key !== "ArrowUp") {
        return;
      }

      if (visualObjectInstance.xCoordinate < -200) {
        return;
      }

      const upInterval = setInterval(() => {
        if (visualObjectInstance.xCoordinate < -200) {
          clearInterval(upInterval);

          const bottomInterval = setInterval(() => {
            if (visualObjectInstance.xCoordinate > 0) {
              visualObjectInstance.xCoordinate = 0;
              clearInterval(bottomInterval);
            }

            visualObjectInstance.xCoordinate += 4;
            this.#clear();
            visualObjectInstance.renderDino();
          });
        }

        visualObjectInstance.xCoordinate -= 4;
        this.#clear();
        visualObjectInstance.renderDino();
      });
    };

    globalThis.document.addEventListener("keydown", keyboardEvent);
  }

  #render() {
    const dino = new Dino();

    dino.renderDino();

    this.#activateListeners(dino);
  }
}
