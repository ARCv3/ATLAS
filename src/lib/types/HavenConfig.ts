export interface HavenDomainConfig {
    customDomainEnabled: boolean;
    domain: string;
    subdomain: string;
};

export interface HavenConfig {
    domain:  HavenDomainConfig;
};