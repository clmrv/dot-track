import { Category } from "../common/model";
import { TableServiceClient } from "@azure/data-tables";

const CATEGORIES_TABLE_NAME = "categories";

export const addCategory = async (category: Category) => {
  await createTableIfDoesNotExist(CATEGORIES_TABLE_NAME);
};

const createTableIfDoesNotExist = async (name: string) => {
  const client = TableServiceClient.fromConnectionString(
    process.env.TABLE_STORAGE_CONNECTION_STRING,
    {
      allowInsecureConnection: process.env.Environment === "Development",
    }
  );
  const iterator = client.listTables();

  for await (const table of iterator) {
    if (table.name === name) {
      return;
    }
  }

  return await client.createTable(name);
};
