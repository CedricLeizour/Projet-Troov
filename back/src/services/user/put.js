import { User } from '../../models/user'

export const updateOneUser = async (id, user) => User.findByIdAndUpdate(id, user);