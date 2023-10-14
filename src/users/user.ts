import { APIGatewayProxyHandler } from "aws-lambda";
import { randomUUID } from "crypto";
import { findAll, save } from "./services/user.services";
import { UserEntity } from "./entity/user.entity";

export const createUser: APIGatewayProxyHandler = async (event) => {
  try {
    const user: UserEntity = JSON.parse(event.body as string);
    const newUser: UserEntity = {
      ...user,
      fechaCreada: new Date().toISOString(),
      fechaActualizada: new Date().toISOString(),
      id: randomUUID(),
    };

    await save(newUser);

    return {
      statusCode: 200,
      body: JSON.stringify(newUser),
    };
  } catch (e) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: e.message }),
    };
  }
};

export const getUsers: APIGatewayProxyHandler = async (event) => {
  try {
    const res = await findAll();

    return {
      statusCode: 200,
      body: JSON.stringify(res.Items),
    };
  } catch (e) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: e.message }),
    };
  }
};
