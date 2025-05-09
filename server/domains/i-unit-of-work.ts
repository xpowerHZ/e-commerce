export interface IUnitOfWork {
  transaction<T>(operation: () => Promise<T>): Promise<T>;
}
