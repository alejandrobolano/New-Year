import { useEffect } from "react";
import { getNamesFromUrl } from "./utils/urlParams";
import { Footer } from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Readme from "./pages/Readme";
import { ShareForm } from "./components/ShareForm";
import { NewYearGreeting } from "./components/NewYearGreeting";
import { YearAnimation } from "./components/YearAnimation";


function App() {
  const names = getNamesFromUrl();

  useEffect(() => {
    document.title = `¡Feliz Navidad, ${names.recipient}!`;
  }, [names.recipient]);

  return (
    <Router>
      <Routes>
        <Route
          path="/*"
          element={
            <div className="min-h-screen bg-gradient-to-b from-blue-100 to-purple-100 flex flex-col p-4 relative overflow-hidden min-h-screen">
              <div className="container mx-auto max-w-4xl px-4 py-8 md:py-12 relative">
                <div className="bg-white/80 backdrop-blur-md p-6 md:p-10 rounded-2xl shadow-xl relative">
                  <NewYearGreeting
                    recipient={names.recipient}
                    sender={names.sender}
                  />
                </div>
              </div>
              <ShareForm />
              <YearAnimation />
              <div className="text-center mt-8">
                <Footer />
              </div>
            </div>
          }
        />

        <Route path="/readme" element={<Readme />} />
      </Routes>
    </Router>
  );
}

export default App;
