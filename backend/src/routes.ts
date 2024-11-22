import {FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply} from 'fastify'
import fastify from 'fastify';
import { CreateCustomerController } from './controllers/CreateCustomerController';
import { ListCustomersController } from './controllers/ListCustomersController';
import { DeleteCustomerController } from './controllers/DeleteCustomerController'

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions){
    fastify.get("/test", async (request: FastifyRequest, reply: FastifyReply)=>{
        return {ok : true}
    });

    fastify.post("/create", async( request: FastifyRequest, reply : FastifyReply) =>{
        return new CreateCustomerController().handle(request, reply);
    });

    fastify.get("/list", async( request: FastifyRequest, reply : FastifyReply) =>{
        return new ListCustomersController().handle(request, reply);
    });

    fastify.delete(`/delete/`, async( request: FastifyRequest, reply : FastifyReply) =>{
        return new DeleteCustomerController().handle(request, reply);
    });

}