// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListDocumentClassifierSummariesCommand,
  ListDocumentClassifierSummariesCommandInput,
  ListDocumentClassifierSummariesCommandOutput,
} from "../commands/ListDocumentClassifierSummariesCommand";
import { ComprehendClient } from "../ComprehendClient";
import { ComprehendPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: ComprehendClient,
  input: ListDocumentClassifierSummariesCommandInput,
  ...args: any
): Promise<ListDocumentClassifierSummariesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListDocumentClassifierSummariesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListDocumentClassifierSummaries(
  config: ComprehendPaginationConfiguration,
  input: ListDocumentClassifierSummariesCommandInput,
  ...additionalArguments: any
): Paginator<ListDocumentClassifierSummariesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListDocumentClassifierSummariesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof ComprehendClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Comprehend | ComprehendClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
