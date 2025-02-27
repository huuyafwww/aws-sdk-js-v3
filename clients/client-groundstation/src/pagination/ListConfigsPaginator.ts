// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { ListConfigsCommand, ListConfigsCommandInput, ListConfigsCommandOutput } from "../commands/ListConfigsCommand";
import { GroundStationClient } from "../GroundStationClient";
import { GroundStationPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: GroundStationClient,
  input: ListConfigsCommandInput,
  ...args: any
): Promise<ListConfigsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListConfigsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListConfigs(
  config: GroundStationPaginationConfiguration,
  input: ListConfigsCommandInput,
  ...additionalArguments: any
): Paginator<ListConfigsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListConfigsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof GroundStationClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected GroundStation | GroundStationClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
