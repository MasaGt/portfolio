import Image from "next/image";

const Card = ({
  children,
}: {
  children: { img: string; title: string; description: string };
}) => {
  return (
    <div className="workcard">
      <Image
        src={`/${children.img}`}
        alt={`${children.title}'s image`}
        width={300}
        height={300}
      />
      <div className="workcard_title text-white">{children.title}</div>
    </div>
  );
};

export default Card;
