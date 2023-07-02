import { Routes, Route } from 'react-router-dom';
<<<<<<< HEAD
=======
import MentoringRequestSection from './Pages/MentoringRequest/MentoringRequest';
>>>>>>> f544ea2 (ss)
import Home from "./Pages/Home/Home.js"
import SearchPage from "./Pages/SearchPage/SearchPage.js"
import UserProfile from "./Pages/UserProfile/UserProfile.js"
import GetInTouch from "./Pages/GetInTouch/GetInTouch.js"
<<<<<<< HEAD
import Opportunity from "./Pages/Opportunity/Opportunity.js"
=======
>>>>>>> f544ea2 (ss)
import NotFound from "./Pages/NotFound/NotFound.js"


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/searchPage" element={<SearchPage />} />
        <Route path="/userProfile" element={<UserProfile />} />
        <Route path="/getInTouch" element={<GetInTouch />} />
<<<<<<< HEAD
        <Route path="/opportunity" element={<Opportunity />} />
=======
        <Route path="/MentoringRequest" element={<MentoringRequestSection />} />
>>>>>>> f544ea2 (ss)
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
