import {body, ValidationChain, query} from "express-validator"

function validateTitle():ValidationChain
{
    return body("title").exists().withMessage("Precisa ter o campo title")
    .isString().withMessage("Precisa ser texto");
}

function validateDescription():ValidationChain
{
    return body("description").exists().withMessage("Precisa ter o campo description")
    .isString().withMessage("Precisa ser texto");
}

function validateDate():ValidationChain
{
    return body("date").exists().withMessage("Precisa ter o campo date")
    .isString().withMessage("Precisa ser texto");
}

function validateHourDuration():ValidationChain
{
    return body("durationHour").exists().withMessage("Precisa ter o campo durationHour")
    .isInt().withMessage("Precisa ser inteiro");
}

function validateMinuteDuration():ValidationChain
{
    return body("durationMinute").exists().withMessage("Precisa ter o campo durationMinute")
    .isInt().withMessage("Precisa ser inteiro");
}

function validateIdTitleTask():ValidationChain
{
    return query("title").exists().withMessage("Precisa ter o parametro title")
    .isString().withMessage("Precisa ser texto");
}

function validatorTask(method:string)
{
    switch(method)
    {
        case "createTask":{
            return [validateTitle(), validateDescription(), validateDate(), validateHourDuration(), validateMinuteDuration()]
        }

        case "showTask":{
            return [validateIdTitleTask()]
        }

        case "updateTask":{
            return [validateTitle(), validateDescription(), validateDate(), validateHourDuration(), validateMinuteDuration()]
        }

        case "destroyTask":{
            return [validateIdTitleTask()]
        }
    }
}

export {validatorTask}