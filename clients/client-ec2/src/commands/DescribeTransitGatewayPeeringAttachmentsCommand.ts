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
import {
  DescribeTransitGatewayPeeringAttachmentsRequest,
  DescribeTransitGatewayPeeringAttachmentsResult,
} from "../models/models_4";
import {
  de_DescribeTransitGatewayPeeringAttachmentsCommand,
  se_DescribeTransitGatewayPeeringAttachmentsCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 *
 * The input for {@link DescribeTransitGatewayPeeringAttachmentsCommand}.
 */
export interface DescribeTransitGatewayPeeringAttachmentsCommandInput
  extends DescribeTransitGatewayPeeringAttachmentsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeTransitGatewayPeeringAttachmentsCommand}.
 */
export interface DescribeTransitGatewayPeeringAttachmentsCommandOutput
  extends DescribeTransitGatewayPeeringAttachmentsResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Describes your transit gateway peering attachments.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeTransitGatewayPeeringAttachmentsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeTransitGatewayPeeringAttachmentsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeTransitGatewayPeeringAttachmentsRequest
 *   TransitGatewayAttachmentIds: [ // TransitGatewayAttachmentIdStringList
 *     "STRING_VALUE",
 *   ],
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   DryRun: true || false,
 * };
 * const command = new DescribeTransitGatewayPeeringAttachmentsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DescribeTransitGatewayPeeringAttachmentsCommandInput - {@link DescribeTransitGatewayPeeringAttachmentsCommandInput}
 * @returns {@link DescribeTransitGatewayPeeringAttachmentsCommandOutput}
 * @see {@link DescribeTransitGatewayPeeringAttachmentsCommandInput} for command's `input` shape.
 * @see {@link DescribeTransitGatewayPeeringAttachmentsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 *
 */
export class DescribeTransitGatewayPeeringAttachmentsCommand extends $Command<
  DescribeTransitGatewayPeeringAttachmentsCommandInput,
  DescribeTransitGatewayPeeringAttachmentsCommandOutput,
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
  constructor(readonly input: DescribeTransitGatewayPeeringAttachmentsCommandInput) {
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
  ): Handler<
    DescribeTransitGatewayPeeringAttachmentsCommandInput,
    DescribeTransitGatewayPeeringAttachmentsCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        DescribeTransitGatewayPeeringAttachmentsCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeTransitGatewayPeeringAttachmentsCommand";
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
    input: DescribeTransitGatewayPeeringAttachmentsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeTransitGatewayPeeringAttachmentsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeTransitGatewayPeeringAttachmentsCommandOutput> {
    return de_DescribeTransitGatewayPeeringAttachmentsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
