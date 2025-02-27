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

import { ResumeClusterMessage } from "../models/models_0";
import { ResumeClusterResult } from "../models/models_1";
import { de_ResumeClusterCommand, se_ResumeClusterCommand } from "../protocols/Aws_query";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";

/**
 * @public
 *
 * The input for {@link ResumeClusterCommand}.
 */
export interface ResumeClusterCommandInput extends ResumeClusterMessage {}
/**
 * @public
 *
 * The output of {@link ResumeClusterCommand}.
 */
export interface ResumeClusterCommandOutput extends ResumeClusterResult, __MetadataBearer {}

/**
 * @public
 * <p>Resumes a paused cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, ResumeClusterCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, ResumeClusterCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const input = { // ResumeClusterMessage
 *   ClusterIdentifier: "STRING_VALUE", // required
 * };
 * const command = new ResumeClusterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param ResumeClusterCommandInput - {@link ResumeClusterCommandInput}
 * @returns {@link ResumeClusterCommandOutput}
 * @see {@link ResumeClusterCommandInput} for command's `input` shape.
 * @see {@link ResumeClusterCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link ClusterNotFoundFault} (client fault)
 *  <p>The <code>ClusterIdentifier</code> parameter does not refer to an existing cluster.
 *         </p>
 *
 * @throws {@link InsufficientClusterCapacityFault} (client fault)
 *  <p>The number of nodes specified exceeds the allotted capacity of the
 *             cluster.</p>
 *
 * @throws {@link InvalidClusterStateFault} (client fault)
 *  <p>The specified cluster is not in the <code>available</code> state. </p>
 *
 *
 */
export class ResumeClusterCommand extends $Command<
  ResumeClusterCommandInput,
  ResumeClusterCommandOutput,
  RedshiftClientResolvedConfig
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
  constructor(readonly input: ResumeClusterCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RedshiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ResumeClusterCommandInput, ResumeClusterCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ResumeClusterCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "ResumeClusterCommand";
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
  private serialize(input: ResumeClusterCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ResumeClusterCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ResumeClusterCommandOutput> {
    return de_ResumeClusterCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
