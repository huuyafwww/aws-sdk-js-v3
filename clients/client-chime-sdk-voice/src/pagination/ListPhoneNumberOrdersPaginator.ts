// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { ChimeSDKVoiceClient } from "../ChimeSDKVoiceClient";
import {
  ListPhoneNumberOrdersCommand,
  ListPhoneNumberOrdersCommandInput,
  ListPhoneNumberOrdersCommandOutput,
} from "../commands/ListPhoneNumberOrdersCommand";
import { ChimeSDKVoicePaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: ChimeSDKVoiceClient,
  input: ListPhoneNumberOrdersCommandInput,
  ...args: any
): Promise<ListPhoneNumberOrdersCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListPhoneNumberOrdersCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListPhoneNumberOrders(
  config: ChimeSDKVoicePaginationConfiguration,
  input: ListPhoneNumberOrdersCommandInput,
  ...additionalArguments: any
): Paginator<ListPhoneNumberOrdersCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListPhoneNumberOrdersCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof ChimeSDKVoiceClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ChimeSDKVoice | ChimeSDKVoiceClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
