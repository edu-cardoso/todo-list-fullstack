import { DataTypes, Model, QueryInterface } from "sequelize";
import { User } from "../../types/User";

export default {
  async up(queryInterface: QueryInterface){
    await queryInterface.createTable<Model<User>>('Users', {
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
    })
  },
  async down(queryInterface: QueryInterface){
    await queryInterface.dropTable('Users')
  },
}
