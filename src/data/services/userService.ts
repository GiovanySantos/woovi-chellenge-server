import { GraphQLError } from 'graphql';
import { UserModel } from '../models/user';
import bcrypt from 'bcrypt';
import { connect, disconnect } from '../utils';

export const insertUser = async (
  username: string,
  email: string,
  password: string
) => {
  await connect();
  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const userModel = new UserModel({
      username: username,
      email: email,
      password: hashedPassword,
    });

    const result = await userModel.save();

    return result;
  } catch (error) {
    throw new GraphQLError('Error saving the user');
  } finally {
    await disconnect();
  }
};

export const findUserByEmail = async (email: string) => {
  await connect();
  try {
    const user = await UserModel.findOne({ email: email });
    if (user) return true;
    return false;
  } catch (error) {
    throw new GraphQLError('Error consulting email');
  } finally {
    disconnect();
  }
};

// export const loginUser = async (args: any) => {
//   await connect();
//   try {
//     const user = await UserModel.findOne({ email: args.email });
//     if (!user) {
//       throw new GraphQLError('email_or_password_error_message', {
//         extensions: { code: 'BAD_USER_INPUT' },
//       });
//     }
//     const isValidPassword = await bcrypt.compare(args.password, user.password);
//     if (!isValidPassword) {
//       throw new GraphQLError('email_or_password_error_message', {
//         extensions: { code: 'BAD_USER_INPUT' },
//       });
//     }
//     return { userId: user.id };
//   } catch (error) {
//     throw new GraphQLError('email_or_password_error_message', {
//       extensions: { code: 'BAD_USER_INPUT' },
//     });
//   } finally {
//     await disconnect();
//   }
// };

// export const updateUser = async (args: any, context: any) => {
//   await connect();
//   try {
//     const user = await UserModel.findById(context.userId);
//     if (!user) {
//       throw new GraphQLError('email_or_password_error_message', {
//         extensions: { code: 'BAD_USER_INPUT' },
//       });
//     }
//     if (args.email) {
//       user.email = args.email;
//     }
//     if (args.password) {
//       user.password = await bcrypt.hash(args.password, 10);
//     }
//     const result = await user.save();
//     return result;
//   } catch (error) {
//     throw new GraphQLError('email_or_password_error_message', {
//       extensions: { code: 'BAD_USER_INPUT' },
//     });
//   } finally {
//     disconnect();
//   }
// };

// export const deleteUser = async (args: any, context: any) => {
//   await connect();
//   try {
//     const user = await UserModel.findById(context.userId);
//     if (!user) {
//       throw new GraphQLError('email_or_password_error_message', {
//         extensions: { code: 'BAD_USER_INPUT' },
//       });
//     }
//     await UserModel.deleteOne({ _id: context.userId });
//     return { message: 'User deleted successfully' };
//   } catch (error) {
//     throw new GraphQLError('email_or_password_error_message', {
//       extensions: { code: 'BAD_USER_INPUT' },
//     });
//   } finally {
//     disconnect();
//   }
// };
