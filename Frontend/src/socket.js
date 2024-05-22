import { io } from 'socket.io-client';

const URL =  `http://${process.env.REACT_APP_API_URL}`;

export const socket = io(URL);