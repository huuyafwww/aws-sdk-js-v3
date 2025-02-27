// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { AthenaClient } from "../AthenaClient";
import {
  ListTableMetadataCommand,
  ListTableMetadataCommandInput,
  ListTableMetadataCommandOutput,
} from "../commands/ListTableMetadataCommand";
import { AthenaPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: AthenaClient,
  input: ListTableMetadataCommandInput,
  ...args: any
): Promise<ListTableMetadataCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListTableMetadataCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListTableMetadata(
  config: AthenaPaginationConfiguration,
  input: ListTableMetadataCommandInput,
  ...additionalArguments: any
): Paginator<ListTableMetadataCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListTableMetadataCommandOutput;
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
