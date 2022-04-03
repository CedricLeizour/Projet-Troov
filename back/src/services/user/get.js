import { User } from '../../models/user';

export const getAllUsers = async () => User.find({});

export const getOneUser = async (_id) => User.find({_id});
