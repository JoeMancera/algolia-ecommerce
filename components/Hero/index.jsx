import Image from "next/image";

export const Hero = ({ hero }) => {
  console.log(hero);

  return (
    <>
      <Image
        src={hero.heroImage.url}
        alt={hero.description}
        width={1200}
        height={800}
      />
      <p>{hero.heroTitle}</p>
    </>
  );
};
