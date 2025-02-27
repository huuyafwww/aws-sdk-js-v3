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

import { DecisionTask, PollForDecisionTaskInput } from "../models/models_0";
import { de_PollForDecisionTaskCommand, se_PollForDecisionTaskCommand } from "../protocols/Aws_json1_0";
import { ServiceInputTypes, ServiceOutputTypes, SWFClientResolvedConfig } from "../SWFClient";

/**
 * @public
 *
 * The input for {@link PollForDecisionTaskCommand}.
 */
export interface PollForDecisionTaskCommandInput extends PollForDecisionTaskInput {}
/**
 * @public
 *
 * The output of {@link PollForDecisionTaskCommand}.
 */
export interface PollForDecisionTaskCommandOutput extends DecisionTask, __MetadataBearer {}

/**
 * @public
 * <p>Used by deciders to get a <a>DecisionTask</a> from the specified decision
 *         <code>taskList</code>. A decision task may be returned for any open workflow execution that
 *       is using the specified task list. The task includes a paginated view of the history of the
 *       workflow execution. The decider should use the workflow type and the history to determine how
 *       to properly handle the task.</p>
 *          <p>This action initiates a long poll, where the service holds the HTTP connection open and
 *       responds as soon a task becomes available. If no decision task is available in the specified
 *       task list before the timeout of 60 seconds expires, an empty result is returned. An empty
 *       result, in this context, means that a DecisionTask is returned, but that the value of
 *       taskToken is an empty string.</p>
 *          <important>
 *             <p>Deciders should set their client side socket timeout to at least 70 seconds (10
 *         seconds higher than the timeout).</p>
 *          </important>
 *          <important>
 *             <p>Because the number of workflow history events for a single workflow execution might
 *         be very large, the result returned might be split up across a number of pages. To retrieve
 *         subsequent pages, make additional calls to <code>PollForDecisionTask</code> using the
 *           <code>nextPageToken</code> returned by the initial call. Note that you do
 *           <i>not</i> call <code>GetWorkflowExecutionHistory</code> with this
 *           <code>nextPageToken</code>. Instead, call <code>PollForDecisionTask</code>
 *         again.</p>
 *          </important>
 *          <p>
 *             <b>Access Control</b>
 *          </p>
 *          <p>You can use IAM policies to control this action's access to Amazon SWF resources as
 *       follows:</p>
 *          <ul>
 *             <li>
 *                <p>Use a <code>Resource</code> element with the domain name to limit the action to
 *           only specified domains.</p>
 *             </li>
 *             <li>
 *                <p>Use an <code>Action</code> element to allow or deny permission to call this
 *           action.</p>
 *             </li>
 *             <li>
 *                <p>Constrain the <code>taskList.name</code> parameter by using a
 *             <code>Condition</code> element with the <code>swf:taskList.name</code> key to allow the
 *           action to access only certain task lists.</p>
 *             </li>
 *          </ul>
 *          <p>If the caller doesn't have sufficient permissions to invoke the action, or the
 *       parameter values fall outside the specified constraints, the action fails. The associated
 *       event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>.
 *       For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF
 *         Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SWFClient, PollForDecisionTaskCommand } from "@aws-sdk/client-swf"; // ES Modules import
 * // const { SWFClient, PollForDecisionTaskCommand } = require("@aws-sdk/client-swf"); // CommonJS import
 * const client = new SWFClient(config);
 * const input = { // PollForDecisionTaskInput
 *   domain: "STRING_VALUE", // required
 *   taskList: { // TaskList
 *     name: "STRING_VALUE", // required
 *   },
 *   identity: "STRING_VALUE",
 *   nextPageToken: "STRING_VALUE",
 *   maximumPageSize: Number("int"),
 *   reverseOrder: true || false,
 * };
 * const command = new PollForDecisionTaskCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param PollForDecisionTaskCommandInput - {@link PollForDecisionTaskCommandInput}
 * @returns {@link PollForDecisionTaskCommandOutput}
 * @see {@link PollForDecisionTaskCommandInput} for command's `input` shape.
 * @see {@link PollForDecisionTaskCommandOutput} for command's `response` shape.
 * @see {@link SWFClientResolvedConfig | config} for SWFClient's `config` shape.
 *
 * @throws {@link LimitExceededFault} (client fault)
 *  <p>Returned by any operation if a system imposed limitation has been reached. To address this fault you should either clean up unused resources or increase the limit by contacting AWS.</p>
 *
 * @throws {@link OperationNotPermittedFault} (client fault)
 *  <p>Returned when the caller doesn't have sufficient permissions to invoke the action.</p>
 *
 * @throws {@link UnknownResourceFault} (client fault)
 *  <p>Returned when the named resource cannot be found with in the scope of this operation (region or domain). This could happen if the named resource was never created or is no longer available for this operation.</p>
 *
 *
 */
export class PollForDecisionTaskCommand extends $Command<
  PollForDecisionTaskCommandInput,
  PollForDecisionTaskCommandOutput,
  SWFClientResolvedConfig
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
  constructor(readonly input: PollForDecisionTaskCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SWFClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PollForDecisionTaskCommandInput, PollForDecisionTaskCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PollForDecisionTaskCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SWFClient";
    const commandName = "PollForDecisionTaskCommand";
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
  private serialize(input: PollForDecisionTaskCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_PollForDecisionTaskCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PollForDecisionTaskCommandOutput> {
    return de_PollForDecisionTaskCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
