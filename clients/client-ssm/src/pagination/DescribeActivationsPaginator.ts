// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  DescribeActivationsCommand,
  DescribeActivationsCommandInput,
  DescribeActivationsCommandOutput,
} from "../commands/DescribeActivationsCommand";
import { SSMClient } from "../SSMClient";
import { SSMPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: SSMClient,
  input: DescribeActivationsCommandInput,
  ...args: any
): Promise<DescribeActivationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeActivationsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateDescribeActivations(
  config: SSMPaginationConfiguration,
  input: DescribeActivationsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeActivationsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeActivationsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof SSMClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SSM | SSMClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
