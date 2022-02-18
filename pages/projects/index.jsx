import { Head } from "components/Head";
import { CommonLayout } from "components/CommonLayout";
import { Hero } from "components/Hero";
import { ContentfulHeros } from "@contentful/contentfulHeros";
import { ContentfulProjects } from "@contentful/contentfulProjects";
import { Project } from "components/Project";
import ProjectList from "components/ProjectList";
import { SHEETS_URI } from "lib/Sheets";

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

  let array = [];
  let prices = [];

  await fetch(`${SHEETS_URI}`)
    .then((response) => response.blob())
    .then(function (myBlob) {
      myBlob.text().then((text) => (array = text.toString().split("\r\n")));
    });

  let headers = array[0].split(",");

  for (let i = 1; i < array.length - 1; i++) {
    let obj = {};

    let str = array[i];

    let properties = str.split(",");

    for (let j in headers) {
      obj[headers[j]] = properties[j];
    }

    prices.push(obj);
  }

  console.log(prices);
  return {
    props: { hero, projects },
    revalidate: 1,
  };
}
