interface ILinks {
  id: number;
  name: string;
  route: string;
}

const headerLinks: ILinks[] = [
  { id: 1, name: "Home", route: "#home" },
  { id: 2, name: "About", route: "#about" },
  { id: 3, name: "Products", route: "#products" },
  { id: 4, name: "Projects", route: "#projects" },
  { id: 5, name: "Services", route: "#services" },
  { id: 6, name: "News", route: "#news" },
  { id: 7, name: "Contact", route: "#contact" },
];

export default headerLinks;
