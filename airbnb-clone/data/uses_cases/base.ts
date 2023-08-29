export abstract class UseCaseNoParams<T> {
  public abstract call(): Promise<T>;
}

export abstract class UseCase<P, T> {
  public abstract call({ params }: { params: P }): Promise<T>;
}
