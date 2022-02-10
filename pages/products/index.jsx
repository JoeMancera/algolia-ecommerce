import { useRef } from "react";
import algoliasearch from "algoliasearch/lite";
import { Head } from "components/Head";
import { CommonLayout } from "components/CommonLayout";
import { Hero } from "components/Hero";
import { Hit } from "components/Hit";
import { ContentfulHeros } from "@contentful/contentfulHeros";
import {
  InstantSearch,
  SearchBox,
  onSearchStateChange,
  Hits,
} from "react-instantsearch-dom";

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY
);

export default function Products({ hero, searchState, createURL }) {
  const headerRef = useRef(null);

  return (
    <CommonLayout>
      <Head description="Curran list of products">Curran | Products</Head>

      <Hero hero={hero} />

      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          illum enim vero. Aperiam, nihil commodi in cumque quisquam omnis
          veritatis similique blanditiis sed temporibus incidunt minus pariatur
          ipsam impedit dicta!
        </p>
      </div>

      <InstantSearch
        searchClient={searchClient}
        indexName="test_index"
        searchState={searchState}
        createURL={createURL}
        onSearchStateChange={onSearchStateChange}
      >
        <header className="header" ref={headerRef}>
          <SearchBox
            translations={{
              placeholder: "Product, brand, color, …",
            }}
            submit={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 18 18"
              >
                <g
                  fill="none"
                  fillRule="evenodd"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.67"
                  transform="translate(1 1)"
                >
                  <circle cx="7.11" cy="7.11" r="7.11" />
                  <path d="M16 16l-3.87-3.87" />
                </g>
              </svg>
            }
          />
        </header>
        <Hits className="flex" hitComponent={Hit} />
      </InstantSearch>
    </CommonLayout>
  );
}

export async function getStaticProps() {
  const hero = (await ContentfulHeros.getHeroItems(2)) || {};
  return {
    props: { hero },
  };
}
