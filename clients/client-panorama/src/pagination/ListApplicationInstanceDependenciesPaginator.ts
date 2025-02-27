// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListApplicationInstanceDependenciesCommand,
  ListApplicationInstanceDependenciesCommandInput,
  ListApplicationInstanceDependenciesCommandOutput,
} from "../commands/ListApplicationInstanceDependenciesCommand";
import { PanoramaClient } from "../PanoramaClient";
import { PanoramaPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: PanoramaClient,
  input: ListApplicationInstanceDependenciesCommandInput,
  ...args: any
): Promise<ListApplicationInstanceDependenciesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListApplicationInstanceDependenciesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListApplicationInstanceDependencies(
  config: PanoramaPaginationConfiguration,
  input: ListApplicationInstanceDependenciesCommandInput,
  ...additionalArguments: any
): Paginator<ListApplicationInstanceDependenciesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListApplicationInstanceDependenciesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof PanoramaClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Panorama | PanoramaClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
