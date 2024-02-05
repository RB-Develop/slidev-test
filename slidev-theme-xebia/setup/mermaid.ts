import { defineMermaidSetup } from "@slidev/types";

export default defineMermaidSetup(() => {
  return {
    theme: "base",
    themeVariables: {
      primaryColor: "#6C1D5F",
      primaryTextColor: "#F4F4F4",
      primaryBorderColor: "#6C1D5F",
      textColor: "#5A5A5A",
      lineColor: "#4A1E47",
      secondaryColor: "#9D92B2",
      tertiaryColor: "#5C4F61",
      fontFamily: "Proxima Nova, sans-serif",
    },
  };
});
