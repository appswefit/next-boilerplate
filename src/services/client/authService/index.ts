import { LoginFormData } from '@/flows/auth/pages/components/user-auth-form';
import useResponseToast from '@/hooks/useResponseToast';
import HttpClient from '@/infra/http';

export default function useAuthService() {
  const { toast } = useResponseToast();
  const fetcher = new HttpClient();

  async function login(data: LoginFormData) {
    const response = await fetcher.post('/auth', data);

    await toast(response);
  }

  return { login };
}
