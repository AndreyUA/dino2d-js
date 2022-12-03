import { Canvas } from "./canvas";

export class Pixel {
  static #width = Canvas.getCanvasAndContext().canvas.width / 80;
  static #height = Canvas.getCanvasAndContext().canvas.height / 72;

  static get width() {
    return Pixel.#width;
  }

  static get height() {
    return Pixel.#height;
  }
}
