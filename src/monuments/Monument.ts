import { randomUUID } from "node:crypto";
import { type MonumentLocation, type MonumentStructure } from "./types.js";

export class Monument implements MonumentStructure {
  id: string;
  city: string;
  country: string;

  constructor(
    public name: string,
    public description: string,
    public imageUrl: string,
    { city, country }: MonumentLocation,
  ) {
    this.id = randomUUID();
    this.city = city;
    this.country = country;
  }
}

export default Monument;
