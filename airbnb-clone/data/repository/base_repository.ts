interface MethodsParams {
  path: string;
  body?: BodyInit;
}

export default class BaseRepository {
  constructor() {}

  public async get({ path }: MethodsParams): Promise<Response> {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL!;
    let res = fetch(`${baseUrl}${path}`, {
      method: "GET",
    });
    return res;
  }

  public async post({ path, body }: MethodsParams) {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL!;
    let res = fetch(`${baseUrl}${path}`, {
      method: "POST",
      body: body,
    });
    return res;
  }
}
