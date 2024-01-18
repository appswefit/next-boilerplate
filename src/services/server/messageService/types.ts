export type MessageStatus = 'CREATED' | 'SENT' | 'LOADING' | 'ERROR';

export type MessageRequestParams = {
  search?: string;
  status?: string;
  skip?: number;
  take?: number;
};

export type MessageItem = {
  id: number;
  number: string;
  campaignId: number;
  status: MessageStatus;
  createdAt: string;
};

export type MessageResponse = ApiResponse<{
  list: Array<MessageItem>;
  count: number;
}>;
