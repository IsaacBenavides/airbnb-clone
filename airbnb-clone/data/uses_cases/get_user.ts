import { type User } from "../models/user.m";
import UserRepository from "../repository/user_repository";
import { UseCase } from "./base";

interface GetUserParams {
  email?: string | null;
}

export default class GetUserUseCase implements UseCase<GetUserParams, User> {
  private userRepository: UserRepository;

  constructor({ userRepository }: { userRepository: UserRepository }) {
    this.userRepository = userRepository;
  }
  public async call({ params }: { params: GetUserParams }): Promise<User> {
    const response: Response = await this.userRepository.getUser({
      email: params.email,
    });

    switch (response.status) {
      case 200:
        return (await response.json())["user"];
      case 400:
        const r = await response.json();
        console.log(r);
        throw Error("Something went wrong");
      default:
        throw Error("Something went wrong");
    }
  }
}
