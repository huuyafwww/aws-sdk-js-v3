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

import { DeleteDBClusterMessage, DeleteDBClusterResult } from "../models/models_0";
import { de_DeleteDBClusterCommand, se_DeleteDBClusterCommand } from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 *
 * The input for {@link DeleteDBClusterCommand}.
 */
export interface DeleteDBClusterCommandInput extends DeleteDBClusterMessage {}
/**
 * @public
 *
 * The output of {@link DeleteDBClusterCommand}.
 */
export interface DeleteDBClusterCommandOutput extends DeleteDBClusterResult, __MetadataBearer {}

/**
 * @public
 * <p>The DeleteDBCluster action deletes a previously provisioned DB cluster.
 *           When you delete a DB cluster, all automated backups for that DB cluster are deleted and can't be recovered.
 *           Manual DB cluster snapshots of the specified DB cluster are not deleted.</p>
 *          <p>If you're deleting a Multi-AZ DB cluster with read replicas, all cluster members are
 *             terminated and read replicas are promoted to standalone instances.</p>
 *          <p>For more information on Amazon Aurora, see
 *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html">
 *               What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p>
 *          <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB
 *                 cluster deployments</a> in the <i>Amazon RDS User
 *             Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DeleteDBClusterCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DeleteDBClusterCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const input = { // DeleteDBClusterMessage
 *   DBClusterIdentifier: "STRING_VALUE", // required
 *   SkipFinalSnapshot: true || false,
 *   FinalDBSnapshotIdentifier: "STRING_VALUE",
 * };
 * const command = new DeleteDBClusterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DeleteDBClusterCommandInput - {@link DeleteDBClusterCommandInput}
 * @returns {@link DeleteDBClusterCommandOutput}
 * @see {@link DeleteDBClusterCommandInput} for command's `input` shape.
 * @see {@link DeleteDBClusterCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBClusterNotFoundFault} (client fault)
 *  <p>
 *             <code>DBClusterIdentifier</code> doesn't refer to an existing DB cluster.</p>
 *
 * @throws {@link DBClusterSnapshotAlreadyExistsFault} (client fault)
 *  <p>The user already has a DB cluster snapshot with the given identifier.</p>
 *
 * @throws {@link InvalidDBClusterSnapshotStateFault} (client fault)
 *  <p>The supplied value isn't a valid DB cluster snapshot state.</p>
 *
 * @throws {@link InvalidDBClusterStateFault} (client fault)
 *  <p>The requested operation can't be performed while the cluster is in this state.</p>
 *
 * @throws {@link SnapshotQuotaExceededFault} (client fault)
 *  <p>The request would result in the user exceeding the allowed number of DB
 *             snapshots.</p>
 *
 *
 * @example To delete a DB cluster
 * ```javascript
 * // The following example deletes the DB cluster named mycluster and takes a final snapshot named mycluster-final-snapshot. The status of the DB cluster is available while the snapshot is being taken.
 * const input = {
 *   "DBClusterIdentifier": "mycluster",
 *   "FinalDBSnapshotIdentifier": "mycluster-final-snapshot",
 *   "SkipFinalSnapshot": false
 * };
 * const command = new DeleteDBClusterCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "DBCluster": {
 *     "AllocatedStorage": 20,
 *     "AvailabilityZones": [
 *       "eu-central-1b",
 *       "eu-central-1c",
 *       "eu-central-1a"
 *     ],
 *     "BackupRetentionPeriod": 7,
 *     "DBClusterIdentifier": "mycluster",
 *     "DBClusterParameterGroup": "default.aurora-postgresql10",
 *     "DBSubnetGroup": "default-vpc-aa11bb22",
 *     "Status": "available"
 *   }
 * }
 * *\/
 * // example id: to-delete-a-db-cluster-1680197141906
 * ```
 *
 */
export class DeleteDBClusterCommand extends $Command<
  DeleteDBClusterCommandInput,
  DeleteDBClusterCommandOutput,
  RDSClientResolvedConfig
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
  constructor(readonly input: DeleteDBClusterCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RDSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteDBClusterCommandInput, DeleteDBClusterCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteDBClusterCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "DeleteDBClusterCommand";
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
  private serialize(input: DeleteDBClusterCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteDBClusterCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteDBClusterCommandOutput> {
    return de_DeleteDBClusterCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
