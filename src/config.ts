type SiteConfig = {
    title: string;
    description: string;
    author: string;
    siteUrl: string;
    logo?: string;
    ogImage: string;
    locale: string;
    twitter: {
        site: string;
    };
};

type Link = {
    text: string;
    href: string;
};

type Action = {
    href: string;
    text: string;
    icon?: string;
};

type FooterLinkGroup = {
    title: string;
    links: Link[];
};

type SocialLink = {
    ariaLabel: string;
    icon: string;
    href: string;
};

type NavigationConfig = {
    header: {
        links: Link[];
        actions: Action[];
    };
    footer: {
        links: FooterLinkGroup[];
        secondaryLinks: Link[];
        socialLinks: SocialLink[];
        contactDetails: {
            address: string;
            addressLink: string;
            email: string;
        };
        footNote: string;
    };
};

export const SITE = (): SiteConfig => {
    return {
        title: "Evene - Viviendas de Lujo en Madrid",
        description:
            "Promotora con más de 20 años de experiencia en el mercado inmobiliario de Madrid",
        author: "Evene",
        siteUrl: "https://evene.es/",
        ogImage: "/src/assets/images/og-image.jpg", // Needs to be an absolute path /src/...
        locale: "es_ES",
        twitter: { site: "@evene" },
    };
};

export const NAVIGATION = (): NavigationConfig => ({
    header: {
        links: [],
        actions: [
            {
                href: `/promociones/`,
                text: "Nuestras promociones",
                // icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-rocket"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 13a8 8 0 0 1 7 7a6 6 0 0 0 3 -5a9 9 0 0 0 6 -8a3 3 0 0 0 -3 -3a9 9 0 0 0 -8 6a6 6 0 0 0 -5 3" /><path d="M7 14a6 6 0 0 0 -3 6a6 6 0 0 0 6 -3" /><path d="M14 9a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /></svg>`
            },
        ],
    },

    footer: {
        links: [
            {
                title: "Soporte",
                links: [
                    { text: "Contacto", href: `/contact/` },
                    { text: "Blog", href: `/blog/` },
                    { text: "Noticias", href: `/blog/noticias/` },
                ],
            },
            {
                title: "Evene",
                links: [
                    { text: "Sobre nosotros", href: `/#about` },
                ],
            },
        ],
        secondaryLinks: [
            { text: "Términos y condiciones", href: `/terms/` },
            { text: "Política de privacidad", href: `/privacy/` },
        ],
        socialLinks: [
            // {
            //     ariaLabel: "X",
            //     icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-x"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4l11.733 16h4.267l-11.733 -16l-4.267 0" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>`,
            //     href: "https://x.com/mywebsite",
            // },
            // { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://instagram.com/mywebsite' },
            // { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://facebook.com/mywebsite' },
            { ariaLabel: "RSS", icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-rss"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 19a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M4 4a16 16 0 0 1 16 16" /><path d="M4 11a9 9 0 0 1 9 9" /></svg>`, href: `/rss.xml` },
        ],
        contactDetails: {
            address: "Calle Maestro Felisa Lozano, 7, 28042, Madrid",
            addressLink: "https://maps.app.goo.gl/tb4McHigby4r5BeP7",
            email: "info@evene.es",
        },
        footNote: `
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400"
          >© ${new Date().getFullYear()} <a href="/" class="hover:underline"
            >${SITE().title}</a
          >
        </span>
          `,
    },
});
