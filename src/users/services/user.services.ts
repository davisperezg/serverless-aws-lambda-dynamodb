import { PutCommand, ScanCommand } from "@aws-sdk/lib-dynamodb";
import { ddbDocClient } from "../../utils/dynamo";
import { UserEntity } from "../entity/user.entity";

export const save = async (obj: UserEntity) => {
  return await ddbDocClient.send(
    new PutCommand({
      TableName: "users",
      Item: obj,
    })
  );
};

export const findAll = async () => {
  return await ddbDocClient.send(
    new ScanCommand({
      TableName: "users",
    })
  );
};
