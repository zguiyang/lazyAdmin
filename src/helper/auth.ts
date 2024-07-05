import { storage } from './storage';

export const TOKEN_NAME = 'userToken';

export async function getUserToken() {
  return await storage.getItem(TOKEN_NAME);
}

export async function setUserToken(token: string) {
  return await storage.setItem(TOKEN_NAME, token);
}

export async function removeUserToken() {
  return await storage.removeItem(TOKEN_NAME);
}
