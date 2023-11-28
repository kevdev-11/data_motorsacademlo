const { parse } = require('date-fns');
const SchedulingRepairService = require('./repairs.services');

const findAll = async (req, res) => {

    try {
        const pendingRepairs = await SchedulingRepairService.getAllRepairs();
        console.log(pendingRepairs)

        res.status(200).json(
            {
                // id: id,
                message: 'method getAll works',
                pendingRepairs,

            }
        )
    } catch (error) {
        return res.status(500).json(
            {
                status: 'failure',
                message: 'Something went wrong',
            }
        )
    }
}

const create = async (req, res) => {


    try {
        const { date, userId } = req.body;
        const parseDate = parse(date, 'dd-MM-yyyy', new Date());
        const newAppointment = await SchedulingRepairService.createAppointment({ date: parseDate, userId });

        console.log(req.body)
        return res.status(200).json(
            {
                message: `new-appointment-created works sucessfully created!`,
                newAppointment
            }
        )
    } catch (error) {
        return res.status(501).json(
            {
                status: 'failure',
                message: 'Something went wrong',
            }
        )
    }

}

const update = async (req, res) => {

    try {

        const { id } = req.params;
        const searchPendingRepair = await SchedulingRepairService.getOneRepair(id);

        if (searchPendingRepair === null) {
            return res.status(404).json(
                {
                    message: 'not registered as pending'
                }
            )
        }

        const setCompleted = await SchedulingRepairService.updateAppointment(
            searchPendingRepair,
            { status: 'completed' },
        )


        // con  sole.log(setCompleted)

        return res.status(203).json(
            {
                message: 'method patch works',
                data: req.body,
                setCompleted
            }
        )
    } catch (error) {
        return res.status(501).json(
            {
                status: 'failure',
                message: 'Something went wrong',
            }
        )
    }
}

const findOne = async (req, res) => {

    try {
        const { id } = req.params;
        const searchPendingRepair = await SchedulingRepairService.getOneRepair(id);

        if (searchPendingRepair === null) {
            return res.status(404).json(
                {
                    message: 'not registered as pending'
                }
            )
        }

        return res.status(200).json(
            {
                message: 'method get-one works',
                searchPendingRepair
            }
        )

    } catch (error) {
        return res.status(501).json(
            {
                status: 'failure',
                message: 'Something went wrong',
            }
        )
    }
}

const deleteOne = async (req, res) => {

    try {
        const { id } = req.params;
        const searchPendingRepair = await SchedulingRepairService.getOneRepair(id);

        if (searchPendingRepair === null) {
            return res.status(404).json(
                {
                    message: 'not registered as pending'
                }
            )
        }

        const setCancelled = await SchedulingRepairService.cancelAppointment(searchPendingRepair,
            { status: "cancelled" }
        )
        // verificando si el status es completed, enviando el error:
        if (searchPendingRepair.status === 'completed') {
            return res.status(404).json(
                {
                    message: 'not resgistered as pending'
                }
            )
        }
        // console.log(setCancelled)

        return res.status(200).json(
            {
                message: 'method delete works',
                data: req.body,
                setCancelled
            }
        )
    } catch (error) {
        return res.status(501).json(
            {
                status: 'failure',
                message: 'Something went wrong',
            }
        )
    }
}

module.exports = {
    findAll,
    create,
    update,
    findOne,
    deleteOne
}