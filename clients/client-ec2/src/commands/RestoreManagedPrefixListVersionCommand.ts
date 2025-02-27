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

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { RestoreManagedPrefixListVersionRequest, RestoreManagedPrefixListVersionResult } from "../models/models_6";
import {
  de_RestoreManagedPrefixListVersionCommand,
  se_RestoreManagedPrefixListVersionCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 *
 * The input for {@link RestoreManagedPrefixListVersionCommand}.
 */
export interface RestoreManagedPrefixListVersionCommandInput extends RestoreManagedPrefixListVersionRequest {}
/**
 * @public
 *
 * The output of {@link RestoreManagedPrefixListVersionCommand}.
 */
export interface RestoreManagedPrefixListVersionCommandOutput
  extends RestoreManagedPrefixListVersionResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Restores the entries from a previous version of a managed prefix list to a new version of the prefix list.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, RestoreManagedPrefixListVersionCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, RestoreManagedPrefixListVersionCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // RestoreManagedPrefixListVersionRequest
 *   DryRun: true || false,
 *   PrefixListId: "STRING_VALUE", // required
 *   PreviousVersion: Number("long"), // required
 *   CurrentVersion: Number("long"), // required
 * };
 * const command = new RestoreManagedPrefixListVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param RestoreManagedPrefixListVersionCommandInput - {@link RestoreManagedPrefixListVersionCommandInput}
 * @returns {@link RestoreManagedPrefixListVersionCommandOutput}
 * @see {@link RestoreManagedPrefixListVersionCommandInput} for command's `input` shape.
 * @see {@link RestoreManagedPrefixListVersionCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 *
 */
export class RestoreManagedPrefixListVersionCommand extends $Command<
  RestoreManagedPrefixListVersionCommandInput,
  RestoreManagedPrefixListVersionCommandOutput,
  EC2ClientResolvedConfig
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
  constructor(readonly input: RestoreManagedPrefixListVersionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RestoreManagedPrefixListVersionCommandInput, RestoreManagedPrefixListVersionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RestoreManagedPrefixListVersionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "RestoreManagedPrefixListVersionCommand";
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
    input: RestoreManagedPrefixListVersionCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_RestoreManagedPrefixListVersionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RestoreManagedPrefixListVersionCommandOutput> {
    return de_RestoreManagedPrefixListVersionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
