import css from 'styled-jsx/css';

import { breakpoints, colors, fonts } from '../../styles/theme';

export const globalStyles = css.global`
    html,
    body {
        padding: 0;
        margin: 0;
        background-image:
            radial-gradient(${colors.primary} 1px, transparent 1px),
            radial-gradient(${colors.primary} 1px, transparent 1px);
        background-position: 0 0, 25px 25px;
        background-size: 50px 50px;
        font-family: ${fonts.base};
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    * {
        box-sizing: border-box;
    }
`;

export default css`
    div {
        display:grid;
        place-items: center;
        height: 100vh;
    }

    main {
        background: #fff;
        border-radius: 10px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, .3);
        width: 100%;
        height: 100%;
    }

    @media (min-width: ${breakpoints.mobile}) {
        main {
            height: 90vh;
            width: ${breakpoints.mobile}
        }
    }
`;
