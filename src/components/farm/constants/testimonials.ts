import testimonial1 from "@/assets/farm/images/testimonial1.png";

interface ITestimonial {
  id: number;
  name: string;
  type: string;
  image: any;
  comment: string;
}

const testimonials: ITestimonial[] = [
  {
    id: 1,
    name: "Tyrese Gibson",
    type: "Customer",
    image: testimonial1,
    comment:
      "“Lorem ipsum dolor sit amet consectetur. Tortor tempus cursus leo dictumst elementum. Sagittis elit turpis dignissim turpis tristique venenatis. Tempor id commodo odio nunc id volutpat libero. Ut hendrerit malesuada netus sapien dictum sapien nibh. Cras laoreet risus mus mi commodo volutpat quis neque. Scelerisque at in in id donec ornare velit. Posuere amet lobortis volutpat purus mauris. Tortor magna non turpis ultricies iaculis rhoncus. Volutpat lectus proin pellentesque platea.”",
  },
];

export default testimonials;
