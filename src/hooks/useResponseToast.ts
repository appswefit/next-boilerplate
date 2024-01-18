import { useToast } from '@/components/ui/use-toast';

export default function useResponseToast() {
  const toaster = useToast();

  async function toast(response: Response) {
    if (response.status === 204) {
      return;
    }

    const variant = response.status >= 300 ? 'destructive' : 'default';

    try {
      const { message } = await response.json();

      if (!message) return;

      toaster.toast({
        variant,
        title: message,
      });
    } catch (error) {
      if (response.status === 500) {
        toaster.toast({
          variant: 'destructive',
          title: 'Erro interno, tente novamente mais tarde.',
        });
      }
      return;
    }
  }

  return { toast };
}
