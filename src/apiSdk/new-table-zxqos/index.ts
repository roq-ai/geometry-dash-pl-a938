import axios from 'axios';
import queryString from 'query-string';
import { NewTableZxqoInterface, NewTableZxqoGetQueryInterface } from 'interfaces/new-table-zxqo';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getNewTableZxqos = async (
  query?: NewTableZxqoGetQueryInterface,
): Promise<PaginatedInterface<NewTableZxqoInterface>> => {
  const response = await axios.get('/api/new-table-zxqos', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createNewTableZxqo = async (newTableZxqo: NewTableZxqoInterface) => {
  const response = await axios.post('/api/new-table-zxqos', newTableZxqo);
  return response.data;
};

export const updateNewTableZxqoById = async (id: string, newTableZxqo: NewTableZxqoInterface) => {
  const response = await axios.put(`/api/new-table-zxqos/${id}`, newTableZxqo);
  return response.data;
};

export const getNewTableZxqoById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/new-table-zxqos/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteNewTableZxqoById = async (id: string) => {
  const response = await axios.delete(`/api/new-table-zxqos/${id}`);
  return response.data;
};
