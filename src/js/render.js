import { Logger } from "./logger";
import { Canvas } from "./canvas";

// Visual objects
import { Dino } from "./dino";

export class Render {
  #dino = new Dino();

  start() {
    Logger.print("game started");

    this.#render();
  }

  #clear() {
    const { canvas, context } = Canvas.getCanvasAndContext();
    context.clearRect(0, 0, canvas.width, canvas.height);
  }

  #rerender() {
    this.#clear();
    this.#dino.renderDino();
  }

  #activateListeners() {
    const keyboardEvent = (event) => {
      if (event.key !== "ArrowUp") {
        return;
      }

      if (this.#dino.xCoordinate < -200) {
        return;
      }

      const upInterval = setInterval(() => {
        if (this.#dino.xCoordinate < -200) {
          clearInterval(upInterval);

          const bottomInterval = setInterval(() => {
            if (this.#dino.xCoordinate > 0) {
              this.#dino.xCoordinate = 0;
              clearInterval(bottomInterval);
            }

            this.#dino.xCoordinate += 4;
            this.#rerender();
          });
        }

        this.#dino.xCoordinate -= 4;
        this.#rerender();
      });
    };

    globalThis.document.addEventListener("keydown", keyboardEvent);
  }

  #render() {
    this.#dino.renderDino();

    this.#activateListeners(this.#dino);
  }
}
