import * as getUserService from '../services/user/get';
import * as putUserService from '../services/user/put';
import * as postUserService from '../services/user/post';
import * as deleteUserService from '../services/user/delete';


export const fetchUsers = async (req, res) => {
    try{
        res.status(200).json((await getUserService.getAllUsers()));
    } catch(error){
        res.status(500).json(error);
    }
}

export const fetchUser = async (req, res) => {
    try{
        res.status(200).json((await getUserService.getOneUser(req.params.id)));
    } catch(error){
        res.status(500).json(error);
    }
}

export const createUser = async (req, res) => {
    try {
        const {
            name,
            email,
            password
        } = req.body
        const newUser = await postUserService.createOneUser({
            name,
            email,
            password
        })
        res.status(200).json(newUser)
    } catch (e) {
        res.status(500).json(e)
    }
}

export const updateUser = async (req, res) => {
    try {
        const {
            name,
            email,
            password
        } = req.body
        console.log({
            id: req.params.id
        })
        const updateUserById = await putUserService.updateOneUser(req.params.id, {
            name,
            email,
            password
        })
        res.status(200).json(updateUserById)
    } catch (e) {
        res.status(500).json(e)
    }
}

export const deleteUser = async (req, res) => {
    try {
        const userDeleted = await deleteUserService.removeOneUser(req.params.id)
        res.status(200).json({ userDeleted })
    } catch (e) {
        res.status(500).json(e)
    }
}