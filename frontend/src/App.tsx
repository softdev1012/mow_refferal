import React from "react";
// import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
// import { rootRouter } from "./routes";
import "./App.css";
import {
  QueryClient,
  QueryErrorResetBoundary,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";
import "react-toastify/dist/ReactToastify.css";
import AdminDashboard from "./pages/AdminDashboard";
import UsersDashboard from "./pages/UsersDashboard";
import Groups from "./pages/Groups";
import OwnerDashboard from "./pages/OwnerDashboard";
import Meeting from "./pages/Meeting";
import ReferralDashboard from "./pages/ReferralDashboard";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import LandingPage from "./pages/LandingPage";
import UserProfileDashboard from "./pages/UserProfileDashboard";
import Profile from "./pages/Profile";
import UserViewGroup from "./pages/UserViewGroup";
import UserViewSingleGroup from "./pages/UserViewSingleGroup";
import UserViewAllMeetings from "./pages/UserViewAllMeetings";
import UserViewSingleMeetings from "./pages/UserViewSingleMeeting";
import PrivateRoute from "./components/common/PrivateRoutes";
import { AuthProvider } from "./components/common/AuthProvider";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  const queryClient = new QueryClient();
  return (
    <React.Fragment>
      <QueryClientProvider client={queryClient}>
        <ToastContainer />
        <QueryErrorResetBoundary>
          {({ reset }) => (
            <ErrorBoundary
              onReset={reset}
              fallbackRender={({ resetErrorBoundary }) => (
                <div>
                  There was an error!
                  <button
                    onClick={() => {
                      resetErrorBoundary();
                    }}
                  >
                    Try again
                  </button>
                </div>
              )}
            >
              <Router>
                <AuthProvider>
                  <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route element={<PrivateRoute />}>
                      <Route
                        path="/admin/dashboard" 
                        element={<AdminDashboard />}
                      />
                      <Route
                        path="/users"
                        element={<UsersDashboard />}
                      />
                      <Route
                        path="/referral/dashboard" 
                        element={<ReferralDashboard />}
                      />
                      <Route
                        path="/groups" 
                        element={<Groups />}
                      />
                      <Route
                        path="/owner/dashboard" 
                        element={<OwnerDashboard />}
                      />
                      <Route
                        path="/meeting" 
                        element={<Meeting/>}
                      />
                       <Route
                        path="/user/profile/:id" 
                        element={<Profile/>}
                      />
                      <Route
                        path="/profile" 
                        element={<UserProfileDashboard/>}
                      />
                      <Route
                        path="/user/group" 
                        element={<UserViewGroup/>}
                      />
                      <Route
                        path="/user/singlegroup/:id" 
                        element={<UserViewSingleGroup/>}
                      />
                      <Route
                        path="/user/meeting" 
                        element={<UserViewAllMeetings/>}
                      />
                      <Route
                        path="/user/singlemeeting/:id" 
                        element={<UserViewSingleMeetings/>}
                      />
                    </Route>
                  </Routes>
                </AuthProvider>
              </Router>
            </ErrorBoundary>
          )}
        </QueryErrorResetBoundary>
      </QueryClientProvider>
    </React.Fragment>
  );
}

export default App;
