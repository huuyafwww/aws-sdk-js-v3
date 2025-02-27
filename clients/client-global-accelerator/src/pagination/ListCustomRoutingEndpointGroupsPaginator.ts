// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListCustomRoutingEndpointGroupsCommand,
  ListCustomRoutingEndpointGroupsCommandInput,
  ListCustomRoutingEndpointGroupsCommandOutput,
} from "../commands/ListCustomRoutingEndpointGroupsCommand";
import { GlobalAcceleratorClient } from "../GlobalAcceleratorClient";
import { GlobalAcceleratorPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: GlobalAcceleratorClient,
  input: ListCustomRoutingEndpointGroupsCommandInput,
  ...args: any
): Promise<ListCustomRoutingEndpointGroupsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListCustomRoutingEndpointGroupsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListCustomRoutingEndpointGroups(
  config: GlobalAcceleratorPaginationConfiguration,
  input: ListCustomRoutingEndpointGroupsCommandInput,
  ...additionalArguments: any
): Paginator<ListCustomRoutingEndpointGroupsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListCustomRoutingEndpointGroupsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof GlobalAcceleratorClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected GlobalAccelerator | GlobalAcceleratorClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
