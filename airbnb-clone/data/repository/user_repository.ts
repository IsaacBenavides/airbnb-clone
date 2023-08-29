import BaseRepository from "./base_repository";

export default class UserRepository {
  private baseRepository: BaseRepository;

  constructor({ baseRepository }: { baseRepository: BaseRepository }) {
    this.baseRepository = baseRepository;
  }

  async getUser({
    email,
    password,
  }: {
    email?: string | null;
    password?: string | null;
  }): Promise<Response> {
    return this.baseRepository.post({
      path: `/user/login/`,
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
  }
}
