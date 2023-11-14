import { Model, DataTypes } from "sequelize";
import { UserModel as UserInterface } from "common";
import { databaseConnector } from "./sequelizeDatabaseConnector";

class UserModel extends Model<UserInterface, Omit<UserInterface, "id">> {
  declare id: string;
  declare firstName: string;
  declare lastName: string;
}

UserModel.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    firstName: {
      type: DataTypes.STRING,
    },
    lastName: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: "Users",
    sequelize: databaseConnector,
    timestamps: true,
    freezeTableName: true,
    createdAt: true,
    updatedAt: true,
  }
);

UserModel.sync({ alter: true });

export { UserModel };
