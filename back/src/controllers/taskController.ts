import { PrismaClient, Prisma } from "@prisma/client";
import { Response, Request } from "express";

const prisma = new PrismaClient();

class TaskController
{
    async createTask(request:Request, response:Response)
    {
        try{
            const {title, description, date, duration} = request.body;

            let taskInput:Prisma.TaskCreateInput = {
                title:title,
                description:description,
                date:date,
                duration:duration
            }

            const task = await prisma.task.create({data:taskInput});

            return response.status(201).json({
                        message:"Task criada com sucesso",
                        task:task
                    })
        }
        catch(error:any){
            return response.status(500).json(error);
        }
    }

    async showTask(request:Request, response:Response)
    {
        try{
            const {title} = request.query;

            const task = await prisma.task.findUnique({
                where: {title:String(title)}
            })

            if(!task)
                return response.status(404).json({message:"Task não encontrada"});

            return response.status(200).json({
                message:"Task encontrada",
                task:task
            })
        }
        catch(error:any){
            return response.status(500).json(error);
        }
    }

    async updateTask(request:Request, response:Response)
    {
        try{
            const {title, description, date, duration} = request.body;

            const task = await prisma.task.findUnique({
                where: {title:String(title)}
            })

            if(!task)
                return response.status(404).json({message:"Task não encontrada"});

            let taskInput:Prisma.TaskCreateInput = {
                title:title,
                description:description,
                date:date,
                duration:duration
            }

            const updatedTask = await prisma.task.update({
                where:{title:title},
                data:taskInput
            })

            return response.status(200).json({
                message:"Task atualizada",
                task:updatedTask
            })
        }
        catch(error:any){
            return response.status(500).json(error);
        }
    }

    async destroyTask(request:Request, response:Response)
    {
        try{
            const {title} = request.query;

            const task = await prisma.task.findUnique({
                where: {title:String(title)}
            })

            if(!task)
                return response.status(404).json({message:"Task não encontrada"});

            const deletedTask = await prisma.task.delete({
                where:{title:String(title)},
            })

            return response.status(200).json({
                message:"Task deletada",
                task:deletedTask
            })
        }
        catch(error:any){
            return response.status(500).json(error);
        }
    }
}

export default new TaskController();