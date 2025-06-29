const UserRepository = require('../repositories/user.repository');

exports.getUsers = async () => {
    return await UserRepository.findAll();
};

exports.createUser = async (data) => {
    // business logic
    if (!data.name || !data.email) throw new Error('name and email are required');
    return await UserRepository.save(data);
};