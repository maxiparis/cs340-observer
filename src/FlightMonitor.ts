import { FlightFeed } from "./FlightFeed";
import FlightPrinter from "./FlightPrinter";

main();

function main() {
  let feed = new FlightFeed();

  let printer = new FlightPrinter()


  feed.attach(printer)


  feed.start();
}
