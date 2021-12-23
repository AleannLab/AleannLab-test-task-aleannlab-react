import { css } from 'styled-components';
// normal
import InterWoff from './Inter/Inter-Regular.woff';
import InterWoff2 from './Inter/Inter-Regular.woff2';
// italic
import InterItalicWoff from './Inter/Inter-Italic.woff';
import InterItalicWoff2 from './Inter/Inter-Italic.woff2';
// bold
import InterBoldWoff from './Inter/Inter-Bold.woff';
import InterBoldWoff2 from './Inter/Inter-Bold.woff2';

// import Inter font family
export const InterFontFamilies = css`
    @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(${InterWoff2}) format('woff2'),
            url(${InterWoff}) format('woff');
    }

    @font-face {
        font-family: 'Inter';
        font-style: italic;
        font-weight: 400;
        font-display: swap;
        src: url(${InterItalicWoff2}) format('woff2'),
            url(${InterItalicWoff}) format('woff');
    }

    @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url(${InterBoldWoff2}) format('woff2'),
            url(${InterBoldWoff}) format('woff');
    }
`;
