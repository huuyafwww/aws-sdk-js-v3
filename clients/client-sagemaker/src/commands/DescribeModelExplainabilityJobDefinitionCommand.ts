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

import {
  DescribeModelExplainabilityJobDefinitionRequest,
  DescribeModelExplainabilityJobDefinitionResponse,
} from "../models/models_2";
import {
  de_DescribeModelExplainabilityJobDefinitionCommand,
  se_DescribeModelExplainabilityJobDefinitionCommand,
} from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 *
 * The input for {@link DescribeModelExplainabilityJobDefinitionCommand}.
 */
export interface DescribeModelExplainabilityJobDefinitionCommandInput
  extends DescribeModelExplainabilityJobDefinitionRequest {}
/**
 * @public
 *
 * The output of {@link DescribeModelExplainabilityJobDefinitionCommand}.
 */
export interface DescribeModelExplainabilityJobDefinitionCommandOutput
  extends DescribeModelExplainabilityJobDefinitionResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Returns a description of a model explainability job definition.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeModelExplainabilityJobDefinitionCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeModelExplainabilityJobDefinitionCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // DescribeModelExplainabilityJobDefinitionRequest
 *   JobDefinitionName: "STRING_VALUE", // required
 * };
 * const command = new DescribeModelExplainabilityJobDefinitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DescribeModelExplainabilityJobDefinitionCommandInput - {@link DescribeModelExplainabilityJobDefinitionCommandInput}
 * @returns {@link DescribeModelExplainabilityJobDefinitionCommandOutput}
 * @see {@link DescribeModelExplainabilityJobDefinitionCommandInput} for command's `input` shape.
 * @see {@link DescribeModelExplainabilityJobDefinitionCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceNotFound} (client fault)
 *  <p>Resource being access is not found.</p>
 *
 *
 */
export class DescribeModelExplainabilityJobDefinitionCommand extends $Command<
  DescribeModelExplainabilityJobDefinitionCommandInput,
  DescribeModelExplainabilityJobDefinitionCommandOutput,
  SageMakerClientResolvedConfig
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
  constructor(readonly input: DescribeModelExplainabilityJobDefinitionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SageMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DescribeModelExplainabilityJobDefinitionCommandInput,
    DescribeModelExplainabilityJobDefinitionCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        DescribeModelExplainabilityJobDefinitionCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "DescribeModelExplainabilityJobDefinitionCommand";
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
    input: DescribeModelExplainabilityJobDefinitionCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeModelExplainabilityJobDefinitionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeModelExplainabilityJobDefinitionCommandOutput> {
    return de_DescribeModelExplainabilityJobDefinitionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
