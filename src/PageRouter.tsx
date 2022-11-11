import { Route, Routes, BrowserRouter } from "react-router-dom";
import ProductCard from "./components/product-card";
import UniversalSearchPage from "./components/universal-search-page";
import VerticalResultsPage from "./components/vertical-results-page";

export const routeConfig: {
  label: string;
  path: string;
  element: JSX.Element;
}[] = [
  {
    label: "All",
    path: "/",
    element: <UniversalSearchPage />,
  },
  {
    label: "Products",
    path: "/products",
    element: (
      <VerticalResultsPage
        verticalKey="products"
        searchBarPlaceholder="Search for Products"
        CardComponent={ProductCard}
        gridLayout
      />
    ),
  },
  {
    label: "Collections",
    path: "/collections",
    element: (
      <VerticalResultsPage
        verticalKey="collection"
        searchBarPlaceholder="Search for Collections"
      />
    ),
  },
  {
    label: "Categories",
    path: "/categories",
    element: (
      <VerticalResultsPage
        verticalKey="product_category"
        searchBarPlaceholder="Search for Categories"
      />
    ),
  },
];

export const PageRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routeConfig.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};
