import axios from 'axios';
import queryString from 'query-string';
import { NewTableIwfbInterface, NewTableIwfbGetQueryInterface } from 'interfaces/new-table-iwfb';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getNewTableIwfbs = async (
  query?: NewTableIwfbGetQueryInterface,
): Promise<PaginatedInterface<NewTableIwfbInterface>> => {
  const response = await axios.get('/api/new-table-iwfbs', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createNewTableIwfb = async (newTableIwfb: NewTableIwfbInterface) => {
  const response = await axios.post('/api/new-table-iwfbs', newTableIwfb);
  return response.data;
};

export const updateNewTableIwfbById = async (id: string, newTableIwfb: NewTableIwfbInterface) => {
  const response = await axios.put(`/api/new-table-iwfbs/${id}`, newTableIwfb);
  return response.data;
};

export const getNewTableIwfbById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/new-table-iwfbs/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteNewTableIwfbById = async (id: string) => {
  const response = await axios.delete(`/api/new-table-iwfbs/${id}`);
  return response.data;
};
