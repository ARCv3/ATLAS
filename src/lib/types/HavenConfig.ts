export interface HavenDomainConfig {
    customDomainEnabled: boolean;
    domain: string;
    subdomain: string;
};

export interface HavenTheme {
    primaryColor: string;
}

export interface HavenHeroText {
    heroPrefix: string;
    heroTitle: string;
    heroDescription: string;
    heroJoinButtonText: string;
}

export interface HavenNavBarText {
    navbarTitle: string;
    navbarHome: string;
    navbarInfo: string;
    navbarNews: string;
    navbarHighlights: string;
    navbarJoinButton: string;
}

export interface HavenInfoText {
    infoHeader: string;
    infoSubheader: string;
    infoSubheaderPlacement: string;
}

export interface HavenNewsText {
    newsHeader: string;
    newsSubheader: string;
    newsSubheaderPlacement: string;
}

export interface HavenHighlightsText {
    highlightsHeader: string;
    highlightsSubheader: string;
    highlightsPlacement: string;
}


export interface HavenText {
    navbar: HavenNavBarText;
    hero: HavenHeroText;
    info: HavenInfoText;
    highlights: HavenHighlightsText;
    news: HavenNewsText;
}

export interface HavenInfoContent {
    icon: string;
    title: string;
    description: string;
}

export interface HavenNewsContent {
    image: string;
    date: string;
    title: string;
    description: string;
    content: string;
}

export interface HavenHighlightsContent {

    image: string;
    title: string;
    description: string;
    tags: string[];

}

export interface HavenContent {
    enableInfo: boolean;
    enableDefaultInfo: boolean;
    customInfo: HavenInfoContent[];

    enableNews: boolean;
    enableDefaultNews: boolean;
    customNews: HavenNewsContent[];

    enableHighlights: boolean;
    enableDefaultHighlights: boolean;
    customHighlights: HavenHighlightsContent[];
}
export interface HavenConfig {
    domain:  HavenDomainConfig;
    version: string;
    theme: HavenTheme;
    text: HavenText;
    content: HavenContent;
};