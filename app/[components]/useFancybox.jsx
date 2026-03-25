import React from 'react'
import { useState, useEffect } from "react";

import { Fancybox } from "@fancyapps/ui/dist/fancybox/";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

const useFancybox = () => {
 const [root, setRoot] = useState(null);

  useEffect(() => {
    if (root) {
      Fancybox.bind(root, "[data-fancybox]", options);
      return () => Fancybox.unbind(root, "[data-fancybox]");
    }
  }, [root, options]);

  return [setRoot];
}

export default useFancybox
