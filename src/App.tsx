import "./App.css";
import {
  ResultsCount,
  SearchBar,
  SpellCheck,
  StandardCard,
  VerticalResults,
} from "@yext/search-ui-react";

function App() {
  return (
    <div className="outer-container">
      <div className="inner-container">
        <h1 className="search-title">Search UI React</h1>
        <SearchBar placeholder="Search for products" />
        <SpellCheck />
        <ResultsCount />
        <VerticalResults
          CardComponent={StandardCard}
          displayAllOnNoResults={false}
        />
      </div>
    </div>
  );
}

export default App;
