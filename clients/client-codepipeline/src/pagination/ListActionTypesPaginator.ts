// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { CodePipelineClient } from "../CodePipelineClient";
import {
  ListActionTypesCommand,
  ListActionTypesCommandInput,
  ListActionTypesCommandOutput,
} from "../commands/ListActionTypesCommand";
import { CodePipelinePaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: CodePipelineClient,
  input: ListActionTypesCommandInput,
  ...args: any
): Promise<ListActionTypesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListActionTypesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListActionTypes(
  config: CodePipelinePaginationConfiguration,
  input: ListActionTypesCommandInput,
  ...additionalArguments: any
): Paginator<ListActionTypesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListActionTypesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    if (config.client instanceof CodePipelineClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CodePipeline | CodePipelineClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
