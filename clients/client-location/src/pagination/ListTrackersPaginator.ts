// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListTrackersCommand,
  ListTrackersCommandInput,
  ListTrackersCommandOutput,
} from "../commands/ListTrackersCommand";
import { LocationClient } from "../LocationClient";
import { LocationPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: LocationClient,
  input: ListTrackersCommandInput,
  ...args: any
): Promise<ListTrackersCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListTrackersCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListTrackers(
  config: LocationPaginationConfiguration,
  input: ListTrackersCommandInput,
  ...additionalArguments: any
): Paginator<ListTrackersCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListTrackersCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof LocationClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Location | LocationClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
