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

import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { StartTaskRequest, StartTaskResponse } from "../models/models_0";
import { de_StartTaskCommand, se_StartTaskCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link StartTaskCommand}.
 */
export interface StartTaskCommandInput extends StartTaskRequest {}
/**
 * @public
 *
 * The output of {@link StartTaskCommand}.
 */
export interface StartTaskCommandOutput extends StartTaskResponse, __MetadataBearer {}

/**
 * @public
 * <p>Starts a new task from the specified task definition on the specified container
 * 			instance or instances.</p>
 *          <note>
 *             <p>Starting April 15, 2023, Amazon Web Services will not onboard new customers to Amazon Elastic Inference (EI), and will help current customers migrate their workloads to options that offer better price and performance. After April 15, 2023, new customers will not be able to launch instances with Amazon EI accelerators in Amazon SageMaker, Amazon ECS, or Amazon EC2. However, customers who have used Amazon EI at least once during the past 30-day period are considered current customers and will be able to continue using the service. </p>
 *          </note>
 *          <p>Alternatively, you can use <a>RunTask</a> to place tasks for you. For more
 * 			information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/scheduling_tasks.html">Scheduling Tasks</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, StartTaskCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, StartTaskCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const input = { // StartTaskRequest
 *   cluster: "STRING_VALUE",
 *   containerInstances: [ // StringList // required
 *     "STRING_VALUE",
 *   ],
 *   enableECSManagedTags: true || false,
 *   enableExecuteCommand: true || false,
 *   group: "STRING_VALUE",
 *   networkConfiguration: { // NetworkConfiguration
 *     awsvpcConfiguration: { // AwsVpcConfiguration
 *       subnets: [ // required
 *         "STRING_VALUE",
 *       ],
 *       securityGroups: [
 *         "STRING_VALUE",
 *       ],
 *       assignPublicIp: "ENABLED" || "DISABLED",
 *     },
 *   },
 *   overrides: { // TaskOverride
 *     containerOverrides: [ // ContainerOverrides
 *       { // ContainerOverride
 *         name: "STRING_VALUE",
 *         command: "<StringList>",
 *         environment: [ // EnvironmentVariables
 *           { // KeyValuePair
 *             name: "STRING_VALUE",
 *             value: "STRING_VALUE",
 *           },
 *         ],
 *         environmentFiles: [ // EnvironmentFiles
 *           { // EnvironmentFile
 *             value: "STRING_VALUE", // required
 *             type: "s3", // required
 *           },
 *         ],
 *         cpu: Number("int"),
 *         memory: Number("int"),
 *         memoryReservation: Number("int"),
 *         resourceRequirements: [ // ResourceRequirements
 *           { // ResourceRequirement
 *             value: "STRING_VALUE", // required
 *             type: "GPU" || "InferenceAccelerator", // required
 *           },
 *         ],
 *       },
 *     ],
 *     cpu: "STRING_VALUE",
 *     inferenceAcceleratorOverrides: [ // InferenceAcceleratorOverrides
 *       { // InferenceAcceleratorOverride
 *         deviceName: "STRING_VALUE",
 *         deviceType: "STRING_VALUE",
 *       },
 *     ],
 *     executionRoleArn: "STRING_VALUE",
 *     memory: "STRING_VALUE",
 *     taskRoleArn: "STRING_VALUE",
 *     ephemeralStorage: { // EphemeralStorage
 *       sizeInGiB: Number("int"), // required
 *     },
 *   },
 *   propagateTags: "TASK_DEFINITION" || "SERVICE" || "NONE",
 *   referenceId: "STRING_VALUE",
 *   startedBy: "STRING_VALUE",
 *   tags: [ // Tags
 *     { // Tag
 *       key: "STRING_VALUE",
 *       value: "STRING_VALUE",
 *     },
 *   ],
 *   taskDefinition: "STRING_VALUE", // required
 * };
 * const command = new StartTaskCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param StartTaskCommandInput - {@link StartTaskCommandInput}
 * @returns {@link StartTaskCommandOutput}
 * @see {@link StartTaskCommandInput} for command's `input` shape.
 * @see {@link StartTaskCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for ECSClient's `config` shape.
 *
 * @throws {@link ClientException} (client fault)
 *  <p>These errors are usually caused by a client action. This client action might be using
 * 			an action or resource on behalf of a user that doesn't have permissions to use the
 * 			action or resource,. Or, it might be specifying an identifier that isn't valid.</p>
 *
 * @throws {@link ClusterNotFoundException} (client fault)
 *  <p>The specified cluster wasn't found. You can view your available clusters with <a>ListClusters</a>. Amazon ECS clusters are Region specific.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter isn't valid. Review the available parameters for the API
 * 			request.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server issue.</p>
 *
 *
 */
export class StartTaskCommand extends $Command<StartTaskCommandInput, StartTaskCommandOutput, ECSClientResolvedConfig> {
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
  constructor(readonly input: StartTaskCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ECSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartTaskCommandInput, StartTaskCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, StartTaskCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECSClient";
    const commandName = "StartTaskCommand";
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
  private serialize(input: StartTaskCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_StartTaskCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartTaskCommandOutput> {
    return de_StartTaskCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
