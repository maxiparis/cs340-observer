import {Observer} from "./Observer";
import { Flight } from "./entity/Flight";

export default class FlightDeltaCalculator implements Observer {
    previousFlight: Flight | null = null;

    update(flight: Flight | null): void {
      //calculate deltas
      if (this.previousFlight) {
        console.log(`📐FlightDeltaCalculator: Δlongitude: ${this.previousFlight.longitude-flight.longitude}, Δlatitude: ${this.previousFlight.latitude-flight.latitude}, Δvelocity: ${this.previousFlight.velocity-flight.velocity}, Δbaro_altitude: ${this.previousFlight.baro_altitude-flight.baro_altitude}`);
      } else {
        console.log("📐FlightDeltaCalculator: no changes since previous flight was null")
      }

      this.previousFlight = flight;
    }

}