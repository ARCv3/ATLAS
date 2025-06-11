export const defaultPartnerConfig = {
    Haven: {
        domain: {
            customDomainEnabled: false,
            domain: 'customdomain.com',
            subdomain: 'haven'
        },
        version: '1.0.0',
        theme: {
            primaryColor: '#1976d2'
        },
        text: {
            navbar: {
                navbarTitle: 'Haven',
                navbarHome: 'Home',
                navbarInfo: 'Info',
                navbarNews: 'News',
                navbarHighlights: 'Highlights',
                navbarJoinButton: 'Join'
            },
            hero: {
                heroPrefix: 'Welcome to',
                heroTitle: 'Haven',
                heroDescription: 'Your safe space for community and news.',
                heroJoinButtonText: 'Join Now'
            },
            info: {
                infoHeader: 'Information',
                infoSubheader: 'Learn more about Haven',
                infoSubheaderPlacement: 'top'
            },
            highlights: {
                highlightsHeader: 'Highlights',
                highlightsSubheader: 'Featured content',
                highlightsPlacement: 'top'
            },
            news: {
                newsHeader: 'Latest News',
                newsSubheader: 'Stay updated',
                newsSubheaderPlacement: 'top'
            }
        },
        content: {
            enableInfo: true,
            enableDefaultInfo: false,
            customInfo: [
                {
                    icon: "Info",
                    title: "About Haven",
                    description: "Haven is your trusted community platform."
                },
                {
                    icon: "Security",
                    title: "Safety First",
                    description: "Your privacy and safety are our top priorities."
                },
                {
                    icon: "Group",
                    title: "Community Driven",
                    description: "Our features are shaped by your feedback and needs."
                },
                {
                    icon: "SupportAgent",
                    title: "24/7 Support",
                    description: "Our team is always here to help you."
                },
                {
                    icon: "Star",
                    title: "Trusted by Many",
                    description: "Thousands of users rely on Haven every day."
                },
                {
                    icon: "Lightbulb",
                    title: "Innovative Solutions",
                    description: "We constantly introduce new features to improve your experience."
                }
            ],
            enableNews: true,
            enableDefaultNews: false,
            customNews: [
                {
                    image: "https://example.com/news1.jpg",
                    date: "2025-06-01",
                    title: "Haven Launches New Feature",
                    description: "Discover the latest updates in Haven.",
                    content: "We are excited to announce the launch of our new feature, making your experience even better!"
                },
                {
                    image: "https://example.com/news2.jpg",
                    date: "2025-05-20",
                    title: "Community Spotlight",
                    description: "Highlighting outstanding community members.",
                    content: "This month, we celebrate our most active and supportive members."
                }
            ],
            enableHighlights: true,
            enableDefaultHighlights: false,
            customHighlights: [
                {
                    image: "https://example.com/highlight1.jpg",
                    title: "Featured Event",
                    description: "Join our upcoming virtual event for all members.",
                    tags: ["event", "community", "virtual"]
                },
                {
                    image: "https://example.com/highlight2.jpg",
                    title: "Resource Hub",
                    description: "Access exclusive resources curated for you.",
                    tags: ["resources", "exclusive", "learning"]
                }
            ]
        }
    },
    partner: {
        isActive: false,
        premium: false
    }
}