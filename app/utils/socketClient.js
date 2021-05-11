import socketClient from "socket.io-client";
import { SOCKET_URL } from "./constants";

const socket = socketClient(SOCKET_URL, {transports: ['websocket']});

export default socket;
