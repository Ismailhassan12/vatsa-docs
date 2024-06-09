import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
    title: "VATSIM Saudi Arabia",
    tagline: "Standard Operating Procedures",
    favicon: "assets/favicon.ico",

    // Set the production url of your site here
    url: "https://sops.vatsimsa.com",
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: "/",

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    // organizationName: "facebook", // Usually your GitHub org/user name.
    // projectName: "docusaurus", // Usually your repo name.

    onBrokenLinks: "ignore",

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: "en",
        locales: ["en"],
    },

    presets: [
        [
            "classic",
            {
                docs: {
                    sidebarPath: "./sidebars.ts",
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                },
                theme: {
                    customCss: "./src/css/custom.css",
                },
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
        // Replace with your project's social card
        // image: "img/docusaurus-social-card.jpg",
        navbar: {
            title: "VATSIM Saudi Arabia",
            logo: {
                alt: "My Site Logo",
                src: "assets/logo.png",
            },
            items: [
                {
                    type: "docSidebar",
                    sidebarId: "sopsSidebar",
                    position: "left",
                    label: "SOPs",
                },
                {
                    type: "docSidebar",
                    sidebarId: "vmatsSidebar",
                    position: "left",
                    label: "Training vMATS",
                },
                {
                    href: "https://www.vatsimsa.com/",
                    position: "right",
                    label: "Official Website",
                },
                {to: 'blog', label: 'Revisions', position: 'left'},
            ],
        },
        footer: {
            style: "dark",
            links: [
                {
                    title: "Docs",
                    items: [
                        {
                            label: "SOPs",
                            to: "/docs/sops/introduction",
                        },
                    ],
                },
                {
                    title: "Community",
                    items: [
                        {
                            label: "Discord",
                            href: "https://discord.com/invite/p9yn5rXjU2",
                        },
                    ],
                },
                {
                    title: "More",
                    items: [
                        {
                            label: "Official Website",
                            href: "https://www.vatsimsa.com/",
                        },
                    ],
                },
            ],
            copyright: `Copyright © 2024 VATSIM Saudi Arabia. Built with Docusaurus.`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
    } satisfies Preset.ThemeConfig,
};

export default config;
