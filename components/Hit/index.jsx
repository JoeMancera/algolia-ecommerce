import Image from "next/image";
import { Highlight, Snippet } from "react-instantsearch-dom";

export const Hit = ({ hit }) => {
  return (
    <article className="flex w-full">
      <header className="hit-image-container">
        <Image
          width="100px"
          height="200px"
          src={hit.image}
          alt={hit.name}
          className="hit-image"
        />
      </header>

      <div className="ml-4">
        <p className="hit-category">{hit.categories[0]}</p>
        <h2>
          <Highlight attribute="name" tagName="mark" hit={hit} />
        </h2>
        <p className="hit-description">
          <Snippet attribute="description" tagName="mark" hit={hit} />
        </p>

        <footer>
          <p>
            <span className="hit-em">$</span> <strong>{hit.price}</strong>{" "}
            <span className="hit-em hit-rating">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="8"
                viewBox="0 0 16 16"
              >
                <path
                  fill="#e2a400"
                  fillRule="evenodd"
                  d="M10.472 5.008L16 5.816l-4 3.896.944 5.504L8 12.616l-4.944 2.6L4 9.712 0 5.816l5.528-.808L8 0z"
                />
              </svg>{" "}
              {hit.popularity}
            </span>
          </p>
        </footer>
      </div>
    </article>
  );
};
