import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
// styling of each section imported so styled link = SLink
import {
    SDivider,
    SHeading,
    SLink,
    SLinkContainer,
    SLinkIcon,
    SLinkLabel,
    SSidebar,
    STheme,
    SThemeLabel,
    SThemeToggler,
    SToggleThumb,
} from "./styles.js";

// icons imported
import {
    AiOutlineLineChart,
    AiOutlineSetting,
} from "react-icons/ai";
import { MdOutlineAnalytics } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { CgLogOut } from "react-icons/cg";

import { ThemeContext } from "../../ParentHomepage/ParentHomepage.js";

const Sidebar = () => {
    const { setTheme, theme } = useContext(ThemeContext);
    const { pathname } = useLocation();


    return (
        <SSidebar>
            <SHeading>
            Parent Dashboard
            </SHeading>
       
            <SDivider />

            {linksArray.map(({ icon, label, to }) => (
                <SLinkContainer key={label} isActive={pathname === to}>
                    <SLink to={to}>
                        <SLinkIcon>{icon}</SLinkIcon>
                            <>
                                <SLinkLabel>{label}</SLinkLabel>
                            </>
                    </SLink>
                </SLinkContainer>
            ))}

            <SDivider />
            {secondaryLinksArray.map(({ icon, label, to }) => (
                <SLinkContainer key={label} isActive={pathname === to}>
                    <SLink to={to}>
                        <SLinkIcon>{icon}</SLinkIcon>
                      <SLinkLabel>{label}</SLinkLabel>
                    </SLink>
                </SLinkContainer>
            ))}
            <SDivider />
            <STheme>
                <SThemeLabel>Dark Mode</SThemeLabel>
                <SThemeToggler
                    isActive={theme === "dark"}
                    onClick={() => setTheme((p) => (p === "light" ? "dark" : "light"))}
                >
                    <SToggleThumb style={theme === "dark" ? { right: "1px" } : {}} />
                </SThemeToggler>
            </STheme>
        </SSidebar>
    );
};

const linksArray = [
    {
        label: "Overview",
        icon: <AiOutlineLineChart />,
        to: "/parent",
    },
    {
        label: "Weekly Activity Report",
        icon: <MdOutlineAnalytics />,
        to: "/parent/weekly-activity-report",
    },
    {
        label: "Support",
        icon: <BiSupport />,
        to: "/parent/support",
    },
];

const secondaryLinksArray = [
    {
        label: "Settings",
        icon: <AiOutlineSetting />,
        to: "/parent/settings"
    },
    {
        label: "Back to landing page",
        icon: <CgLogOut />,
        to: "/login",
    },
];

export default Sidebar;