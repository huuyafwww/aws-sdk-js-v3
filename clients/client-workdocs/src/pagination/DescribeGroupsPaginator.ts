// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  DescribeGroupsCommand,
  DescribeGroupsCommandInput,
  DescribeGroupsCommandOutput,
} from "../commands/DescribeGroupsCommand";
import { WorkDocsClient } from "../WorkDocsClient";
import { WorkDocsPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: WorkDocsClient,
  input: DescribeGroupsCommandInput,
  ...args: any
): Promise<DescribeGroupsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeGroupsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateDescribeGroups(
  config: WorkDocsPaginationConfiguration,
  input: DescribeGroupsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeGroupsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeGroupsCommandOutput;
  while (hasNext) {
    input.Marker = token;
    input["Limit"] = config.pageSize;
    if (config.client instanceof WorkDocsClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected WorkDocs | WorkDocsClient");
    }
    yield page;
    const prevToken = token;
    token = page.Marker;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
