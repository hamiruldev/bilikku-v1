import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Suspense } from "react";
import Spinner from "./components/Spinner";
import Login from "./pages/login/Login";
import ManagerDashboard from "./pages/dashboard/ManagerDashboard";
import OwnerDashboard from "./pages/dashboard/OwnerDashboard";
import TenantRoom from "./pages/my-room/TenantRoom";
import Reports from "./pages/reports/Reports";
import Repairs from "./pages/repairs/Repairs";
import RoleLayout from "./layouts/RoleLayout";

function App() {
  // TODO: Replace with real auth/role logic
  const user = { role: undefined };
  const redirect = undefined;

  return (
    <BrowserRouter>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<RoleLayout user={user} />}> {/* Role-based layout */}
            <Route path="/dashboard/manager" element={<ManagerDashboard />} />
            <Route path="/dashboard/owner" element={<OwnerDashboard />} />
            <Route path="/my-room" element={<TenantRoom />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/repairs" element={<Repairs />} />
          </Route>
          <Route path="*" element={<Navigate to={user ? redirect || "/login" : "/login"} />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
