import {Observer} from "./Observer";
import { Flight } from "./entity/Flight";

export default class FlightPrinter implements Observer {
    update(flight: Flight | null): void {
        if (flight) {
            console.log(`✈️Flight update: flight’s transponder id (icao24): ${flight.icao24}, call sign: ${flight.callsign}, country of origin: ${flight.origin_country}, longitude: ${flight.longitude}, latitude: ${flight.latitude}, velocity: ${flight.velocity}, altitude: ${flight.baro_altitude}.`)
        } else {
            console.log(`✈️Flight update: flight not found (null)`)
        }
    }
}