import { Head } from "components/Head";
import { CommonLayout } from "components/CommonLayout";
import { Hero } from "components/Hero";
import { ContentfulHeros } from "@contentful/contentfulHeros";
import { ContenfulBlogPosts } from "@contentful/contenfulBlogPosts";
import Image from "next/image";

export default function Blog({ hero, blogPosts }) {
  console.log("blogPosts", blogPosts);
  return (
    <CommonLayout>
      <Head description="Curran example">Contenful + Algolia | Home</Head>

      <Hero hero={hero} />
      <div>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero nihil
          doloribus corporis earum. Corporis omnis ullam repellendus recusandae
          animi! Repellat est expedita provident facilis. Deserunt impedit
          inventore recusandae asperiores id?
        </p>

        <ul className="grid grid-cols-3 gap-4">
          {blogPosts.map(({ title, slug, heroImage }) => {
            return (
              <li className="flex flex-col relative" key={slug}>
                <a
                  className="text-blue-600 hover:text-orange-500"
                  href={`/blog/${slug}`}
                >
                  {title}
                </a>
                <Image
                  width="350px"
                  height="200px"
                  src={heroImage.url}
                  alt={heroImage.title}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </CommonLayout>
  );
}

export async function getStaticProps() {
  const hero = (await ContentfulHeros.getHeroItems(2)) || {};
  const blogPosts = (await ContenfulBlogPosts.getBlogPosts()) || {};
  return {
    props: { hero, blogPosts },
  };
}
