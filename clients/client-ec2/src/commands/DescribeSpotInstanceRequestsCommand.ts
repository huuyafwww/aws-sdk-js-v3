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
  DescribeSpotInstanceRequestsRequest,
  DescribeSpotInstanceRequestsResult,
  DescribeSpotInstanceRequestsResultFilterSensitiveLog,
} from "../models/models_4";
import { de_DescribeSpotInstanceRequestsCommand, se_DescribeSpotInstanceRequestsCommand } from "../protocols/Aws_ec2";

/**
 * @public
 *
 * The input for {@link DescribeSpotInstanceRequestsCommand}.
 */
export interface DescribeSpotInstanceRequestsCommandInput extends DescribeSpotInstanceRequestsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeSpotInstanceRequestsCommand}.
 */
export interface DescribeSpotInstanceRequestsCommandOutput
  extends DescribeSpotInstanceRequestsResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Describes the specified Spot Instance requests.</p>
 *          <p>You can use <code>DescribeSpotInstanceRequests</code> to find a running Spot Instance by
 *             examining the response. If the status of the Spot Instance is <code>fulfilled</code>, the
 *             instance ID appears in the response and contains the identifier of the instance.
 *             Alternatively, you can use <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeInstances">DescribeInstances</a>
 *             with a filter to look for instances where the instance lifecycle is
 *             <code>spot</code>.</p>
 *          <p>We recommend that you set <code>MaxResults</code> to a value between 5 and 1000 to
 *             limit the number of items returned. This paginates the output, which makes the list
 *             more manageable and returns the items faster. If the list of items exceeds your
 *                 <code>MaxResults</code> value, then that number of items is returned along with a
 *                 <code>NextToken</code> value that can be passed to a subsequent
 *                 <code>DescribeSpotInstanceRequests</code> request to retrieve the remaining
 *             items.</p>
 *          <p>Spot Instance requests are deleted four hours after they are canceled and their instances are
 *             terminated.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeSpotInstanceRequestsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeSpotInstanceRequestsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeSpotInstanceRequestsRequest
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   DryRun: true || false,
 *   SpotInstanceRequestIds: [ // SpotInstanceRequestIdList
 *     "STRING_VALUE",
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new DescribeSpotInstanceRequestsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DescribeSpotInstanceRequestsCommandInput - {@link DescribeSpotInstanceRequestsCommandInput}
 * @returns {@link DescribeSpotInstanceRequestsCommandOutput}
 * @see {@link DescribeSpotInstanceRequestsCommandInput} for command's `input` shape.
 * @see {@link DescribeSpotInstanceRequestsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 *
 * @example To describe a Spot Instance request
 * ```javascript
 * // This example describes the specified Spot Instance request.
 * const input = {
 *   "SpotInstanceRequestIds": [
 *     "sir-08b93456"
 *   ]
 * };
 * const command = new DescribeSpotInstanceRequestsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "SpotInstanceRequests": [
 *     {
 *       "CreateTime": "2014-04-30T18:14:55.000Z",
 *       "InstanceId": "i-1234567890abcdef0",
 *       "LaunchSpecification": {
 *         "BlockDeviceMappings": [
 *           {
 *             "DeviceName": "/dev/sda1",
 *             "Ebs": {
 *               "DeleteOnTermination": true,
 *               "VolumeSize": 8,
 *               "VolumeType": "standard"
 *             }
 *           }
 *         ],
 *         "EbsOptimized": false,
 *         "ImageId": "ami-7aba833f",
 *         "InstanceType": "m1.small",
 *         "KeyName": "my-key-pair",
 *         "SecurityGroups": [
 *           {
 *             "GroupId": "sg-e38f24a7",
 *             "GroupName": "my-security-group"
 *           }
 *         ]
 *       },
 *       "LaunchedAvailabilityZone": "us-west-1b",
 *       "ProductDescription": "Linux/UNIX",
 *       "SpotInstanceRequestId": "sir-08b93456",
 *       "SpotPrice": "0.010000",
 *       "State": "active",
 *       "Status": {
 *         "Code": "fulfilled",
 *         "Message": "Your Spot request is fulfilled.",
 *         "UpdateTime": "2014-04-30T18:16:21.000Z"
 *       },
 *       "Type": "one-time"
 *     }
 *   ]
 * }
 * *\/
 * // example id: ec2-describe-spot-instance-requests-1
 * ```
 *
 */
export class DescribeSpotInstanceRequestsCommand extends $Command<
  DescribeSpotInstanceRequestsCommandInput,
  DescribeSpotInstanceRequestsCommandOutput,
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
  constructor(readonly input: DescribeSpotInstanceRequestsCommandInput) {
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
  ): Handler<DescribeSpotInstanceRequestsCommandInput, DescribeSpotInstanceRequestsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeSpotInstanceRequestsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeSpotInstanceRequestsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: DescribeSpotInstanceRequestsResultFilterSensitiveLog,
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
  private serialize(input: DescribeSpotInstanceRequestsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeSpotInstanceRequestsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeSpotInstanceRequestsCommandOutput> {
    return de_DescribeSpotInstanceRequestsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
