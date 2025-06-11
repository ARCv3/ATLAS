
export const typeDefs = `#graphql

    # Comments in GraqhQL strings start with the hash

    # This "Partner" type defines the queryable fields for every partner in the DB
    type Partner {
        id: Int
        name: String
        isActive: Boolean
        premium: Boolean
    }

    type HavenDomainConfig {
        customDomainEnabled: Boolean
        domain: String
        subdomain: String
    }

    # This "HavenConfig" type defines the configuration for Haven
    type HavenConfig {
        domain: HavenDomainConfig
    }

    # This "PartnerConfig" type defines the configuration for each partner
    type PartnerConfig {
        partner: Partner
        Haven: HavenConfig
    }

    # The "Query" type defines the entry point for all queries
    # that can be executed against the GraphQL API
    type Query {
        partners: [Partner]
        partner(id: Int!): Partner
        partnerConfig(id: Int!): PartnerConfig
    }

`