import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChooseRole from "./pages/ChooseRole";
import Register from "./pages/Register";
import Index from "./pages/Index";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import ValidateToken from "./pages/ValidateToken";
import UpdatePassword from "./pages/UpdatePassword";
import AccountSettings from "./pages/AccountSettings";
import NotFound from "./pages/NotFound";
import UserDashboard from "./pages/UserDashboard";
import FinanceLayout from "./pages/FinanceLayout";
import AddCard from "./pages/AddCard";
import CarManagement from "./pages/CarManagement";
import AddCar from "./pages/AddCar";
import OrdersPage from "./pages/OrdersPage";
import OrderDetails from "./pages/OrderDetails";
import TaxiDashboard from "./pages/TaxiDashboard";
import CourseEnCours from "./pages/CourseEnCours";
import CoursList from "./pages/CoursList";
import ChatCoursePage from "./pages/ChatCoursePage";
import DriverDashboard from "./pages/DriverDashboard";
import ArriveeCourse from "./pages/ArriveeCourse";
import UserTransactionsList from "./pages/UserTransactionsList";
import CourseRequestPage from "./pages/User/CourseRequestPage";
import UserComments from "./pages/User/UserComments";

function App() {
  return (
    <>
      <Router>
        <Routes>
           {/* <Route path="/" element={<ChooseRole/>} /> */}
           <Route path="/comments" element={<UserComments/>} />
            <Route path="/course-request/:id" element={<CourseRequestPage />} />
            <Route path="/user-transaction-list/:id" element={<UserTransactionsList />} />
           <Route path="/list-course-disponible/:id" element={< TaxiDashboard/>} />
           <Route path="/arrivee-course/:id" element={<ArriveeCourse />} />
           <Route path="/driver-dashboard/:id" element={< DriverDashboard/>} />
           <Route path="/cours-list" element={< CoursList/>} />
           <Route path="/chat-course" element={< ChatCoursePage/>} />
           <Route path="/course-en-cours/:id" element={<CourseEnCours />} />
          <Route path="/facturation" element={<FinanceLayout />} />
           <Route path="/commandes" element={<OrdersPage />} />
           <Route path="/order" element={<OrderDetails />} />
          <Route path="/addcar" element={<AddCar />} />
          <Route path="/car" element={<CarManagement />} />
           <Route path="/addCard" element={<AddCard />} />
          <Route path="/" element={<Register />} />
          <Route path="/index/:id" element={<Index />} />
          <Route path="/login/:role" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/validate-token" element={<ValidateToken />} />
          <Route path="/reset-password" element={<UpdatePassword />} />
          <Route path="/account-settings/:id" element={<AccountSettings />} />
          <Route path="/user-dashboard/:id" element={<UserDashboard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
