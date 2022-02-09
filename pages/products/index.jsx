import { Head } from "components/Head";
import { CommonLayout } from "components/CommonLayout";
import { Hero } from "components/Hero";
import { ContentfulHeros } from "@contentful/contentfulHeros";

export default function Products({ hero }) {
  return (
    <CommonLayout>
      <Head description="Curran list of products">Curran | Products</Head>

      <Hero hero={hero} />
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          illum enim vero. Aperiam, nihil commodi in cumque quisquam omnis
          veritatis similique blanditiis sed temporibus incidunt minus pariatur
          ipsam impedit dicta!
        </p>
      </div>
    </CommonLayout>
  );
}

export async function getStaticProps() {
  const hero = (await ContentfulHeros.getHeroItems(2)) || {};
  return {
    props: { hero },
  };
}
