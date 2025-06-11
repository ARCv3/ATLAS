import { Partner } from './partner';
import { PartnerConfig } from './partnerconfig'

const { partner, partners } = Partner;
const { partnerConfig } = PartnerConfig;

export const resolvers = {
    Query: {
        partner,
        partners,
        partnerConfig
    }
}