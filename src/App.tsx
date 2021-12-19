import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "@pages/NotFound";

export default function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
