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
import { DeleteTaskDefinitionsRequest, DeleteTaskDefinitionsResponse } from "../models/models_0";
import { de_DeleteTaskDefinitionsCommand, se_DeleteTaskDefinitionsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link DeleteTaskDefinitionsCommand}.
 */
export interface DeleteTaskDefinitionsCommandInput extends DeleteTaskDefinitionsRequest {}
/**
 * @public
 *
 * The output of {@link DeleteTaskDefinitionsCommand}.
 */
export interface DeleteTaskDefinitionsCommandOutput extends DeleteTaskDefinitionsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Deletes one or more task definitions.</p>
 *          <p>You must deregister a task definition revision before you delete it. For more information,
 * 			see <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DeregisterTaskDefinition.html">DeregisterTaskDefinition</a>.</p>
 *          <p>When you delete a task definition revision, it is immediately transitions from the
 * 		<code>INACTIVE</code> to <code>DELETE_IN_PROGRESS</code>. Existing tasks and services
 * 		that reference a <code>DELETE_IN_PROGRESS</code> task definition revision continue to run
 * 		without disruption. Existing services that reference a <code>DELETE_IN_PROGRESS</code> task
 * 		definition revision can still scale up or down by modifying the service's desired
 * 		count.</p>
 *          <p>You can't use a <code>DELETE_IN_PROGRESS</code> task definition revision to run new tasks
 * 			or create new services. You also can't update an existing service to reference a
 * 			<code>DELETE_IN_PROGRESS</code> task definition revision.</p>
 *          <p> A task definition revision will stay in <code>DELETE_IN_PROGRESS</code> status until
 * 			all the associated tasks and services have been terminated.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, DeleteTaskDefinitionsCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, DeleteTaskDefinitionsCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const input = { // DeleteTaskDefinitionsRequest
 *   taskDefinitions: [ // StringList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DeleteTaskDefinitionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DeleteTaskDefinitionsCommandInput - {@link DeleteTaskDefinitionsCommandInput}
 * @returns {@link DeleteTaskDefinitionsCommandOutput}
 * @see {@link DeleteTaskDefinitionsCommandInput} for command's `input` shape.
 * @see {@link DeleteTaskDefinitionsCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for ECSClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have authorization to perform the requested action.</p>
 *
 * @throws {@link ClientException} (client fault)
 *  <p>These errors are usually caused by a client action. This client action might be using
 * 			an action or resource on behalf of a user that doesn't have permissions to use the
 * 			action or resource,. Or, it might be specifying an identifier that isn't valid.</p>
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
export class DeleteTaskDefinitionsCommand extends $Command<
  DeleteTaskDefinitionsCommandInput,
  DeleteTaskDefinitionsCommandOutput,
  ECSClientResolvedConfig
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
  constructor(readonly input: DeleteTaskDefinitionsCommandInput) {
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
  ): Handler<DeleteTaskDefinitionsCommandInput, DeleteTaskDefinitionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteTaskDefinitionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECSClient";
    const commandName = "DeleteTaskDefinitionsCommand";
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
  private serialize(input: DeleteTaskDefinitionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteTaskDefinitionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteTaskDefinitionsCommandOutput> {
    return de_DeleteTaskDefinitionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
