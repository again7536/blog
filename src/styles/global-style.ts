import { createGlobalStyle } from 'styled-components';
import { ThemeType } from './theme';

const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
    @font-face {
        font-family: "Noto Sans KR";
        src: local("Noto Sans KR"),
        url('/fonts/Noto_Sans_KR/NotoSansKR-Thin.otf') format('woff');
        font-weight: 100;
        font-style: normal;
    }
    @font-face {
        font-family: "Noto Sans KR";
        src: local("Noto Sans KR"),
        url('/fonts/Noto_Sans_KR/NotoSansKR-Light.otf') format('woff');
        font-weight: 300;
        font-style: normal;
    }
    @font-face {
        font-family: "Noto Sans KR";
        src: local("Noto Sans KR"),
        url('/fonts/Noto_Sans_KR/NotoSansKR-Regular.otf') format('woff');
        font-weight: 400;
        font-style: normal;
    }
    @font-face {
        font-family: "Noto Sans KR";
        src: local("Noto Sans KR"),
        url('/fonts/Noto_Sans_KR/NotoSansKR-Medium.otf') format('woff');
        font-weight: 500;
        font-style: normal;
    }
    @font-face {
        font-family: "Noto Sans KR";
        src: local("Noto Sans KR"),
        url('/fonts/Noto_Sans_KR/NotoSansKR-Bold.otf') format('woff');
        font-weight: 600;
        font-style: normal;
    }
    @font-face {
        font-family: "Noto Sans KR";
        src: local("Noto Sans KR"),
        url('/fonts/Noto_Sans_KR/NotoSansKR-Black.otf') format('woff');
        font-weight: 700;
        font-style: normal;
    }
    html, body{
        width:100vw;
        overflow-x:hidden;
        font-family: "Noto Sans KR"
    }
`;

export default GlobalStyle;
