import { GraphQLError } from 'graphql';
import * as userService from '../services/userService';
import { User } from '../../types/UserTypes';

export const createUser = async (
  username: string,
  email: string,
  password: string
): Promise<User> => {
  const emailExists = await userService.findUserByEmail(email);
  if (emailExists) {
    throw new GraphQLError('Email already exists', {
      extensions: { code: 'BAD_USER_INPUT' },
    });
  }
  const result: User = await userService.insertUser(username, email, password);

  return result;
};

// export const loginUser = async (req: Request, res: Response) => {
//   try {
//     const result = await userService.loginUser(req.body);
//     res.status(200).json(result);
//   } catch (error) {
//     res.status(401).json({ message: error.message });
//   }
// };

// export const updateUser = async (req: Request, res: Response) => {
//   try {
//     const result = await userService.updateUser(req.body, req.user.id);
//     res.status(200).json(result);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// export const deleteUser = async (req: Request, res: Response) => {
//   try {
//     const result = await userService.deleteUser(req.user.id);
//     res.status(200).json(result);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };
