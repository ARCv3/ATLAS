export const typeDefs = `#graphql

    # Partner entity representing an organization or user group
    type Partner {
        id: Int
        name: String
        isActive: Boolean
        premium: Boolean
    }

    # Domain configuration for a Haven instance
    type HavenDomainConfig {
        customDomainEnabled: Boolean
        domain: String
        subdomain: String
    }

    # Theme configuration for Haven UI
    type HavenTheme {
        primaryColor: String
    }

    # Hero section text configuration
    type HavenHeroText {
        heroPrefix: String
        heroTitle: String
        heroDescription: String
        heroJoinButtonText: String
    }

    # Navigation bar text configuration
    type HavenNavBarText {
        navbarTitle: String
        navbarHome: String
        navbarInfo: String
        navbarNews: String
        navbarHighlights: String
        navbarJoinButton: String
    }

    # Info section text configuration
    type HavenInfoText {
        infoHeader: String
        infoSubheader: String
        infoSubheaderPlacement: String
    }

    # News section text configuration
    type HavenNewsText {
        newsHeader: String
        newsSubheader: String
        newsSubheaderPlacement: String
    }

    # Highlights section text configuration
    type HavenHighlightsText {
        highlightsHeader: String
        highlightsSubheader: String
        highlightsPlacement: String
    }

    # Aggregated text configuration for Haven
    type HavenText {
        navbar: HavenNavBarText
        hero: HavenHeroText
        info: HavenInfoText
        highlights: HavenHighlightsText
        news: HavenNewsText
    }

    # Info content item
    type HavenInfoContent {
        icon: String
        title: String
        description: String
    }

    # News content item
    type HavenNewsContent {
        image: String
        date: String
        title: String
        description: String
        content: String
    }

    # Highlights content item
    type HavenHighlightsContent {
        image: String
        title: String
        description: String
        tags: [String]
    }

    # Content configuration for Haven
    type HavenContent {
        enableInfo: Boolean
        enableDefaultInfo: Boolean
        customInfo: [HavenInfoContent]

        enableNews: Boolean
        enableDefaultNews: Boolean
        customNews: [HavenNewsContent]

        enableHighlights: Boolean
        enableDefaultHighlights: Boolean
        customHighlights: [HavenHighlightsContent]
    }

    # Main Haven configuration object
    type HavenConfig {
        domain: HavenDomainConfig
        version: String
        theme: HavenTheme
        text: HavenText
        content: HavenContent
    }

    # Partner configuration, including Haven config
    type PartnerConfig {
        partner: Partner
        Haven: HavenConfig
    }

    # Root query type
    type Query {
        partners: [Partner]
        partner(id: Int!): Partner
        partnerConfig(id: Int!): PartnerConfig
    }

`