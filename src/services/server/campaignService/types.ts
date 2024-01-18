export type CampaignStatus = 'CREATED' | 'FINISHED' | 'LOADING';

export const CampaignStatusName: Record<string, string> = {
  CREATED: 'Aguardando aprovação',
  FINISHED: 'Finalizado',
  LOADING: 'Processando',
};

export interface CampaignRequestParams {
  search?: string;
  status?: CampaignStatus;
  skip?: number;
  take?: number;
}

export type GetCampaignResult = ApiResponse<{
  list: Array<{
    id: number;
    name: string;
    status: CampaignStatus;
    createdAt: string;
  }>;
  count: number;
}>;

export interface CampaignDetailRequest {
  campaignId: string;
}

export type MessageTotals = {
  created: number;
  loading: number;
  sent: number;
  error: number;
  total: number;
};

export type CampaignDetail = {
  id: number;
  name: string;
  message: string;
  imagePath?: string;
  phoneListSheetPath?: string;
  status: CampaignStatus;
  createdAt: string;
  updatedAt: string;
  messageTotals: MessageTotals;
};

export type CampaignDetailResponse = ApiResponse<CampaignDetail>;
