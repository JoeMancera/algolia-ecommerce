import { useRouter } from "next/router";
import { Head } from "components/Head";
import { CommonLayout } from "components/CommonLayout";
import { Hero } from "components/Hero";
import { ContentfulHeros } from "@contentful/contentfulHeros";
import { ContentfulBlogPosts } from "@contentful/contentfulBlogPosts";

export default function BlogPost({ hero, blogPost }) {
  const router = useRouter();
  console.log("router", router);
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <CommonLayout>
      <Head description="Curran example">
        Contenful + Algolia | {blogPost.title}
      </Head>

      <Hero hero={hero} />
      <div>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero nihil
          doloribus corporis earum. Corporis omnis ullam repellendus recusandae
          animi! Repellat est expedita provident facilis. Deserunt impedit
          inventore recusandae asperiores id?
        </p>
        <h1 className="text-xl">{blogPost.title}</h1>
      </div>
    </CommonLayout>
  );
}

// This function gets called at build time
export async function getStaticPaths() {
  const blogPostsSlug = (await ContentfulBlogPosts.getSlugBlogPosts()) || {};

  // Get the paths we want to pre-render based on posts
  const paths = blogPostsSlug.map((post) => ({
    params: { slug: post.slug },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const hero = (await ContentfulHeros.getHeroItems(2)) || {};
  const { slug } = params;
  const blogPost = (await ContentfulBlogPosts.getAllBlogPost({ slug })) || {};

  return {
    props: { hero, blogPost },
    revalidate: 1,
  };
}
