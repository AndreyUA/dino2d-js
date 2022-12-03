import { Canvas } from "./canvas";
import { Pixel } from "./pixel";

export class Dino {
  renderDino() {
    const { canvas, context } = Canvas.getCanvasAndContext();
    const width = Pixel.width;
    const height = Pixel.height;

    console.log("width", width);
    console.log("height", height);

    const basicWidth = canvas.width / 10;
    const basicHeight = (canvas.height / 10) * 9;

    context.fillRect(basicWidth, basicHeight - 40, width, height);
    context.fillRect(basicWidth, basicHeight - 35, width, height);
    context.fillRect(basicWidth, basicHeight - 30, width, height);
    context.fillRect(basicWidth + 5, basicHeight - 30, width, height);
    context.fillRect(basicWidth, basicHeight - 25, width, height);
    context.fillRect(basicWidth + 5, basicHeight - 25, width, height);
    context.fillRect(basicWidth + 10, basicHeight - 25, width, height);
    context.fillRect(basicWidth, basicHeight - 20, width, height);
    context.fillRect(basicWidth + 5, basicHeight - 20, width, height);
    context.fillRect(basicWidth + 10, basicHeight - 20, width, height);
    context.fillRect(basicWidth + 15, basicHeight - 20, width, height);
    context.fillRect(basicWidth + 20, basicHeight - 20, width, height);
    context.fillRect(basicWidth + 25, basicHeight - 20, width, height);
    context.fillRect(basicWidth + 25, basicHeight - 25, width, height);
    context.fillRect(basicWidth + 30, basicHeight - 30, width, height);
    context.fillRect(basicWidth + 35, basicHeight - 35, width, height);
    context.fillRect(basicWidth + 40, basicHeight - 40, width, height);
    context.fillRect(basicWidth + 45, basicHeight - 45, width, height);
    context.fillRect(basicWidth + 45, basicHeight - 50, width, height);
    context.fillRect(basicWidth + 45, basicHeight - 55, width, height);
    context.fillRect(basicWidth + 45, basicHeight - 60, width, height);
    context.fillRect(basicWidth + 45, basicHeight - 65, width, height);
    context.fillRect(basicWidth + 50, basicHeight - 65, width, height);
    context.fillRect(basicWidth + 55, basicHeight - 65, width, height);
    context.fillRect(basicWidth + 55, basicHeight - 70, width, height);
    context.fillRect(basicWidth + 65, basicHeight - 70, width, height);

    // ! stopped here
    context.fillRect(basicWidth + 70, basicHeight - 95, width, height);

    context.fillRect(basicWidth + 70, basicHeight - 70, width, height);
    context.fillRect(basicWidth + 75, basicHeight - 70, width, height);
    context.fillRect(basicWidth + 80, basicHeight - 70, width, height);
    context.fillRect(basicWidth + 85, basicHeight - 70, width, height);
    context.fillRect(basicWidth + 85, basicHeight - 65, width, height);
    context.fillRect(basicWidth + 85, basicHeight - 60, width, height);
    context.fillRect(basicWidth + 90, basicHeight - 60, width, height);
    context.fillRect(basicWidth + 90, basicHeight - 55, width, height);
    context.fillRect(basicWidth + 90, basicHeight - 45, width, height);
    context.fillRect(basicWidth, basicHeight - 15, width, height);
    context.fillRect(basicWidth + 5, basicHeight - 15, width, height);
    context.fillRect(basicWidth + 10, basicHeight - 15, width, height);
    context.fillRect(basicWidth + 10, basicHeight - 10, width, height);
    context.fillRect(basicWidth + 15, basicHeight - 15, width, height);
    context.fillRect(basicWidth + 5, basicHeight - 10, width, height);
    context.fillRect(basicWidth + 10, basicHeight - 5, width, height);
    context.fillRect(basicWidth + 15, basicHeight, width, height);
    context.fillRect(basicWidth + 20, basicHeight + 5, width, height);
    context.fillRect(basicWidth + 20, basicHeight + 10, width, height);
    context.fillRect(basicWidth + 25, basicHeight + 5, width, height);
    context.fillRect(basicWidth + 20, basicHeight + 15, width, height);
    context.fillRect(basicWidth + 20, basicHeight + 20, width, height);
    context.fillRect(basicWidth + 20, basicHeight + 25, width, height);
    context.fillRect(basicWidth + 25, basicHeight + 25, width, height);
  }
}
