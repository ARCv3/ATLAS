
export namespace PartnerConfig {
    export function partnerConfig( _: any, { id } : { id: number }, context, info) {

        return {
            partner: {
                id: id,
                name: `Partner ${id}`,
                isActive: true,
                premium: false,
            },
            Haven: {
                subdomain: `partner${id}.haven.example.com`,
            }
        };

    }
}
