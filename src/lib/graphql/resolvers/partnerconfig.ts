import { defaultPartnerConfig } from "../../schema/defaultpartnerconfig";
import { Merge } from "../../utils/merge";

export namespace PartnerConfig {
    export function partnerConfig( _: any, { id } : { id: number }, context, info) {

        const configJson = Merge.mergeJson(
            defaultPartnerConfig,
            {
                partner: {
                    id: id,
                    name: `Partner ${id}`,
                },
            }
        );

        return configJson;

    }
}
