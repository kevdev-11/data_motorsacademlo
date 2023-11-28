const Users = require('./users.models');

class UsersService {

    static async getUsers() {

        try {
            return await Users.findAll();
        } catch (error) {
            console.log(error);
        }
    }

    static async getUserById(id) {

        try {
            return await Users.findOne(
                {
                    where:
                        { id }
                });
        } catch (error) {
            console.log(error);
        }
    }

    static async createUser(data) {

        try {
            return await Users.create(data);
        } catch (error) {
            console.log(error)
        }
    }

    static async updateUser(userFinded, data) {

        try {
            return await userFinded.update(data);
        } catch (error) {
            console.log(error);
        }
    }

    static async deleteUser(userFinded) {

        try {
            return await Users.update(
                { status: 'disabled' },
                {
                    where:
                        { id: userFinded.id }
                });
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = UsersService;