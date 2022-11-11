import "./App.css";
import { PageRouter } from "./PageRouter";

function App() {
  return (
    <div className="outer-container">
      <h1 className="search-title">Search UI React</h1>
      <PageRouter />
    </div>
  );
}

export default App;

// Notes
// 1. The issue where the background color was appearing black was due to the styles in main.css. There was a dark background color set on the body element and I removed most of the styles there.
// 2. I did not set a vertical key in the in the HeadlessConfig in main.tsx because I want to use universal search when you land on the home page.
// 3. I ran yext types generate search src/types --experienceKey test-kering to generated the types for the search experience.
