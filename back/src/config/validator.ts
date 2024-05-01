import {body, header, ValidationChain, query} from "express-validator"

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

function validateDuration():ValidationChain
{
    return body("duration").exists().withMessage("Precisa ter o campo duration")
    .isString().withMessage("Precisa ser texto");
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
            return [validateTitle(), validateDescription(), validateDate(), validateDuration()]
        }

        case "showTask":{
            return [validateIdTitleTask()]
        }

        case "updateTask":{
            return [validateTitle(), validateDescription(), validateDate(), validateDuration()]
        }

        case "destroyTask":{
            return [validateIdTitleTask()]
        }
    }
}

export {validatorTask}