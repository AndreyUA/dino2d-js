export class Canvas {
  static getCanvasAndContext() {
    const canvas = globalThis.document.getElementById("canvas");
    const context = canvas.getContext("2d");

    return { canvas, context };
  }
}
