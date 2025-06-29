const users = [];

exports.findAll = async () => {
    return users;
};

exports.save = async (data) => {
    const user = {
        id: users.length + 1,
        name: data.name,
        email: data.email,
    };
    users.push(user);
    return user;
}