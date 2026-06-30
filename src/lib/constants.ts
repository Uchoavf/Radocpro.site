export const WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '5591981563432'

export const WHATSAPP_MESSAGE_DEFAULT =
  'Olá! Gostaria de mais informações sobre radoc.pro'

export const WHATSAPP_MESSAGE_HELP =
  'Olá! Preciso de ajuda com o RADOC'

export function whatsappLink(message?: string): string {
  const msg = encodeURIComponent(message || WHATSAPP_MESSAGE_DEFAULT)
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`
}
