// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { BillingconductorClient } from "../BillingconductorClient";
import {
  ListPricingRulesAssociatedToPricingPlanCommand,
  ListPricingRulesAssociatedToPricingPlanCommandInput,
  ListPricingRulesAssociatedToPricingPlanCommandOutput,
} from "../commands/ListPricingRulesAssociatedToPricingPlanCommand";
import { BillingconductorPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: BillingconductorClient,
  input: ListPricingRulesAssociatedToPricingPlanCommandInput,
  ...args: any
): Promise<ListPricingRulesAssociatedToPricingPlanCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListPricingRulesAssociatedToPricingPlanCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListPricingRulesAssociatedToPricingPlan(
  config: BillingconductorPaginationConfiguration,
  input: ListPricingRulesAssociatedToPricingPlanCommandInput,
  ...additionalArguments: any
): Paginator<ListPricingRulesAssociatedToPricingPlanCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListPricingRulesAssociatedToPricingPlanCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof BillingconductorClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Billingconductor | BillingconductorClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
