import { fetchData } from '../utils/apiClient';

export const createWallet = () => {
  return fetchData('post', '/wallets');
};

export const getWallet = privateKey => {
  return fetchData('get', '/wallets', undefined, privateKey);
};

export const getBlocks = () => {
  return fetchData('get', '/blocks');
};

export const getTransactions = () => {
  return fetchData('get', '/transactions');
};

export const sendTransactionAPI = (address, amount, privateKey) => {
  const data = {
    receiptAddress: address,
    amount,
  }
  return fetchData('post', '/transactions', data, privateKey)
}
export const getHistoryAPI = () => {
  return fetchData('get', '/history');
};

export const miningBlockAPI = privateKey => {
  return fetchData('post', '/mining', undefined, privateKey);
};

export const getMyTransactionAPI = privateKey => {
  return fetchData('get', '/transactions/mine', undefined, privateKey);
};
