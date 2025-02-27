// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListCostCategoryDefinitionsCommand,
  ListCostCategoryDefinitionsCommandInput,
  ListCostCategoryDefinitionsCommandOutput,
} from "../commands/ListCostCategoryDefinitionsCommand";
import { CostExplorerClient } from "../CostExplorerClient";
import { CostExplorerPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: CostExplorerClient,
  input: ListCostCategoryDefinitionsCommandInput,
  ...args: any
): Promise<ListCostCategoryDefinitionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListCostCategoryDefinitionsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListCostCategoryDefinitions(
  config: CostExplorerPaginationConfiguration,
  input: ListCostCategoryDefinitionsCommandInput,
  ...additionalArguments: any
): Paginator<ListCostCategoryDefinitionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListCostCategoryDefinitionsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof CostExplorerClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CostExplorer | CostExplorerClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
