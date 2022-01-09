import { Request } from "express";
import { verifyToken } from '../verify-token';

interface RawContext {
  req: Request;
}

export const contextCreator = ({ req }: RawContext) => {
  const context: any = {};
  if(req.headers.authorization){
    const payloadUser = verifyToken(req);
    context.dataUser = {
      ...payloadUser
    }
    return context;
  }
  return context;
  /**console.log('IMPRIMIENDO REQUEST',req.headers);
  console.log('Estoy en el context creator: ',context);
  return context**/
}