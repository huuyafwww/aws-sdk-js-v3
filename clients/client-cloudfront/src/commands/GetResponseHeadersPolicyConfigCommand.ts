// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { GetResponseHeadersPolicyConfigRequest, GetResponseHeadersPolicyConfigResult } from "../models/models_1";
import {
  de_GetResponseHeadersPolicyConfigCommand,
  se_GetResponseHeadersPolicyConfigCommand,
} from "../protocols/Aws_restXml";

/**
 * @public
 *
 * The input for {@link GetResponseHeadersPolicyConfigCommand}.
 */
export interface GetResponseHeadersPolicyConfigCommandInput extends GetResponseHeadersPolicyConfigRequest {}
/**
 * @public
 *
 * The output of {@link GetResponseHeadersPolicyConfigCommand}.
 */
export interface GetResponseHeadersPolicyConfigCommandOutput
  extends GetResponseHeadersPolicyConfigResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Gets a response headers policy configuration.</p>
 *          <p>To get a response headers policy configuration, you must provide the policy's
 * 			identifier. If the response headers policy is attached to a distribution's cache
 * 			behavior, you can get the policy's identifier using <code>ListDistributions</code> or
 * 				<code>GetDistribution</code>. If the response headers policy is not attached to a
 * 			cache behavior, you can get the identifier using
 * 				<code>ListResponseHeadersPolicies</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, GetResponseHeadersPolicyConfigCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, GetResponseHeadersPolicyConfigCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const input = { // GetResponseHeadersPolicyConfigRequest
 *   Id: "STRING_VALUE", // required
 * };
 * const command = new GetResponseHeadersPolicyConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param GetResponseHeadersPolicyConfigCommandInput - {@link GetResponseHeadersPolicyConfigCommandInput}
 * @returns {@link GetResponseHeadersPolicyConfigCommandOutput}
 * @see {@link GetResponseHeadersPolicyConfigCommandInput} for command's `input` shape.
 * @see {@link GetResponseHeadersPolicyConfigCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link AccessDenied} (client fault)
 *  <p>Access denied.</p>
 *
 * @throws {@link NoSuchResponseHeadersPolicy} (client fault)
 *  <p>The response headers policy does not exist.</p>
 *
 *
 */
export class GetResponseHeadersPolicyConfigCommand extends $Command<
  GetResponseHeadersPolicyConfigCommandInput,
  GetResponseHeadersPolicyConfigCommandOutput,
  CloudFrontClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: GetResponseHeadersPolicyConfigCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFrontClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetResponseHeadersPolicyConfigCommandInput, GetResponseHeadersPolicyConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetResponseHeadersPolicyConfigCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontClient";
    const commandName = "GetResponseHeadersPolicyConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(
    input: GetResponseHeadersPolicyConfigCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_GetResponseHeadersPolicyConfigCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetResponseHeadersPolicyConfigCommandOutput> {
    return de_GetResponseHeadersPolicyConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
