import React, { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Spinner from './components/shared/Spinner';
const Dashboard = React.lazy(() => import('./pages/Dashboard/Index'));
const Applicant = React.lazy(() => import('./pages/Loan/Applicant'));
const History = React.lazy(() => import('./pages/Loan/History'));
// const BlankPage = React.lazy(() => import('./general-pages/BlankPage'));

function AppRoutes() {
  return (
    <Suspense fallback={<Spinner/>}>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/Loans">
          <Route path="applicants" element={<Applicant />} />
          <Route path="history" element={<History />} />
        </Route>
        {/* <Route path="/general-pages/blank-page" element={<BlankPage />} /> */}
        <Route path="/" element={<Navigate to="/dashboard" />} />
      </Routes>
    </Suspense>
  );
}

export default AppRoutes;
