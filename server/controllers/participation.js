import ParticipationModel from '../models/participation';

export default class ParticipationController {
    /**
     * path: GET /participation
     *
     * @param {*} ctx
     * @returns {ParticipationModel[]}
     */
    async search(ctx) {
        const participation = new ParticipationModel(ctx.db);
        const results = await participation.findAll({raw: true});

        ctx.body = results;
    }

    /**
     * path: DELETE /participation/:id
     *
     * @param {*} ctx 
     * @returns {null}
     */
    async delete(ctx) {
        const participation = new ParticipationModel(ctx.db);

        try {
            const {id} = ctx.params;
            const participationRecord = await participation.findOne({id});

            participationRecord.destroy();;

            ctx.status = 200;
        } catch (e) {
            console.error(e);

            ctx.throw(500, 'Unable to delete record');
        }
    }

    /**
     * path: POST /participation
     *
     * @param {*} ctx
     * @returns {ParticipationModel}
     */
    async create(ctx) {
        const participation = new ParticipationModel(ctx.db);
        const {body} = ctx.request;

        try {
            ctx.body = await participation.create(body);
        } catch(e) {
            console.error(e);

            ctx.throw(500, 'Unable to create participation record');
        }
    }
}