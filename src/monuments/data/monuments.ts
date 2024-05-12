import Monument from "../Monument.js";

const tajMahal = new Monument(
  "Taj Mahal",
  "Mausoleo de mármol blanco construido en el siglo XVII.",
  "https://es.wikipedia.org/wiki/Taj_Mahal#/media/Archivo:Taj_Mahal_(Edited).jpeg",
  { city: "Agra", country: "India" },
);

const chichenItza = new Monument(
  "Chichen Itzá",
  "Antigua ciudad maya situada en la península de Yucatán, conocida por su imponente pirámide.",
  "https://www.mexicodesconocido.com.mx/wp-content/uploads/2010/05/chichen-itza-arquitectura-que-visitar.png",
  { city: "Chichén Itzá", country: "Mexico" },
);

const laAlhambra = new Monument(
  "La Alhambra",
  "Palacio y fortaleza. Construido durante la dominación musulmana de la península ibérica, es un ejemplo impresionante de arquitectura islámica.",
  "https://es.wikipedia.org/wiki/Alhambra#/media/Archivo:Dawn_Charles_V_Palace_Alhambra_Granada_Andalusia_Spain.jpg",
  { city: "Granada", country: "España" },
);

const laCasaBatllo = new Monument(
  "La Casa Batlló",
  "Es un edificio modernista, diseñado por el arquitecto Antoni Gaudí. Es famoso por su fachada ondulada, que parece haber sido esculpida por olas del mar, y sus colores vibrantes.",
  "https://es.wikipedia.org/wiki/Casa_Batll%C3%B3#/media/Archivo:Gaud%C3%AD_-_Casa_Batll%C3%B3.jpg",
  { city: "Barcelona", country: "España" },
);

const knottedGun = new Monument(
  "knotted Gun",
  "La Knotted Gun es una escultura de bronce creada por el artista sueco Carl Fredrik Reuterswärd. La escultura muestra un revólver con el cañón atado en un nudo, simbolizando el deseo de paz y desarme.",
  "https://normandygiteholidays.com/wp-content/uploads/2019/12/IMG_9453-scaled-1-2048x1366.jpg",
  { city: "Copenhague", country: "Dinamarca" },
);

export const monuments: Monument[] = [
  tajMahal,
  chichenItza,
  laAlhambra,
  laCasaBatllo,
  knottedGun,
];
