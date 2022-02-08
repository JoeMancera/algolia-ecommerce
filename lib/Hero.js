const queryGraphQL = `
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

export async function fetchGraphQL( query, preview = false) {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
    }
  )
  .then((response) => response.json())
  .catch((error) => console.log("Aquí petó",error))
}


function extraHeroItems(fetchResponse) {
  return fetchResponse?.data?.heroCollection?.items?.[0]
}

export async function getHomeHero() {
  const entries = await fetchGraphQL(queryGraphQL)
  return extraHeroItems(entries)
}