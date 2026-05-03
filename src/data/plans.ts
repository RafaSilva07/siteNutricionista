export type Plan = {
  name: string
  label: string
  accent: 'gold' | 'red' | 'purple'
  description: string
  inclusions: string[]
  prices: string[]
  note?: string
}

export const plans: Plan[] = [
  {
    name: 'Plano Premium',
    label: 'Presencial',
    accent: 'gold',
    description: 'Para quem quer uma leitura mais completa do físico, com avaliação presencial e acompanhamento próximo.',
    inclusions: [
      'Avaliação do aluno',
      'Acompanhamento no WhatsApp',
      'Entrega de dieta',
      'Questionário semanal',
      'Avaliação antropométrica com imagens',
      'Materiais de apoio',
    ],
    prices: [
      'Mensal: R$ 250,00 à vista',
      'Trimestral: R$ 675,00 à vista ou 3x com juros',
      'Semestral: R$ 1.200,00 à vista ou 6x com juros',
    ],
  },
  {
    name: 'Plano Online',
    label: 'Individual',
    accent: 'red',
    description: 'Estratégia individual para hipertrofia, emagrecimento, recomposição corporal ou performance, de qualquer lugar.',
    inclusions: [
      'Avaliação do aluno',
      'Acompanhamento no WhatsApp',
      'Entrega de dieta',
      'Questionário semanal',
      'Avaliação por fotos',
      'Materiais de apoio',
    ],
    prices: [
      'Mensal: R$ 250,00 à vista',
      'Trimestral: R$ 675,00 à vista ou 3x com juros',
      'Semestral: R$ 1.200,00 à vista ou 6x com juros',
    ],
  },
  {
    name: 'Plano Casal',
    label: 'Online',
    accent: 'purple',
    description: 'Acompanhamento online para duas pessoas com estratégia, ajustes e rotina organizada para evoluir junto.',
    inclusions: [
      'Avaliação do aluno para ambos',
      'Acompanhamento no WhatsApp',
      'Entrega de dieta',
      'Questionário semanal',
      'Avaliação por fotos',
      'Materiais de apoio',
    ],
    prices: [
      'Mensal: R$ 440,00 à vista',
      'Trimestral: R$ 1.140,00 à vista ou 3x com juros',
      'Semestral: R$ 2.160,00 à vista ou 6x com juros',
    ],
    note: 'Economia em relação à contratação de dois acompanhamentos individuais.',
  },
]
