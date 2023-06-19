import bcrypt from 'bcryptjs';
import User from '../database/models/User';

const getByUserEmail = (email: string) => User.findOne({
  where: { email },
});

const createUser = async (email: string, password: string ) => {
  const user = await getByUserEmail(email);

  if(user) {
    return true;
  }

  const salt = bcrypt.genSaltSync(5);
  const hashPassword = bcrypt.hashSync(password, salt);
  
  return await User.create({ email, password: hashPassword });
};


export default {
  getByUserEmail,
  createUser
};

