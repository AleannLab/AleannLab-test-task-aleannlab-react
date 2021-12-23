import { css, createGlobalStyle } from "styled-components";
import reboot from "styled-reboot";
import colors from "./colors";
import { InterFontFamilies } from "./fonts/inter";
// --- UPDATES TO GLOBAL STYLES REQUIRES A PAGE REFRESH ---

// reboot/normalize using Bootstrap 4 reboot
// but injecting other default options
const rebootCss = reboot({
  black: "#000",
  fontFamilyBase:
    'Inter, Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
  fontFamilyMonospace:
    'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  fontSizeBase: "16px",
  fontWeightBase: 400,
  lineHeightBase: 1.5,
  bodyColor: colors.black,
  bodyBg: colors.white,
  headingsMarginBottom: "0.5rem",
  paragraphMarginBottom: "1rem",
  labelMarginBottom: "0.5rem",
  dtFontWeight: 700,
  linkColor: colors.primaryFocus,
  linkDecoration: "none",
  linkHoverColor: colors.primaryHover,
  linkHoverDecoration: "none",
  tableCellPadding: "0.75rem",
  textMuted: colors.gray,
});

// expand normalize.css string into css
export const globalCss = css`
  ${rebootCss}
  ${InterFontFamilies}

    body {
    background-color: ${colors.white};
    max-width: 100vw;
    overflow-x: hidden;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
  }
`;

// create a global page style
export const GlobalStyle = createGlobalStyle`
  ${globalCss}
`;
