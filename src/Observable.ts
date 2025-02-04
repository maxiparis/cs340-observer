import {Flight} from "./entity/Flight";
import {Observer} from "./Observer";

export class Observable {
  observers: Observer[] = []

  constructor() {
    this.observers = [];
  }

  //TODO: call this somewhere
  attach(observer: Observer): void {
    this.observers.push(observer);
  }

  notify(flight: Flight): void {
    this.observers.forEach(observer => {
      observer.update(flight);
    })
  }

}