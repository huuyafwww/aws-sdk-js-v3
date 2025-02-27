// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListBootstrapActionsCommand,
  ListBootstrapActionsCommandInput,
  ListBootstrapActionsCommandOutput,
} from "../commands/ListBootstrapActionsCommand";
import { EMRClient } from "../EMRClient";
import { EMRPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: EMRClient,
  input: ListBootstrapActionsCommandInput,
  ...args: any
): Promise<ListBootstrapActionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListBootstrapActionsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListBootstrapActions(
  config: EMRPaginationConfiguration,
  input: ListBootstrapActionsCommandInput,
  ...additionalArguments: any
): Paginator<ListBootstrapActionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListBootstrapActionsCommandOutput;
  while (hasNext) {
    input.Marker = token;
    if (config.client instanceof EMRClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected EMR | EMRClient");
    }
    yield page;
    const prevToken = token;
    token = page.Marker;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
