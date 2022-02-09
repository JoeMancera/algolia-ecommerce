import ContentfulApi from "./api";

function cleanProjectsObject(fetchResponse){
  return fetchResponse.data.projectCollection.items;
}

export const ContentfulProjects = {
  /**
   * Get all projects from Contentful
   */
  getProjects: async () => {
    const query = `
    query {
      projectCollection {
        items {
          sys {
            id
          }
          title
          description {
            json
          }
          url
          image {
            title
            description
            url
          }
        }
      }
    }
    `
    const response = await ContentfulApi.callContentful(query);
    return cleanProjectsObject(response)
  }
}