export const RESTART_ON_REMOUNT = '@@saga-injector/restart-on-remount';
export const DAEMON = '@@saga-injector/daemon';
export const ONCE_TILL_UNMOUNT = '@@saga-injector/once-till-unmount';

//Base url
export const API_URL = 'http://localhost:5000/my-coin';
export const SOCKET_URL = 'http://localhost:5001/';

// private key
export const LOCAL_STORAGE_PRIVATE_KEY = 'private-key';

// Status transaction
export const SUCCESS_TRANSACTION = 1;
export const WAITING_CONFIRM = 2;

// Event socket
export const TRANSACTION_CREATED = 'TRANSACTION.CREATED';
export const BLOCK_CREATED = 'BLOCK.CREATED';
