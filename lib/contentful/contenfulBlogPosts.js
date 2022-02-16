import ContentfulApi from "./api";

function cleanBlogsItemsObject(fetchResponse){
  return fetchResponse.data.blogPostCollection.items;
}

export const ContenfulBlogPosts = {
  /** 
   * Get BlogPost slugs from contentful, this is for create a dynamic routes
   */
  getSlugBlogPosts: async () => {
    const query = `
    query {
      blogPostCollection {
        items {
          sys {
            id
          }
          slug
        }
      }
    }
    `

    const response = await ContentfulApi.callContentful(query);
    return cleanBlogsItemsObject(response);
  },
  getAllBlogPost: async ({slug = ''} = {}) => {
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