import { Persona, Personas } from "../swapi/interface/persona.interface";

export const ArrayconvertirES = (data: Personas) => {
  return data.results.map((persona) => {
    return {
      nombre: persona.name,
      altura: persona.height,
      masa: persona.mass,
      colorPelo: persona.hair_color,
      colorPiel: persona.skin_color,
      colorOjos: persona.eye_color,
      anioNacimiento: persona.birth_year,
      genero: persona.gender,
      mundoNatal: persona.homeworld,
      peliculas: persona.films,
      especies: persona.species,
      vehiculos: persona.vehicles,
      navesEstelares: persona.starships,
      fechaCreada: persona.created,
      fechaEditada: persona.edited,
      url: persona.url,
    };
  });
};

export const ObjConvertES = (persona: Persona) => {
  return {
    nombre: persona.name,
    altura: persona.height,
    masa: persona.mass,
    colorPelo: persona.hair_color,
    colorPiel: persona.skin_color,
    colorOjos: persona.eye_color,
    anioNacimiento: persona.birth_year,
    genero: persona.gender,
    mundoNatal: persona.homeworld,
    peliculas: persona.films,
    especies: persona.species,
    vehiculos: persona.vehicles,
    navesEstelares: persona.starships,
    fechaCreada: persona.created,
    fechaEditada: persona.edited,
    url: persona.url,
  };
};
