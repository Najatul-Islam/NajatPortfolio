"use client";

import { useEffect, useState } from "react";
import { BsCaretUpFill } from "react-icons/bs";

const ScrollBtn = () => {

    const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
   <>
      {show && (
        <button
          onClick={scrollTop}
          className="fixed bottom-6 right-6 border border-blue-500 text-blue-300 p-3 rounded-full shadow-lg hover:text-blue-700 transition"
        >
          <BsCaretUpFill />
        </button>
      )}
    </>
  )
}

export default ScrollBtn
