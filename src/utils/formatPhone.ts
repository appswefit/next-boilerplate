export function formatPhoneNumber(phone: string) {
  const clean = phone.replace(/\D/g, '');

  const mask = /(\d{2})(\d{2})(\d{5})/;

  const formatedPhone = clean.replace(mask, '+$1 ($2) $3-');

  return formatedPhone;
}
