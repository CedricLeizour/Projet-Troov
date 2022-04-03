import { User } from '../../models/user'

export const removeOneUser = async (id) => User.findByIdAndDelete(id);