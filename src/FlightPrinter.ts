import {Observer} from "./Observer";
import { Flight } from "./entity/Flight";

export default class FlightPrinter implements Observer {
    update(flight: Flight): void {
        console.log(flight)
    }
}