import * as getUserService from '../services/user/get';
import * as putUserService from '../services/user/put';
import * as postUserService from '../services/user/post';
import * as deleteUserService from '../services/user/delete';


//Pour récupérer tous les users
export const fetchUsers = async (req, res) => {
    try{
        res.status(200).json((await getUserService.getAllUsers()));
    } catch(error){
        res.status(500).json(error);
    }
}

//Pour récupérer un seul user
export const fetchUser = async (req, res) => {
    try{
        res.status(200).json((await getUserService.getOneUser(req.params.id)));
    } catch(error){
        res.status(500).json(error);
    }
}

//Pour créer un user
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

//Pour mettre à jour un user
export const updateUser = async (req, res) => {
    try {
        const {
            name,
            email,
            password
        } = req.body
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

//Pour supprimer un user
export const deleteUser = async (req, res) => {
    try {
        const userDeleted = await deleteUserService.removeOneUser(req.params.id)
        res.status(200).json({ userDeleted })
    } catch (e) {
        res.status(500).json(e)
    }
}