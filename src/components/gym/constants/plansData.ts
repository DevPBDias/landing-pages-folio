interface IPlan {
  id: number;
  type: string;
  price: { month: number; annual: number };
  advantages: string[];
}

const plansData: IPlan[] = [
  {
    id: 1,
    type: "Plano Iniciante",
    price: { month: 90, annual: 90 * 12 },
    advantages: [
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
    ],
  },
  {
    id: 2,
    type: "Plano Premium",
    price: { month: 135, annual: 135 * 12 },
    advantages: [
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
    ],
  },
  {
    id: 3,
    type: "Plano Experiente",
    price: { month: 180, annual: 180 * 12 },
    advantages: [
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
    ],
  },
];

export default plansData;
