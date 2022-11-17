import "./index.css";
import {
  ResultsCount,
  SearchBar,
  SpellCheck,
  StandardFacets,
  UniversalResults,
  VerticalResults,
} from "@yext/search-ui-react";
import ProductCard from "../product-card";
import NavBar from "../nav-bar";
import { usePageSetupEffect } from "../../hooks/usePageSetupEffect";
import { useSearchParams } from "react-router-dom";
import {
  provideHeadless,
  SearchHeadlessProvider,
  useSearchActions,
} from "@yext/search-headless-react";
import Product from "../../types/products";
import { useEffect, useState } from "react";
import headlessConfig from "../../config/headlessConfig";

const universalSearcher = provideHeadless({
  ...headlessConfig,
  headlessId: "universal-searcher",
});

interface UniversalSearchProps {
  query?: string;
}

const UniversalSearch = ({ query }: UniversalSearchProps) => {
  const searchActions = useSearchActions();

  useEffect(() => {
    searchActions.setQuery(query || "");
    searchActions.executeUniversalQuery();
  }, [query]);

  return (
    <UniversalResults
      customCssClasses={{
        universalResultsContainer: "universal-results-container",
        universalResultsLoading: "hidden",
      }}
      verticalConfigMap={{
        collection: { label: "Collections" },
        product_category: { label: "Categories" },
        products: {
          SectionComponent: () => <></>,
        },
      }}
    />
  );
};

const UniversalSearchPage = (): JSX.Element => {
  usePageSetupEffect("products");

  let [searchParams, setSearchParams] = useSearchParams();
  const [universalQuery, setUniversalQuery] = useState("");

  useEffect(() => {
    setUniversalQuery(searchParams.get("query") || "");
  }, [searchParams]);

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
      <SearchBar
        placeholder="Search for products, collections, categories"
        onSearch={handleSearch}
      />
      <NavBar />
      <SpellCheck />
      <ResultsCount />
      <div className="flex-container">
        <div className="facets-container">
          <StandardFacets />
        </div>
        <VerticalResults<Product>
          CardComponent={ProductCard}
          customCssClasses={{
            verticalResultsContainer: "grid-container",
          }}
        />
      </div>
      <SearchHeadlessProvider searcher={universalSearcher}>
        <UniversalSearch query={universalQuery} />
      </SearchHeadlessProvider>
    </div>
  );
};

export default UniversalSearchPage;
