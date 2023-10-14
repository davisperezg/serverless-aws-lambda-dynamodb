import axios from "axios";
import { Persona, Personas } from "../interface/persona.interface";

//Starwars
const API_BASE = "https://swapi.py4e.com/api";

export const listarPersonas = async () => {
  const { data } = await axios.get<Personas>(`${API_BASE}/people`);
  return data;
};

export const obtenerPersona = async (id: string) => {
  const { data } = await axios.get<Persona>(`${API_BASE}/people/${id}`);
  return data;
};
