export type PlanVariant = 'gold' | 'red' | 'purple'

export type Plan = {
  id: 'premium-presencial' | 'online-individual' | 'casal-online'
  name: string
  badge: string
  shortDescription: string
  description: string
  variant: PlanVariant
  inclusions: string[]
  prices: string[]
  note: string
}

export const plans: Plan[] = [
  {
    id: 'premium-presencial',
    name: 'Premium Presencial',
    badge: 'Mais completo',
    shortDescription:
      'Para quem quer acompanhamento completo, com avaliação presencial e análise antropométrica com imagens.',
    description:
      'O acompanhamento mais completo para quem quer avaliação presencial e análise mais detalhada da evolução.',
    variant: 'gold',
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
    note: 'Inclui avaliação antropométrica presencial com imagens.',
  },
  {
    id: 'online-individual',
    name: 'Online Individual',
    badge: 'Mais prático',
    shortDescription:
      'Para quem busca evolução com praticidade, acompanhamento à distância e ajustes semanais.',
    description: 'Para quem quer acompanhamento estratégico, sem depender de atendimento presencial.',
    variant: 'red',
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
    note: 'Formato ideal para quem busca praticidade, acompanhamento próximo e evolução à distância.',
  },
  {
    id: 'casal-online',
    name: 'Casal Online',
    badge: 'Melhor para dois',
    shortDescription:
      'Para casais que querem evoluir juntos, com acompanhamento online e melhor custo-benefício.',
    description:
      'Para casais que querem evoluir juntos, com acompanhamento individualizado e economia em relação a dois planos separados.',
    variant: 'purple',
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
