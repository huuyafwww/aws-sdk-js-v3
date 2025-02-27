// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListModelCardVersionsCommand,
  ListModelCardVersionsCommandInput,
  ListModelCardVersionsCommandOutput,
} from "../commands/ListModelCardVersionsCommand";
import { SageMakerClient } from "../SageMakerClient";
import { SageMakerPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: SageMakerClient,
  input: ListModelCardVersionsCommandInput,
  ...args: any
): Promise<ListModelCardVersionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListModelCardVersionsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListModelCardVersions(
  config: SageMakerPaginationConfiguration,
  input: ListModelCardVersionsCommandInput,
  ...additionalArguments: any
): Paginator<ListModelCardVersionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListModelCardVersionsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof SageMakerClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SageMaker | SageMakerClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
