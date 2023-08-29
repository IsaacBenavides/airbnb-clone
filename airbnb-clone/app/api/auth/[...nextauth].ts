import NextAuth, { AuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialProvider from "next-auth/providers/credentials";
import { User } from "@/data/models/user.m";
import GetUserUseCase from "@/data/uses_cases/get_user";
import UserRepository from "@/data/repository/user_repository";
import BaseRepository from "@/data/repository/base_repository";

export const authOptions: AuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Email", type: "password" },
      },
      authorize: async function (credentials): Promise<any> {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Invalid Crendentials");
        }
        const getUserUseCase: GetUserUseCase = new GetUserUseCase({
          userRepository: new UserRepository({
            baseRepository: new BaseRepository(),
          }),
        });
        const user: User = await getUserUseCase.call({
          params: {
            email: credentials.email,
          },
        });
        if (!user || !user.hashedPassword) {
          throw Error("Invalid Credentials");
        }
        return user;
      },
    }),
  ],
  pages: {
    signIn: "/",
  },
  debug: process.env.NODE_ENV === "development",
};

export default NextAuth(authOptions);
