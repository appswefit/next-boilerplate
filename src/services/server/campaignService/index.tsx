import HttpClient from '@/infra/http';
import {
  CampaignDetailRequest,
  CampaignDetailResponse,
  CampaignRequestParams,
  GetCampaignResult,
} from './types';

export default function useServerCampaignService() {
  const getCampaign = async (
    params: CampaignRequestParams,
  ): Promise<GetCampaignResult> => {
    const fetcher = new HttpClient(process.env.WHATSAPP_MESSENGER_SERVICE);

    const response = await fetcher.get('/campaign', params);

    const result = await response.json();

    return result;
  };

  const getCampaignDetail = async ({
    campaignId,
  }: CampaignDetailRequest): Promise<CampaignDetailResponse> => {
    const fetcher = new HttpClient(process.env.WHATSAPP_MESSENGER_SERVICE);

    const response = await fetcher.get(`/campaign/${campaignId}`);

    const result = await response.json();

    return result;
  };

  return { getCampaign, getCampaignDetail };
}
