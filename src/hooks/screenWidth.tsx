import { useEffect, useRef, useState } from "react";

// function getWindowDimensions() {
//   // const { innerWidth: width, innerHeight: height } = window;
//   const width = $(window).width();
//   return {
//     width,
//     // height,
//   };
// }

export const useScreenWidth = () => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Cria o ResizeObserver
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.contentRect) {
          setWidth(entry.contentRect.width); // Atualiza o estado com o width do elemento
        }
      }
    });

    // Observa o elemento
    resizeObserver.observe(element);

    // Limpa o observer ao desmontar
    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  // const [screenWidth, setScreenWidth] = useState<number>(0);
  // const handleWindowSizeChange = () => {
  //   setScreenWidth(getWindowDimensions().width);
  // };

  // useEffect(() => {
  //   window.addEventListener("resize", handleWindowSizeChange);
  //   return () => {
  //     window.removeEventListener("resize", handleWindowSizeChange);
  //   };
  // }, []);

  return width;
};
