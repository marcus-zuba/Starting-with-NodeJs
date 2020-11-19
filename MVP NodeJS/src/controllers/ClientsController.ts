import {Request, Response} from 'express';

const knex = require('../database');

module.exports = {

  async index(req : Request, res : Response){
    const results = await knex('clients');
    return res.json(results);
  },

  async create(req: Request, res: Response, next:any){
    const {username} = req.body;

    try{
      await knex('clients').insert({
        username
      })
      return res.status(201).send()
    }
    catch(error){
      next(error)
    }
  },
  async update(req: Request, res: Response, next:any){
    try{
      const {username} = req.body;
      const {id} = req.params;

      await knex('clients')
      .update({username})
      .where({id})

      return res.send();
    }
    catch(error){
      next(error)
    }
  },
  async delete(req: Request, res: Response, next:any){
    try{
      const{id} = req.params;
      await knex('clients')
      .where({id})
      .del()

      return res.send()
    }
    catch(error){
      next(error)
    }
  }
}