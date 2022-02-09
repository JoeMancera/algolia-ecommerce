import ContentfulApi from '@contentful/api'

function cleanHeroItems(fetchResponse, pos) {
 const items = pos !== undefined 
  ? fetchResponse.data.heroCollection?.items?.[pos]
  : fetchResponse.data.heroCollection?.items

  return items
}

export const ContentfulHeros = {
  /** 
   * Get hero items from contentful, if you want to get a specific position, pass the position as a parameter
   * param: position (number)
   */
  getHeroItems: async (position) => {
    const query = `
      query {
        heroCollection (order: sys_id_DESC) {
          items {
            sys{
              id
            }
            heroTitle
            heroImage {
              title
              description
              url
            }
          }
        }
      }
    `

    const response = await ContentfulApi.callContentful(query);
    const heroItems = cleanHeroItems(response, position);
    return heroItems;
  }
}

