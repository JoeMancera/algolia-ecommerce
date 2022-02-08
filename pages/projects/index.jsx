import { Head } from "components/Head";
import { CommonLayout } from "components/CommonLayout";
import { Hero } from "components/Hero";
import { getProjectsHero } from "lib/Hero";

export default function Projects({ hero }) {
  return (
    <CommonLayout>
      <Head description="Curran example">Curran | Home</Head>

      <Hero hero={hero} />
      <div>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero nihil
          doloribus corporis earum. Corporis omnis ullam repellendus recusandae
          animi! Repellat est expedita provident facilis. Deserunt impedit
          inventore recusandae asperiores id?
        </p>
      </div>
    </CommonLayout>
  );
}

export async function getStaticProps() {
  const hero = (await getProjectsHero()) || {};
  return {
    props: { hero },
  };
}
