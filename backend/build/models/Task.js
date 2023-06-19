"use strict";
/**
 *
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 * @returns
 */
module.exports = function (sequelize, DataTypes) {
    var Task = sequelize.define('Task', {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        taskName: DataTypes.STRING,
        userId: DataTypes.INTEGER,
    }, {
        timestamps: false,
        tableName: 'Tasks',
    });
    Task.associate = function (models) {
        Task.belongsTo(models.User, {
            foreignKey: 'userId',
            as: 'user'
        });
    };
    return Task;
};
