/**
 * Dados da loja — altere aqui (e nas seções de HTML/comentários) quando tiver o conteúdo real.
 */
export const store = {
  name: 'FALCON',
  tagline: 'a fonte do estilo que se diferencia',
  locationHook: 'Cola pra fonte',
  phoneDisplay: '(31) 9 9670-1969',
  whatsappNumber: '5531996701969',
  vipGroupUrl: 'https://chat.whatsapp.com/BamTMGMHg4d3y7XWtMNsEa?s=cl&p=i&mlu=4',
  address: 'Av. Marechal Castelo Branco, 76 - Centro, Teixeiras - MG, 36580-000, Brasil',
  mapsQuery: 'Av. Marechal Castelo Branco, 76 - Centro, Teixeiras - MG, 36580-000',
  instagram: 'https://www.instagram.com/_falconstoree/',
}

export const whatsappLink = (text = 'Fala, FALCON! Vim pelo site quero saber mais 🔥') =>
  `https://wa.me/${store.whatsappNumber}?text=${encodeURIComponent(text)}`
