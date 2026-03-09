import { Request, Response } from "express"
import { getUserService, User, createUserService, getAllUserService } from "../services/user.service"
import { successResponse } from "../utils/response"
import { AppError } from "../utils/AppError"


export const getUserController = async (req: Request, res: Response) => {
    const { id } = req.params
    const user: User = await getUserService(Number(id))
    if (!user) {
        throw new AppError("User not found", 404)
    }
    return res.status(200).json(
        successResponse<User>(user, "User fetched successfully")
    )
}

export const createUserController = async (req: Request, res: Response) => {
    const { id, name, email } = req.body
    if (!name || !email) {
        throw new AppError("Name and email are required", 400)
    }
    const user: User = await createUserService({
        name, email
    })
    return res.status(201).json(
        successResponse(user, "User created successfully")
    )
}

export const getAllUserController = async (req: Request, res: Response) => {
    const users: User[] = await getAllUserService()
    return res.status(200).json(
        successResponse(users, "Users fetched successfully")
    )
}