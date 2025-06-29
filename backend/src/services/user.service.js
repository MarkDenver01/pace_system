const UserUseCase = require('../usecase/user.usecase');

exports.getAllUsers = async () => {
    return await UserUseCase.getUsers();
};

exports.createUser = async (data) => {
    return await UserUseCase.createUser(data);
}