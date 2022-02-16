import ContentfulApi from "./api";

function cleanBlogsItemsObject(fetchResponse){
  return fetchResponse.data.blogPostCollection.items;
}

export const ContenfulBlogPosts = {
  getBlogPost: async (slug) => {
    const query = `
    query {
      blogPostCollection {
        items {
          sys {
            id
          }
          title
          slug
          heroImage {
            title
            url
            description
          }
          description
          author {
            name
            image {
              url
              description
            }
          }
          body
        }
      }
    }
    `

    const response = await ContentfulApi.callContentful(query);
    if(slug) return cleanBlogsItemsObject(response).find(item => item.slug === slug);

    return cleanBlogsItemsObject(response);
  }
}