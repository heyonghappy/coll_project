const project_type = require('../db_models/project_type')

module.exports = class personController {

    static async get_project_types(ctx){
        const people_id=ctx.people.id;
        let project_types= await project_type.findAll({
            where:{
                client:people_id
            },
            attributes: ['id', 'name', 'client'],
            raw: true
        })

        ctx.body=ctx.util.resuccess(project_types);
    }


}