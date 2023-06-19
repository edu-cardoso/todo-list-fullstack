import { DataTypes, ModelDefined, Optional } from "sequelize";
import db from ".";
import { User } from "../../types/User";

type UserInputtableFields = Optional<User, 'id'>
type UserModelType = ModelDefined<User, UserInputtableFields>

const User: UserModelType = db.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password:  {
    type: DataTypes.STRING,
    allowNull: false
  },  
}, {
  timestamps: false,
  tableName: 'Users'
})

export default User;