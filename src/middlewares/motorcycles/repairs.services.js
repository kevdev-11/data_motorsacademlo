
const MotorcyclesInRepair = require('./repairs.models');

class SchedulingRepairService {

    static async getAllRepairs() {
        try {
            return await MotorcyclesInRepair.findAll({
                where: {
                    status: 'pending'
                }
            });
        } catch (error) {
            console.log(error);
        }
    }
    static async getOneRepair(id) {
        try {
            return await MotorcyclesInRepair.findOne({
                where:
                {
                    id,
                    status: 'pending'
                }
            });
        } catch (error) {
            console.log(error);
        }
    }
    static async createAppointment(data) {
        try {
            return await MotorcyclesInRepair.create(data);
        } catch (error) {
            console.log(error);
        }
    }
    static async updateAppointment(searchPendingRepair, data) {
        try {
            return await searchPendingRepair.update(data);
        } catch (error) {
            console.log(error);
        }
    }
    static async cancelAppointment(searchPendingRepair, data) {
        try {
            return await MotorcyclesInRepair.update(data, {
                where: {
                    id: searchPendingRepair.id,
                    status: 'pending'
                }
            });
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = SchedulingRepairService;