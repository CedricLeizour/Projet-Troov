import { User } from '../../models/user'

export const createOneUser = async (user) => User.create(user);