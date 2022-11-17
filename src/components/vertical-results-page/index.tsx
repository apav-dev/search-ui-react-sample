import { useSearchState } from "@yext/search-headless-react";
import {
  CardComponent,
  ResultsCount,
  SearchBar,
  SpellCheck,
  StandardCard,
  StandardFacets,
  VerticalResults,
} from "@yext/search-ui-react";
import { useSearchParams } from "react-router-dom";
import { usePageSetupEffect } from "../../hooks/usePageSetupEffect";
import NavBar from "../nav-bar";

interface VerticalResultsPageProps {
  verticalKey: string;
  searchBarPlaceholder?: string;
  CardComponent?: CardComponent;
  gridLayout?: boolean;
}

const VerticalResultsPage = ({
  verticalKey,
  searchBarPlaceholder,
  CardComponent,
  gridLayout,
}: VerticalResultsPageProps) => {
  usePageSetupEffect(verticalKey);

  const Card = CardComponent ?? StandardCard;

  let [searchParams, setSearchParams] = useSearchParams();

  const facets = useSearchState((state) => state.filters.facets);

  const handleSearch = (searchEventData: {
    verticalKey?: string;
    query?: string;
  }) => {
    const { query } = searchEventData;
    if (query) {
      searchParams.set("query", query);
    } else {
      searchParams.delete("query");
    }

    setSearchParams(searchParams);
  };

  return (
    <div className="search-container">
      <SearchBar placeholder={searchBarPlaceholder} onSearch={handleSearch} />
      <NavBar />
      <SpellCheck />
      <ResultsCount />
      <div className={facets && facets.length > 0 ? "flex-container" : ""}>
        {facets && facets.length > 0 && (
          <div className="facets-container">
            <StandardFacets />
          </div>
        )}
        <VerticalResults
          CardComponent={Card}
          customCssClasses={{
            verticalResultsContainer: gridLayout ? "grid-container" : "",
          }}
        />
      </div>
    </div>
  );
};

export default VerticalResultsPage;
