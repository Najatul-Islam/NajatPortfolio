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
          className="fixed bottom-6 right-6 bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-700 transition"
        >
          <BsCaretUpFill />
        </button>
      )}
    </>
  )
}

export default ScrollBtn
