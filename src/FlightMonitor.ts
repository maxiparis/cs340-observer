import { FlightFeed } from "./FlightFeed";
import FlightPrinter from "./FlightPrinter";
import FlightDeltaCalculator from "./FlightDeltaCalculator";

main();

function main() {
  let feed = new FlightFeed();

  let printer = new FlightPrinter()
  let deltaCalculator = new FlightDeltaCalculator()

  feed.attach(printer)
  feed.attach(deltaCalculator)

  feed.start();
}
