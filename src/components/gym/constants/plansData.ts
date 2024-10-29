interface IPlan {
  id: number;
  type: string;
  price: number;
  advantages: string[];
}

const plansData: IPlan[] = [
  {
    id: 1,
    type: "Plano Iniciante",
    price: 90,
    advantages: [
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
    ],
  },
  {
    id: 2,
    type: "Plano Premium",
    price: 135,
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
    price: 180,
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
