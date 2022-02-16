import { Head } from "components/Head";
import { CommonLayout } from "components/CommonLayout";
import { Hero } from "components/Hero";
import { ContentfulBlogPosts } from "@contentful/contentfulBlogPosts";
import ReactMarkdown from "react-markdown";

export default function BlogPost({ blogPost }) {
  const hero = {
    heroImage: blogPost.heroImage,
    heroTitle: blogPost.title,
    description: blogPost.description,
  };

  return (
    <CommonLayout>
      <Head description="Curran example">
        Contentful + Algolia | {blogPost.title}
      </Head>

      <Hero hero={hero} />
      <ReactMarkdown
        components={{
          h2: (props) => (
            <h2 className="text-xl text-orange-600 my-4" {...props} />
          ),
          p: (props) => <p className="ml-2" {...props} />,
          a: (props) => <a className="text-blue-600" {...props} />,
          li: (props) => <li className="ml-8 list-disc" {...props} />,
        }}
        className="mt-4"
      >
        {blogPost.body}
      </ReactMarkdown>
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
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const blogPost = (await ContentfulBlogPosts.getAllBlogPost({ slug })) || {};

  return {
    props: { blogPost },
  };
}
