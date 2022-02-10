import { useRef } from "react";
import algoliasearch from "algoliasearch/lite";
import { Head } from "components/Head";
import { CommonLayout } from "components/CommonLayout";
import { Hero } from "components/Hero";
import { Hit } from "components/Hit";
import SearchForm from "components/SearchForm";
import { ContentfulHeros } from "@contentful/contentfulHeros";
import {
  InstantSearch,
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
          <SearchForm />
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
