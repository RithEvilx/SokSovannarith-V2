import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./views/Home";

export default function Router() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
