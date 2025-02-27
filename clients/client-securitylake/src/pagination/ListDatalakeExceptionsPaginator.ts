// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListDatalakeExceptionsCommand,
  ListDatalakeExceptionsCommandInput,
  ListDatalakeExceptionsCommandOutput,
} from "../commands/ListDatalakeExceptionsCommand";
import { SecurityLakeClient } from "../SecurityLakeClient";
import { SecurityLakePaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: SecurityLakeClient,
  input: ListDatalakeExceptionsCommandInput,
  ...args: any
): Promise<ListDatalakeExceptionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListDatalakeExceptionsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListDatalakeExceptions(
  config: SecurityLakePaginationConfiguration,
  input: ListDatalakeExceptionsCommandInput,
  ...additionalArguments: any
): Paginator<ListDatalakeExceptionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListDatalakeExceptionsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxFailures"] = config.pageSize;
    if (config.client instanceof SecurityLakeClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SecurityLake | SecurityLakeClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
