import {
  CardComponent,
  ResultsCount,
  SearchBar,
  SpellCheck,
  StandardCard,
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
      <VerticalResults
        CardComponent={Card}
        customCssClasses={{
          verticalResultsContainer: gridLayout ? "grid-container" : "",
        }}
      />
    </div>
  );
};

export default VerticalResultsPage;
