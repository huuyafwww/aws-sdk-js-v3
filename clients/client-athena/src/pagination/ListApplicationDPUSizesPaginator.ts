// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { AthenaClient } from "../AthenaClient";
import {
  ListApplicationDPUSizesCommand,
  ListApplicationDPUSizesCommandInput,
  ListApplicationDPUSizesCommandOutput,
} from "../commands/ListApplicationDPUSizesCommand";
import { AthenaPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: AthenaClient,
  input: ListApplicationDPUSizesCommandInput,
  ...args: any
): Promise<ListApplicationDPUSizesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListApplicationDPUSizesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListApplicationDPUSizes(
  config: AthenaPaginationConfiguration,
  input: ListApplicationDPUSizesCommandInput,
  ...additionalArguments: any
): Paginator<ListApplicationDPUSizesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListApplicationDPUSizesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof AthenaClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Athena | AthenaClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
