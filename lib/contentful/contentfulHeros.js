import ContentfulApi from '@contentful/api'


function cleanHeroItems(fetchResponse, pos) {
 const items = pos !== undefined 
  ? fetchResponse.data.heroCollection?.items?.[pos]
  : fetchResponse.data.heroCollection?.items

  return items
}

export const ContentfulHeros = {
  /*
   * get hero items, if you want to get a specific position, pass the position as a parameter
   * param: pos (number)
   */
  getHeroItems: async (pos) => {
    const query = `
      query {
        heroCollection {
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
    const heroItems = cleanHeroItems(response, pos);
    return heroItems;
  }
}

