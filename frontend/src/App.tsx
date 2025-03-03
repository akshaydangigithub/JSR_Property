import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import AboutPage from "@/pages/about";
import ListingPage from "@/pages/listing";
import ListingDetailsPage from "@/pages/propertyDetails";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<AboutPage />} path="/about" />
      <Route element={<ListingPage />} path="/listing" />
      <Route element={<ListingDetailsPage />} path="/listing/:id" />
    </Routes>
  );
}

export default App;
