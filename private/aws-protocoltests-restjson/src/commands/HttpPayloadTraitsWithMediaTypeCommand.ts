// smithy-typescript generated code
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

import { HttpPayloadTraitsWithMediaTypeInputOutput } from "../models/models_0";
import {
  de_HttpPayloadTraitsWithMediaTypeCommand,
  se_HttpPayloadTraitsWithMediaTypeCommand,
} from "../protocols/Aws_restJson1";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";

/**
 * @public
 *
 * The input for {@link HttpPayloadTraitsWithMediaTypeCommand}.
 */
export interface HttpPayloadTraitsWithMediaTypeCommandInput extends HttpPayloadTraitsWithMediaTypeInputOutput {}
/**
 * @public
 *
 * The output of {@link HttpPayloadTraitsWithMediaTypeCommand}.
 */
export interface HttpPayloadTraitsWithMediaTypeCommandOutput
  extends HttpPayloadTraitsWithMediaTypeInputOutput,
    __MetadataBearer {}

/**
 * @public
 * This examples uses a `@mediaType` trait on the payload to force a custom
 * content-type to be serialized.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, HttpPayloadTraitsWithMediaTypeCommand } from "@aws-sdk/aws-protocoltests-restjson"; // ES Modules import
 * // const { RestJsonProtocolClient, HttpPayloadTraitsWithMediaTypeCommand } = require("@aws-sdk/aws-protocoltests-restjson"); // CommonJS import
 * const client = new RestJsonProtocolClient(config);
 * const input = { // HttpPayloadTraitsWithMediaTypeInputOutput
 *   foo: "STRING_VALUE",
 *   blob: "BLOB_VALUE",
 * };
 * const command = new HttpPayloadTraitsWithMediaTypeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param HttpPayloadTraitsWithMediaTypeCommandInput - {@link HttpPayloadTraitsWithMediaTypeCommandInput}
 * @returns {@link HttpPayloadTraitsWithMediaTypeCommandOutput}
 * @see {@link HttpPayloadTraitsWithMediaTypeCommandInput} for command's `input` shape.
 * @see {@link HttpPayloadTraitsWithMediaTypeCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 *
 */
export class HttpPayloadTraitsWithMediaTypeCommand extends $Command<
  HttpPayloadTraitsWithMediaTypeCommandInput,
  HttpPayloadTraitsWithMediaTypeCommandOutput,
  RestJsonProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  /**
   * @public
   */
  constructor(readonly input: HttpPayloadTraitsWithMediaTypeCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RestJsonProtocolClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<HttpPayloadTraitsWithMediaTypeCommandInput, HttpPayloadTraitsWithMediaTypeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RestJsonProtocolClient";
    const commandName = "HttpPayloadTraitsWithMediaTypeCommand";
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
    input: HttpPayloadTraitsWithMediaTypeCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_HttpPayloadTraitsWithMediaTypeCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<HttpPayloadTraitsWithMediaTypeCommandOutput> {
    return de_HttpPayloadTraitsWithMediaTypeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
