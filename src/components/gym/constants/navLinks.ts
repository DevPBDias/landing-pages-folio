interface ILinks {
  id: number;
  name: string;
  route: string;
}

const navLinks: ILinks[] = [
  { id: 1, name: "Início", route: "#inicio" },
  { id: 2, name: "Quem somos", route: "#somos" },
  { id: 3, name: "Treinadores", route: "#treinador" },
  { id: 4, name: "Planos", route: "#planos" },
  { id: 5, name: "Avaliação", route: "#avaliacao" },
];

export default navLinks;
