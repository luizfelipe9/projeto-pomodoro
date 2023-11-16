import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Checklist from 'App/Models/Checklist'

export default class ChecklistsController {
    public async store({request, response}: HttpContextContract) {

        const body = request.body()

        const checklist = await Checklist.create(body)

        response.status(201)

        return {
            data: checklist,
        }
    }

    public async index() {
        const checklists = await Checklist.all()

        return {
            data: checklists,
        }
    }

    public async destroy({params}: HttpContextContract) {
        const checklist = await Checklist.findOrFail(params.id)

        await checklist.delete()

        return {
            msg: "Checklist deleted",
            data: checklist,
        }
    }

    public async update({ params, request }: HttpContextContract) {
        const body = request.body()

        const checklist = await Checklist.findOrFail(params.id)

        checklist.tarefa = body.tarefa
        checklist.hora = body.hora
        checklist.minuto = body.minuto
        checklist.segundo = body.segundo

        await checklist.save()

        return {
            msg: "Checklist updated",
            data: checklist,
        }
        }
}
