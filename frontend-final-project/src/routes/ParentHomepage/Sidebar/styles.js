import { Link } from "react-router-dom";
import styled from "styled-components";

import { btnReset, v } from "../Styles/variables.js";

export const SSidebar = styled.div`
    width: 300px;
    background: ${({ theme }) => theme.bg};
    height: 100vh;
    padding: ${v.lgSpacing};
    position: fixed;
`;

export const SHeading = styled.div`
    margin-bottom: ${v.lgSpacing};
    font-size: 50px;
    font-family: 'Fredoka One', cursive;
    color:rgb(255, 255, 255);
    text-shadow: 3px 3px #E3A200;
    -webkit-text-stroke: 0.1px black;
    text-align: center;

`;


export const SDivider = styled.div`
    height: 1px;
    width: 100%;
    background: ${({ theme }) => theme.bg3};
    margin: ${v.lgSpacing} 0;
`;

export const SLinkContainer = styled.div`
    background: ${({ theme, isActive }) => (!isActive ? `transparent` : theme.bg3)};
    border-radius: ${v.borderRadius};
    margin: 8px 0;
    :hover {
        box-shadow: inset 0 0 0 1px ${({ theme }) => theme.bg3};
    }
`;

export const SLink = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
    color: inherit;
    font-size: 16px;
    padding: calc(${v.smSpacing} - 2px) 0;
`;

export const SLinkIcon = styled.div`
    padding: ${v.smSpacing} ${v.mdSpacing};
    display: flex;
    svg {
        font-size: 20px;
    }
`;

export const SLinkLabel = styled.span`
    display: block;
    flex: 1;
    margin-left: ${v.smSpacing};
    font-family: Quicksand, sans-serif;
`;

export const STheme = styled.div`
    display: flex;
    align-items: center;
    font-size: 16px;
    font-family: Quicksand, sans-serif;
`;
export const SThemeLabel = styled.span`
    display: block;
    flex: 1;
`;
export const SThemeToggler = styled.button`
    ${btnReset};
    margin: 0 auto;
    cursor: pointer;
    width: 36px;
    height: 20px;
    border-radius: 10px;
    background: ${({ theme, isActive }) => (!isActive ? theme.bg3 : theme.primary)};
    position: relative;
`;

export const SToggleThumb = styled.div`
    height: 18px;
    width: 18px;
    position: absolute;
    top: 1px;
    bottom: 1px;
    transition: 0.2s ease right;
    right: calc(100% - 18px - 1px);
    border-radius: 50%;
    background: ${({ theme }) => theme.bg};
`;