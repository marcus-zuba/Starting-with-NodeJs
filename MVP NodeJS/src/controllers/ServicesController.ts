import { Request, Response } from 'express';

const knex = require('../database');

module.exports = {

  async index(req: Request, res: Response, next: any) {
    try {
      const { client_id } = req.query;


      const query = knex('services')

      const countObj = knex('services').count()


      if (client_id) {
        query
          .where({ client_id })
          .join('clients', 'clients.id', '=', 'services.client_id')
          .select('services.*', 'clients.username')

        countObj
          .where({ client_id })
      }

      const [count] = await countObj
      res.header('X-Total-Count', count["count"])

      const results = await query

      return res.json(results)
    } catch (error) {
      next(error);
    }
  },

  async create(req: Request, res: Response, next: any) {
    try {
      const { type, client_id } = req.body

      await knex('services').insert({
        type,
        client_id
      })

      return res.status(201).send()

    } catch (error) {
      next(error)
    }
  },

  async update(req: Request, res: Response, next: any) {
    try {
      const { id } = req.params
      const { type, client_id } = req.body

      await knex('services')
        .update({ type, client_id })
        .where({ id })

      return res.send()

    } catch (error) {
      next(error)
    }
  },

  async delete(req: Request, res: Response, next: any) {
    try {
      const { id } = req.params

      await knex('services')
        .where({ id })
        .del()

      return res.send()

    } catch (error) {
      next(error)
    }
  },
}