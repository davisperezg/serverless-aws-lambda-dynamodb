import { APIGatewayProxyHandler } from "aws-lambda";
import { listarPersonas, obtenerPersona } from "./api";
import { ArrayconvertirES, ObjConvertES } from "../utils/swapi";

export const findAllPersonas: APIGatewayProxyHandler = async (event) => {
  try {
    const res = await listarPersonas();
    return {
      statusCode: 200,
      body: JSON.stringify(ArrayconvertirES(res)),
    };
  } catch (e) {
    return {
      statusCode: 500,
      body: JSON.stringify(e.message),
    };
  }
};

export const getPersona: APIGatewayProxyHandler = async (event) => {
  const { id } = event.pathParameters as { id: string };

  try {
    const res = await obtenerPersona(id);

    return {
      statusCode: 200,
      body: JSON.stringify(ObjConvertES(res)),
    };
  } catch (e) {
    if (e.response.status === 404) {
      return {
        statusCode: 404,
        body: JSON.stringify({
          message: "No se encontró una persona de starwars.",
        }),
      };
    }

    return {
      statusCode: 500,
      body: JSON.stringify(e.message),
    };
  }
};
