// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Commune AI',
  tagline: 'Renovating the way we build software',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-test-site.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'commune', // Usually your GitHub org/user name.
  projectName: 'main-site', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
          // tailwindcss: require.resolve('./src/css/global.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    (
      {
      // Replace with your project's social card
      image: 'img/commune.svg',
      navbar: {
        title: 'Commune',
        logo: {
          alt: 'My Site Logo',
          src: 'img/commune.svg',
          style: {
            width: 'auto',
          }
        },
        items: [
          {to: '/docs', label: '📚 Docs', position: 'left', sidebarId: 'tutorialSidebar', type: 'docSidebar',},
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'tutorialSidebar',
          //   position: 'left',
          //   label: 'Tutorial',
          // },
          {to: '/modules', label: '⛓️ Modules', position: 'left'},
          {
            type: 'docsVersionDropdown',
            position: 'right',
            dropdownActiveClassDisabled: true,
          },
          {
            type: 'dropdown',
            position : 'right',
            label: '🔗 Community',
            items: [
              {
                html: `<div style="display:flex;align-items:center;"><span>Discord</span><svg  style="margin-left:10px" fill="currentColor" width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 127.14 96.36"><g id="图层_2" data-name="图层 2"><g id="Discord_Logos" data-name="Discord Logos"><g id="Discord_Logo_-_Large_-_White" data-name="Discord Logo - Large - White"><path class="cls-1" d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"/></g></g></g></svg>`,
                href: 'https://discord.gg/commune',
              },
              // {
              //   html: `<a href="" target="_blank" rel="noreferrer" class="nx-p-2 nx-text-current"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><g fill="none"><path d="M159.5 99.5l6.2-14.4c6.7 5 15.6 7.6 24.4 7.6 6.5 0 10.6-2.5 10.6-6.3-.1-10.6-38.9-2.3-39.2-28.9-.1-13.5 11.9-23.9 28.9-23.9 10.1 0 20.2 2.5 27.4 8.2L212 56.5c-6.6-4.2-14.8-7.2-22.6-7.2-5.3 0-8.8 2.5-8.8 5.7.1 10.4 39.2 4.7 39.6 30.1 0 13.8-11.7 23.5-28.5 23.5-12.3 0-23.6-2.9-32.2-9.1m237.9-19.6c-3.1 5.4-8.9 9.1-15.6 9.1-9.9 0-17.9-8-17.9-17.9 0-9.9 8-17.9 17.9-17.9 6.7 0 12.5 3.7 15.6 9.1l17.1-9.5c-6.4-11.4-18.7-19.2-32.7-19.2-20.7 0-37.5 16.8-37.5 37.5s16.8 37.5 37.5 37.5c14.1 0 26.3-7.7 32.7-19.2l-17.1-9.5zM228.8 2.5h21.4v104.7h-21.4zm194.1 0v104.7h21.4V75.8l25.4 31.4h27.4l-32.3-37.3 29.9-34.8h-26.2L444.3 64V2.5zM313.8 80.1c-3.1 5.1-9.5 8.9-16.7 8.9-9.9 0-17.9-8-17.9-17.9 0-9.9 8-17.9 17.9-17.9 7.2 0 13.6 4 16.7 9.2v17.7zm0-45v8.5c-3.5-5.9-12.2-10-21.3-10-18.8 0-33.6 16.6-33.6 37.4 0 20.8 14.8 37.6 33.6 37.6 9.1 0 17.8-4.1 21.3-10v8.5h21.4v-72h-21.4z" fill="#000"/><path d="M27.2 80c0 7.3-5.9 13.2-13.2 13.2C6.7 93.2.8 87.3.8 80c0-7.3 5.9-13.2 13.2-13.2h13.2V80zm6.6 0c0-7.3 5.9-13.2 13.2-13.2 7.3 0 13.2 5.9 13.2 13.2v33c0 7.3-5.9 13.2-13.2 13.2-7.3 0-13.2-5.9-13.2-13.2V80z" fill="#E01E5A"/><path d="M47 27c-7.3 0-13.2-5.9-13.2-13.2C33.8 6.5 39.7.6 47 .6c7.3 0 13.2 5.9 13.2 13.2V27H47zm0 6.7c7.3 0 13.2 5.9 13.2 13.2 0 7.3-5.9 13.2-13.2 13.2H13.9C6.6 60.1.7 54.2.7 46.9c0-7.3 5.9-13.2 13.2-13.2H47z" fill="#36C5F0"/><path d="M99.9 46.9c0-7.3 5.9-13.2 13.2-13.2 7.3 0 13.2 5.9 13.2 13.2 0 7.3-5.9 13.2-13.2 13.2H99.9V46.9zm-6.6 0c0 7.3-5.9 13.2-13.2 13.2-7.3 0-13.2-5.9-13.2-13.2V13.8C66.9 6.5 72.8.6 80.1.6c7.3 0 13.2 5.9 13.2 13.2v33.1z" fill="#2EB67D"/><path d="M80.1 99.8c7.3 0 13.2 5.9 13.2 13.2 0 7.3-5.9 13.2-13.2 13.2-7.3 0-13.2-5.9-13.2-13.2V99.8h13.2zm0-6.6c-7.3 0-13.2-5.9-13.2-13.2 0-7.3 5.9-13.2 13.2-13.2h33.1c7.3 0 13.2 5.9 13.2 13.2 0 7.3-5.9 13.2-13.2 13.2H80.1z" fill="#ECB22E"/></g></svg></a>`,
              //   href: 'https://discord.gg/commune',
              // }
            ],
          },
          // {
          //   type: 'localeDropdown',
          //   position: 'right',
          // },
          {

            href: 'https://github.com/facebook/docusaurus',
            html : '<a href="" target="_blank" rel="noreferrer" class="nx-p-2 nx-text-current"><svg width="24" height="24" fill="currentColor" viewBox="3 3 18 18"><title>GitHub</title><path d="M12 3C7.0275 3 3 7.12937 3 12.2276C3 16.3109 5.57625 19.7597 9.15374 20.9824C9.60374 21.0631 9.77249 20.7863 9.77249 20.5441C9.77249 20.3249 9.76125 19.5982 9.76125 18.8254C7.5 19.2522 6.915 18.2602 6.735 17.7412C6.63375 17.4759 6.19499 16.6569 5.8125 16.4378C5.4975 16.2647 5.0475 15.838 5.80124 15.8264C6.51 15.8149 7.01625 16.4954 7.18499 16.7723C7.99499 18.1679 9.28875 17.7758 9.80625 17.5335C9.885 16.9337 10.1212 16.53 10.38 16.2993C8.3775 16.0687 6.285 15.2728 6.285 11.7432C6.285 10.7397 6.63375 9.9092 7.20749 9.26326C7.1175 9.03257 6.8025 8.08674 7.2975 6.81794C7.2975 6.81794 8.05125 6.57571 9.77249 7.76377C10.4925 7.55615 11.2575 7.45234 12.0225 7.45234C12.7875 7.45234 13.5525 7.55615 14.2725 7.76377C15.9937 6.56418 16.7475 6.81794 16.7475 6.81794C17.2424 8.08674 16.9275 9.03257 16.8375 9.26326C17.4113 9.9092 17.76 10.7281 17.76 11.7432C17.76 15.2843 15.6563 16.0687 13.6537 16.2993C13.98 16.5877 14.2613 17.1414 14.2613 18.0065C14.2613 19.2407 14.25 20.2326 14.25 20.5441C14.25 20.7863 14.4188 21.0746 14.8688 20.9824C16.6554 20.364 18.2079 19.1866 19.3078 17.6162C20.4077 16.0457 20.9995 14.1611 21 12.2276C21 7.12937 16.9725 3 12 3Z"></path></svg><span class="nx-sr-only"></a>',
            position: 'right',
          },

        ],
        
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '📚 Docs',
            items: [
              {
                label: 'Introduction',
                to: '/docs/Introduction',
              },
              {
                label: 'Getting Started',
                to: '/docs/getting-started',
              },
              {
                label : "Installation",
                to: '/docs/installation',
              }
              
            ],
          },
          {
            title: '🔗 Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Slack',
                href: 'https://discord.gg/commune',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
              

            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/commune-ai',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Commune, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      corePlugins: {
        preflight: false,
      }
    }),
};

module.exports = config;