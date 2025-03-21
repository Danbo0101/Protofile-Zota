import { Outlet } from "react-router-dom";
import Header from "./component/Header/Header";
import { useEffect, useRef, useState } from "react";
import Footer from "./component/Footer/Footer";
import { ArrowUp } from "lucide-react";




const App = (props) => {

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };





  return (
    <div className="w-full" >
      <Header />
      <Outlet />
      <Footer />
      <div
        onClick={scrollToTop}
        className={`cursor-pointer fixed bottom-10 right-5 p-3 bg-pink-400 text-white rounded-full shadow-lg transition-opacity duration-300 ${visible ? "opacity-100" : "opacity-0"
          }`}
      >
        <ArrowUp size={24} />
      </div>
    </div>
  );
};

export default App;