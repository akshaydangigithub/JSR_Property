import { Navigate, Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import AboutPage from "@/pages/about";
import ListingPage from "@/pages/listing";
import ListingDetailsPage from "@/pages/propertyDetails";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Contact from "./pages/contact";
import { useEffect, useState } from "react";
import AdminDashboard from "./pages/admin/adminDashboard";
import AddProperty from "./pages/admin/property/AddProperty";
import AllProperty from "./pages/admin/property/AllProperty";
import VisitRequest from "./pages/admin/property/VisitRequest";
import DefaultAdminLayout from "./layouts/adminLayout";
import PropertyDetailsAdmin from "./pages/admin/property/PropertyDetailsAdmin";
import AllBroker from "./pages/admin/broker/AllBroker";
import AllUser from "./pages/admin/allUser";
import DefaultBrokerLayout from "./layouts/brokerLayout";
import AllProperties from "./pages/broker/AllProperties";
import AddProperties from "./pages/broker/AddProperties";
import PropertyDetailsBroker from "./pages/broker/PropertyDetailsBroker";

function App() {
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(true);

  useEffect(() => {
    setIsAdminAuthenticated(true);
  }, []);

  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<AboutPage />} path="/about" />
      <Route element={<ListingPage />} path="/listing" />
      <Route element={<ListingDetailsPage />} path="/listing/:id" />
      <Route element={<Login />} path="/login" />
      <Route element={<Signup />} path="/signup" />
      <Route element={<Contact />} path="/contact" />

      {isAdminAuthenticated ? (
        <Route path="/admin" element={<DefaultAdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="property/add" element={<AddProperty />} />
          <Route path="property/all" element={<AllProperty />} />
          <Route path="property/visit-request" element={<VisitRequest />} />
          <Route
            path="property/details/:id"
            element={<PropertyDetailsAdmin />}
          />
          <Route path="brokers/all" element={<AllBroker />} />
          <Route path="users" element={<AllUser />} />
        </Route>
      ) : (
        // Redirect to login page if not authenticated
        <Route path="/admin/*" element={<Navigate to="/login" />} />
      )}

      {isAdminAuthenticated ? (
        <Route path="/broker" element={<DefaultBrokerLayout />}>
          <Route path="property/all" element={<AllProperties />} />
          <Route path="property/add" element={<AddProperties />} />
          <Route
            path="property/details/:id"
            element={<PropertyDetailsBroker />}
          />
        </Route>
      ) : (
        // Redirect to login page if not authenticated
        <Route path="/broker/*" element={<Navigate to="/login" />} />
      )}
    </Routes>
  );
}

export default App;
