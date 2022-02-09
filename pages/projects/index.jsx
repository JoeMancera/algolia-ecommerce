import { Head } from "components/Head";
import { CommonLayout } from "components/CommonLayout";
import { Hero } from "components/Hero";
import { ContentfulHeros } from "@contentful/contentfulHeros";
import { ContentfulProjects } from "@contentful/contentfulProjects";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";

export default function Projects({ hero, projects }) {
  console.log(projects);
  const richTextOptions = {
    renderMark: {
      [MARKS.BOLD]: (text) => <b>{text}</b>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <p className="relative">{children}</p>
      ),
    },
    renderText: (text) => text.replace("!", "?"),
  };

  return (
    <CommonLayout>
      <Head description="Curran example">Curran | Projects</Head>

      <Hero hero={hero} />
      <div>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero nihil
          doloribus corporis earum. Corporis omnis ullam repellendus recusandae
          animi! Repellat est expedita provident facilis. Deserunt impedit
          inventore recusandae asperiores id?
        </p>
        <section>
          <h2>Projects</h2>
          {projects.map((project) => {
            return (
              <div key={project.sys.id} style={{ position: "relative" }}>
                <Image
                  src={project.image.url}
                  alt={project.image.description}
                  layout="fill"
                  objectFit="cover"
                  priority={true}
                />
                <h3 className="z-10 relative">{project.title}</h3>
                {documentToReactComponents(
                  project.description.json,
                  richTextOptions
                )}
              </div>
            );
          })}
        </section>
      </div>
    </CommonLayout>
  );
}

export async function getStaticProps() {
  const hero = (await ContentfulHeros.getHeroItems(1)) || {};
  const projects = (await ContentfulProjects.getProjects()) || [];
  return {
    props: { hero, projects },
  };
}
