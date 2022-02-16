import { Head } from "components/Head";
import { CommonLayout } from "components/CommonLayout";
import { Hero } from "components/Hero";
import { ContentfulHeros } from "@contentful/contentfulHeros";
import { ContentfulProjects } from "@contentful/contentfulProjects";
import { Project } from "components/Project";
import ProjectList from "components/ProjectList";

export default function Projects({ hero, projects }) {
  return (
    <CommonLayout>
      <Head description="Curran example">Contenful + Algolia | Projects</Head>

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
          <ProjectList>
            {projects.map((project) => {
              return <Project key={project.sys.id} project={project} />;
            })}
          </ProjectList>
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
