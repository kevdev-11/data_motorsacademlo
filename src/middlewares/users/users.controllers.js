const usersService = require('./users.services');

const findAll = async (req, res) => {

    try {
        const usersFindAll = await usersService.getUsers();
        // console.log(usersFindAll)

        return res.status(200).json(
            {
                message: 'Users-get-all routers works - method getAll',
                data: req.body,
                usersFindAll
            }
        )
    } catch (error) {
        return res.status(500).json({
            status: 'failure',
            message: 'Something went wrong',
            error
        })
    }
}

const create = async (req, res) => {

    try {
        const { name, email, password, role } = req.body;
        const userCreated = await usersService.createUser({ name, email, password, role });
        const { id } = userCreated;

        return res.status(202).json(
            {
                message: `post working with new id: n°${id} sucessfully created - method post`,
                data: req.body,
                userCreated
            }
        )
    } catch (error) {
        return res.status(500).json({
            status: 'failure',
            message: 'Something went wrong',
            error
        })
    }

}

const update = async (req, res) => {

    try {
        const { id } = req.params;
        const userFinded = await usersService.getUserById(id);
        if (!userFinded) {
            return res.status(400).json(
                {
                    message: `Doesn't exist this user with this id:${id} or not been created`,
                }
            )

        };
        const { name, email } = req.body;
        const userUpdated = await usersService.updateUser(userFinded, { name, email });

        // console.log(userUpdated);

        return res.status(200).json(
            {
                message: 'User-updated route works - method patch',
                data: req.body,
                userUpdated
            }
        )
    } catch (error) {
        return res.status(500).json({
            status: 'failure',
            message: 'Something went wrong',
            error
        })
    }
}

const findOne = async (req, res) => {

    try {
        const { id } = req.params;

        const userFinded = await usersService.getUserById(id);
        // console.log(userFinded);
        if (!userFinded) {
            return res.status(400).json(
                {
                    message: `Doesn't exist this user with this id:${id} or not been created`,
                }
            )

        };

        return res.status(200).json(
            {
                message: `get-one-user route works with id ${req.params.id} sucessfully created`,
                userFinded
            }
        )
    } catch (error) {
        return res.status(500).json({
            status: 'failure',
            message: 'Something went wrong',
            error
        })
    }
}

const deleteOne = async (req, res) => {

    try {
        const { id } = req.params;
        const userFinded = await usersService.getUserById(id);

        if (!userFinded) {
            return res.status(400).json(
                {
                    message: `Doesn't exist this user with this id:${id} or not been created`,
                }
            )

        };
        const disabledUser = await usersService.deleteUser(userFinded);
        // console.log(disabledUser);

        return res.status(200).json(
            {
                message: 'User-deleted route works!',
                disabledUser
            }
        )
    } catch (error) {
        return res.status(500).json({
            status: 'failure',
            message: 'Something went wrong',
            error
        })
    }
}

module.exports = {
    findAll,
    create,
    update,
    findOne,
    deleteOne
}