"use strict";
/**
 *
 * @param {import('sequelize').Sequelize} sequelize
 * @param {*} DataTypes
 * @returns
 */
module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define('User', {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        email: DataTypes.STRING,
        password: DataTypes.STRING,
    }, {
        timestamps: false,
        tableName: 'Users',
    });
    User.associate = function (models) {
        User.hasMany(models.Task, {
            foreignKey: 'userId',
            as: 'tasks'
        });
    };
    return User;
};
