import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  padding: 0;
  font-family: "Poppins", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* background: black; */
  /* background: #3645f9; */
  /* background: linear-gradient(to right top, #65dfc9, #6cdbeb); */
}
#root {
  height: 100vh;
}
code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}
`;

export default GlobalStyle;
