import { Sequelize } from "sequelize";

const dbUser = process.env.DB_USER ?? "developer";
const dbPassword = process.env.DB_PASSWORD ?? "dev_only";
const dbName = process.env.DB_NAME ?? "test";
const dbHost = process.env.DB_HOST ?? "localhost";

const databaseConnector = new Sequelize(dbName, dbUser, dbPassword, {
  dialect: "postgres",
  host: dbHost,
});

export { databaseConnector };
