import HttpClient from '@/infra/http';
import { MessageRequestParams, MessageResponse } from './types';

export default function useServerMessageService() {
  const getMessage = async (
    id: string,
    params: MessageRequestParams,
  ): Promise<MessageResponse> => {
    const fetcher = new HttpClient(process.env.WHATSAPP_MESSENGER_SERVICE);

    const response = await fetcher.get(`/campaign/${id}/message`, params);

    const result = await response.json();

    return result;
  };

  return { getMessage };
}
