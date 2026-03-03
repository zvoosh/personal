import React from "react";
import { Image } from "antd";

type CardItem = {
  img: string;
  title: string;
  textColor?: string;
};

type Props = {
  cards: CardItem[];
};

const Carousel: React.FC<Props> = ({ cards }) => {
  //   const carouselRef = useRef<CarouselRef | null>(null);

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-6 w-full h-fit relative px-[40px] overflow-hidden">
      <Image.PreviewGroup>
        {cards.map((card) => (
          <Image key={card.img} src={card.img} />
        ))}
      </Image.PreviewGroup>
    </section>
  );
};

export default Carousel;
