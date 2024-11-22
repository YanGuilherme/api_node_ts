import prismaClient from "../prisma";

interface DeleteCustomerProps{
    id: string;
};

class DeleteCustomerService{
    async execute({ id }: DeleteCustomerProps){
        if(!id){
            throw ("Solicitacao invalida!");
        }

        const findCustomer = await prismaClient.customer.findFirst({
            where:{
                id: id
            }
        })

        if(!findCustomer){
            throw ("Cliente nao encontrado.");
        }

        await prismaClient.customer.delete({
            where:{
                id: findCustomer.id
            }
        })

        return {message: 'Deletado com sucesso.'};

    }
}


export {DeleteCustomerService}