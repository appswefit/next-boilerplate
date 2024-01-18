'use client';

import { getCookie } from 'cookies-next';
import { io } from 'socket.io-client';

const socket = io(process.env.NEXT_PUBLIC_WHATSAPP_WEBSOCKET ?? '', {
  auth: {
    Authorization: getCookie('X-DrenApps-Auth'),
  },
});

export default socket;
