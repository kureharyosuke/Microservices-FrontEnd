declare module Express {
  export interface Request {
    products: {
      id?: number;
    };
  }
}
