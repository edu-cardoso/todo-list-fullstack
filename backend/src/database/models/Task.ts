import { DataTypes, ModelDefined, Optional } from "sequelize";
import db from ".";
import { Task } from "../../types/Task";

type TaskInputtableFields = Optional<Task, 'id'>
type TaskModelType = ModelDefined<Task, TaskInputtableFields>

const Task: TaskModelType = db.define('Task', {
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
}, {
  timestamps: false,
  tableName: 'Tasks'
})

export default Task;