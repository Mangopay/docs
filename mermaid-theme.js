// (function () {
//   const lightTheme = {
//     primaryColor: "#FFFFFF",
//     primaryTextColor: "#2D0F37",
//     primaryBorderColor: "#2D0F37",
//     lineColor: "#2D0F37",
//     secondaryColor: "#FFFFFF",
//     tertiaryColor: "#FFFFFF",
//   };

//   const darkTheme = {
//     primaryColor: "#2D0F37",
//     primaryTextColor: "#FFFFFF",
//     primaryBorderColor: "#FFFFFF",
//     lineColor: "#FFFFFF",
//     secondaryColor: "#2D0F37",
//     tertiaryColor: "#2D0F37",
//   };

//   const applyTheme = function () {
//     try {
//       const prefersDark =
//         window.matchMedia &&
//         window.matchMedia("(prefers-color-scheme: dark)").matches;
//       const selectedThemeVariables = prefersDark ? darkTheme : lightTheme;

//       window.mermaid.initialize({
//         startOnLoad: true,
//         theme: "base",
//         themeVariables: selectedThemeVariables,
//         fontFamily: "Inter",
//       });
//     } catch (error) {
//       console.error(
//         "Could not initialize Mermaid.js with custom themes:",
//         error
//       );
//       if (window.mermaid) {
//         window.mermaid.initialize({ startOnLoad: true });
//       }
//     }
//   };

//   if (typeof window.mermaid !== "undefined") {
//     applyTheme();
//   } else {
//     const script = document.createElement("script");
//     script.src =
//       "https://cdn.jsdelivr.net/npm/mermaid@10.9.3/dist/mermaid.min.js";
//     script.type = "text/javascript";
//     script.onload = applyTheme;
//     script.onerror = function () {
//       console.error("Failed to load the Mermaid.js library from the CDN.");
//     };
//     document.head.appendChild(script);
//   }
// })();
