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

import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { DeleteGameServerGroupInput, DeleteGameServerGroupOutput } from "../models/models_0";
import { de_DeleteGameServerGroupCommand, se_DeleteGameServerGroupCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link DeleteGameServerGroupCommand}.
 */
export interface DeleteGameServerGroupCommandInput extends DeleteGameServerGroupInput {}
/**
 * @public
 *
 * The output of {@link DeleteGameServerGroupCommand}.
 */
export interface DeleteGameServerGroupCommandOutput extends DeleteGameServerGroupOutput, __MetadataBearer {}

/**
 * @public
 * <p>
 *             <b>This operation is used with the Amazon GameLift FleetIQ solution and game server groups.</b>
 *          </p>
 *          <p>Terminates a game server group
 *             and permanently deletes the game server group record. You have several options for how
 *             these resources are impacted when deleting the game server group. Depending on the type
 *             of delete operation selected, this operation might affect these resources:</p>
 *          <ul>
 *             <li>
 *                <p>The game server group</p>
 *             </li>
 *             <li>
 *                <p>The corresponding Auto Scaling group</p>
 *             </li>
 *             <li>
 *                <p>All game servers that are currently running in the group</p>
 *             </li>
 *          </ul>
 *          <p>To delete a game server group, identify the game server group to delete and specify
 *             the type of delete operation to initiate. Game server groups can only be deleted if they
 *             are in <code>ACTIVE</code> or <code>ERROR</code> status.</p>
 *          <p>If the delete request is successful, a series of operations are kicked off. The game
 *             server group status is changed to <code>DELETE_SCHEDULED</code>, which prevents new game
 *             servers from being registered and stops automatic scaling activity. Once all game
 *             servers in the game server group are deregistered, Amazon GameLift FleetIQ can begin deleting resources.
 *             If any of the delete operations fail, the game server group is placed in
 *                 <code>ERROR</code> status.</p>
 *          <p>Amazon GameLift FleetIQ emits delete events to Amazon CloudWatch.</p>
 *          <p>
 *             <b>Learn more</b>
 *          </p>
 *          <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-intro.html">Amazon GameLift FleetIQ
 *                 Guide</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, DeleteGameServerGroupCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, DeleteGameServerGroupCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const input = { // DeleteGameServerGroupInput
 *   GameServerGroupName: "STRING_VALUE", // required
 *   DeleteOption: "SAFE_DELETE" || "FORCE_DELETE" || "RETAIN",
 * };
 * const command = new DeleteGameServerGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DeleteGameServerGroupCommandInput - {@link DeleteGameServerGroupCommandInput}
 * @returns {@link DeleteGameServerGroupCommandOutput}
 * @see {@link DeleteGameServerGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteGameServerGroupCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for GameLiftClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>The service encountered an unrecoverable internal failure while processing the
 *             request. Clients can retry such requests immediately or after a waiting period.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>One or more parameter values in the request are invalid. Correct the invalid parameter
 *             values before retrying.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>THe requested resources was not found. The resource was either not created yet or deleted.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>The client failed authentication. Clients should not retry such requests.</p>
 *
 *
 */
export class DeleteGameServerGroupCommand extends $Command<
  DeleteGameServerGroupCommandInput,
  DeleteGameServerGroupCommandOutput,
  GameLiftClientResolvedConfig
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
  constructor(readonly input: DeleteGameServerGroupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GameLiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteGameServerGroupCommandInput, DeleteGameServerGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteGameServerGroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "DeleteGameServerGroupCommand";
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
  private serialize(input: DeleteGameServerGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteGameServerGroupCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteGameServerGroupCommandOutput> {
    return de_DeleteGameServerGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
