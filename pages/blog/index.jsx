import Link from "next/link";
import { Head } from "components/Head";
import { CommonLayout } from "components/CommonLayout";
import { Hero } from "components/Hero";
import { ContentfulHeros } from "@contentful/contentfulHeros";
import { ContentfulBlogPosts } from "@contentful/contentfulBlogPosts";
import Image from "next/image";

export default function Blog({ hero, blogPosts }) {
  return (
    <CommonLayout>
      <Head description="Curran example">Contenful + Algolia | Blog</Head>

      <Hero hero={hero} />
      <div>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero nihil
          doloribus corporis earum. Corporis omnis ullam repellendus recusandae
          animi! Repellat est expedita provident facilis. Deserunt impedit
          inventore recusandae asperiores id?
        </p>

        <ul className="grid grid-cols-3 gap-4 mt-3">
          {blogPosts.map(({ title, slug, heroImage, description }) => {
            return (
              <li className="flex flex-col" key={slug}>
                <Link href={`/blog/${slug}`}>
                  <a className="text-blue-500 hover:text-orange-500">
                    <Image
                      className="hover:scale-110 duration-200"
                      width="350px"
                      height="200px"
                      src={heroImage.url}
                      alt={heroImage.title}
                    />
                    <h2 className="font-bold text-lg">{title}</h2>
                    <p className="text-blue-900">{description}</p>
                  </a>
                </Link>
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
  const blogPosts = (await ContentfulBlogPosts.getAllBlogPost()) || {};
  return {
    props: { hero, blogPosts },
  };
}
