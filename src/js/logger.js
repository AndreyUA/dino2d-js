export class Logger {
  static print(string) {
    const currentDate = new Date();

    console.log(`[${currentDate}] --> ${string}`);
  }
}
