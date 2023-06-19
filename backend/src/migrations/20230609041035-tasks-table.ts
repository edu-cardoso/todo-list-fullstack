import { DataTypes, Model, QueryInterface } from "sequelize";
import { Task } from "../../types/Task";

export default {
  async up(queryInterface: QueryInterface){
    await queryInterface.createTable<Model<Task>>('Tasks', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      taskName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      }
    })
  },
  async down(queryInterface: QueryInterface){
    await queryInterface.dropTable('Tasks')
  },
}