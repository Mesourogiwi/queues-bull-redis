import mailQueue from "../lib/Queue";
import { Request, Response } from "express";

import { Queue } from "bull";

export class UserController {
    async store(req: Request, res: Response) {
        const { name, email, password } = req.body

        const user = {
            name,
            email,
            password
        }

        await mailQueue.add('RegistrationMail', { user })

        return res.json(user)
    }
}