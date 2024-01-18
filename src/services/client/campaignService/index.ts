import { EditCampaignFormType } from '@/flows/campaign/pages/CampaignDetailFlow/form';
import { CreateCampaignFormType } from '@/flows/campaign/pages/CampaignPageFlow/components/TableToolBar/form';
import useResponseToast from '@/hooks/useResponseToast';
import HttpClient from '@/infra/http';

export default function useCampaignService() {
  const { toast } = useResponseToast();
  const fetcher = new HttpClient();

  const createCampagin = async (data: CreateCampaignFormType) => {
    const response = await fetcher.post('/campaign', data);

    await toast(response);
  };

  const deleteCampaign = async (id: number) => {
    const response = await fetcher.delete(`/campaign/${id}`);

    await toast(response);
  };

  const editCampaign = async (id: number, data: EditCampaignFormType) => {
    const response = await fetcher.patch(`/campaign/${id}`, data);

    await toast(response);
  };

  const uploadFile = async (
    id: number,
    data: FormData,
    type: 'contacts' | 'image',
  ) => {
    const response = await fetcher.upload(
      `/campaign/${id}/upload/${type}`,
      data,
    );

    await toast(response);
  };

  const approveCampaign = async (id: number) => {
    const response = await fetcher.post(`/campaign/${id}/approve`, {});

    await toast(response);
  };

  return {
    createCampagin,
    deleteCampaign,
    editCampaign,
    uploadFile,
    approveCampaign,
  };
}
