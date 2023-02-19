import { redis } from "./redis";

const fetch = async <T>(key: string, fetcher: () => T, expires: number) => {
  const existing = await get<T>(key);
  if (existing !== null) return existing;
  return set(key, fetcher, expires);
};

const get = async <T>(key: string) => {
  const value = await redis.get(key);
  if (value === null) return null;
  return JSON.parse(value);
};

const set = async <T>(key: string, fetcher: () => T, expires: number) => {
  const value = await fetcher();
  await redis.set(key, JSON.stringify(value));
  await redis.expire(key, expires);
  return value;
};

const del = async (key: string): Promise<void> => {
  await redis.del(key);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { fetch, set, get, del };
