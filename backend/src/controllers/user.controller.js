const UserService = require('../services/user.service');

exports.getAllUsers = async (req, res) => {
    const users = await UserService.getAllUsers();
    res.json(users);
};

exports.createUser = async (req, res) => {
    const user = await UserService.createUser(req.body);
    res.status(201).json(user);
};