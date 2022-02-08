import Image from "next/image";
import styles from "./Hero.module.css";

export const Hero = ({ hero }) => {
  return (
    <header className={styles.header}>
      <Image
        src={hero.heroImage.url}
        alt={hero.description}
        layout="fill"
        objectFit="cover"
        priority={true}
      />
      <p>{hero.heroTitle}</p>
    </header>
  );
};
