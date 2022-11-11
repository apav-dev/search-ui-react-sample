import "./index.css";
import {
  ResultsCount,
  SearchBar,
  SectionComponent,
  SectionProps,
  SpellCheck,
  StandardCard,
  UniversalResults,
} from "@yext/search-ui-react";
import ProductCard from "../product-card";
import NavBar from "../nav-bar";
import { usePageSetupEffect } from "../../hooks/usePageSetupEffect";
import { useSearchParams } from "react-router-dom";

const GridSection: SectionComponent = ({
  results,
  CardComponent,
}: SectionProps): JSX.Element => {
  const SectionCard = CardComponent ?? StandardCard;

  return (
    <div className="grid-container">
      {results.map((result) => (
        <SectionCard result={result} />
      ))}
    </div>
  );
};

const UniversalSearchPage = (): JSX.Element => {
  usePageSetupEffect();

  let [searchParams, setSearchParams] = useSearchParams();

  const handleSearch = (searchEventData: {
    verticalKey?: string;
    query?: string;
  }) => {
    const { query } = searchEventData;
    debugger;
    if (query) {
      searchParams.set("query", query);
    } else {
      searchParams.delete("query");
    }

    setSearchParams(searchParams);
  };
  return (
    <div className="search-container">
      <SearchBar
        placeholder="Search for products, collections, categories"
        onSearch={handleSearch}
      />
      <NavBar />
      <SpellCheck />
      <ResultsCount />
      <UniversalResults
        verticalConfigMap={{
          products: {
            CardComponent: ProductCard,
            label: "Products",
            SectionComponent: GridSection,
          },
          collection: { label: "Collections" },
          product_category: { label: "Categories" },
        }}
      />
    </div>
  );
};

export default UniversalSearchPage;
