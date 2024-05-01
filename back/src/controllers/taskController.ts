import { PrismaClient, Prisma } from "@prisma/client";
import { Response, Request } from "express";
import {validationResult} from "express-validator"

const prisma = new PrismaClient();

class TaskController
{
    async createTask(request:Request, response:Response)
    {
        try{
            validationResult(request).throw();
            const {title, description, date, durationHour, durationMinute} = request.body;

            const [year, month, day, hour, minute] = splitDateAndHour(date);
            const dataInput = new Date(year,month, day, hour, minute);

            let taskInput:Prisma.TaskCreateInput = {
                title:title,
                description:description,
                date:dataInput,
                durationHour:parseInt(durationHour),
                durationMinute:parseInt(durationMinute)
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
            validationResult(request).throw();
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
            validationResult(request).throw();
            const {title, description, date, durationHour, durationMinute} = request.body;

            const task = await prisma.task.findUnique({
                where: {title:String(title)}
            })

            if(!task)
                return response.status(404).json({message:"Task não encontrada"});

            const [year, month, day, hour, minute] = splitDateAndHour(date);
            const dataInput = new Date(year,month, day, hour, minute);

            let taskInput:Prisma.TaskCreateInput = {
                title:title,
                description:description,
                date:dataInput,
                durationHour:parseInt(durationHour),
                durationMinute:parseInt(durationMinute)
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
            validationResult(request).throw();
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

function splitDateAndHour(date:string):Array<number>
{
    const datePart = date.split("T")[0];
    const hourPart = date.split("T")[1];

    const elementsDate:Array<string> = datePart.split("/");
    const elementsHours:Array<string> = hourPart.split(":");

    const year = parseInt(elementsDate[0], 10)
    const month = parseInt(elementsDate[1], 10) -1;
    const day = parseInt(elementsDate[2], 10)

    const hour = parseInt(elementsHours[0], 10)
    const minute = parseInt(elementsHours[1], 10)

    return [year, month, day, hour, minute];
}

export default new TaskController();