// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListDelegatedAdministratorsCommand,
  ListDelegatedAdministratorsCommandInput,
  ListDelegatedAdministratorsCommandOutput,
} from "../commands/ListDelegatedAdministratorsCommand";
import { OrganizationsClient } from "../OrganizationsClient";
import { OrganizationsPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: OrganizationsClient,
  input: ListDelegatedAdministratorsCommandInput,
  ...args: any
): Promise<ListDelegatedAdministratorsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListDelegatedAdministratorsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListDelegatedAdministrators(
  config: OrganizationsPaginationConfiguration,
  input: ListDelegatedAdministratorsCommandInput,
  ...additionalArguments: any
): Paginator<ListDelegatedAdministratorsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListDelegatedAdministratorsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof OrganizationsClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Organizations | OrganizationsClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
