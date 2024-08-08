import { BASE_URL } from './consts';

const buildJSONBody = (body?: {}) => {
  if (!body) {
    return undefined;
  }
  return JSON.stringify(body);
};

const http = async <T>(path: string, method: string, body?: {}) => {
  const response = await fetch(`${BASE_URL}${path}`, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: buildJSONBody(body),
  });

  if (!response.ok) {
    throw new Error('http error');
  }

  return response.json() as Promise<T>;
};

const GET = async <T>(path: string) => {
  return http<T>(path, 'GET');
};

const POST = async <T>(path: string, body: {}) => {
  return http<T>(path, 'POST', body);
};

export const apiClient = { GET, POST };
