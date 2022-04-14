import { Route, Routes } from "react-router-dom";
import SubmitHandler from "./SubmitHandler";
import QuestionMainPage from "./QuestionMainPage";
import HomePage from "./HomePage";

function Routing() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/question/*" element={<QuestionMainPage />} />
        <Route path="/result" element={<SubmitHandler />} />
      </Routes>
    </div>
  );
}

export default Routing;
