import { APIGatewayProxyHandler } from "aws-lambda";
import { listarPersonas, obtenerPersona } from "./api";
import { ArrayconvertirES, ObjConvertES } from "../utils/swapi";

export const findAllPersonas: APIGatewayProxyHandler = async (event) => {
  const res = await listarPersonas();
  return {
    statusCode: 200,
    body: JSON.stringify(ArrayconvertirES(res)),
  };
};

export const getPersona: APIGatewayProxyHandler = async (event) => {
  const { id } = event.pathParameters as { id: string };
  const res = await obtenerPersona(id);
  return {
    statusCode: 200,
    body: JSON.stringify(ObjConvertES(res)),
  };
};
