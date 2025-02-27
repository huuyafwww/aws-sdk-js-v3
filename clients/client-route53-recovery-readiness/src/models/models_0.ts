// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";

import { Route53RecoveryReadinessServiceException as __BaseException } from "./Route53RecoveryReadinessServiceException";

/**
 * @public
 * <p>Information about a cell.</p>
 */
export interface CellOutput {
  /**
   * <p>The Amazon Resource Name (ARN) for the cell.</p>
   */
  CellArn: string | undefined;

  /**
   * <p>The name of the cell.</p>
   */
  CellName: string | undefined;

  /**
   * <p>A list of cell ARNs.</p>
   */
  Cells: string[] | undefined;

  /**
   * <p>The readiness scope for the cell, which can be a cell Amazon Resource Name (ARN) or a recovery group ARN. This is a list but currently can have only one element.</p>
   */
  ParentReadinessScopes: string[] | undefined;

  /**
   * <p>Tags on the resources.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 * <p>Readiness rule information, including the resource type, rule ID, and rule description.</p>
 */
export interface ListRulesOutput {
  /**
   * <p>The resource type that the readiness rule applies to.</p>
   */
  ResourceType: string | undefined;

  /**
   * <p>The description of a readiness rule.</p>
   */
  RuleDescription: string | undefined;

  /**
   * <p>The ID for the readiness rule.</p>
   */
  RuleId: string | undefined;
}

/**
 * @public
 * <p>Information relating to readiness check status.</p>
 */
export interface Message {
  /**
   * <p>The text of a readiness check message.</p>
   */
  MessageText?: string;
}

/**
 * @public
 * <p>A readiness check.</p>
 */
export interface ReadinessCheckOutput {
  /**
   * <p>The Amazon Resource Name (ARN) associated with a readiness check.</p>
   */
  ReadinessCheckArn: string | undefined;

  /**
   * <p>Name of a readiness check.</p>
   */
  ReadinessCheckName?: string;

  /**
   * <p>Name of the resource set to be checked.</p>
   */
  ResourceSet: string | undefined;

  /**
   * <p>A collection of tags associated with a resource.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 * @enum
 */
export const Readiness = {
  NOT_AUTHORIZED: "NOT_AUTHORIZED",
  NOT_READY: "NOT_READY",
  READY: "READY",
  UNKNOWN: "UNKNOWN",
} as const;

/**
 * @public
 */
export type Readiness = (typeof Readiness)[keyof typeof Readiness];

/**
 * @public
 * <p>Summary of all readiness check statuses in a recovery group, paginated in GetRecoveryGroupReadinessSummary and GetCellReadinessSummary.</p>
 */
export interface ReadinessCheckSummary {
  /**
   * <p>The readiness status of this readiness check.</p>
   */
  Readiness?: Readiness | string;

  /**
   * <p>The name of a readiness check.</p>
   */
  ReadinessCheckName?: string;
}

/**
 * @public
 * <p>Recommendations that are provided to make an application more recovery resilient.</p>
 */
export interface Recommendation {
  /**
   * <p>Text of the recommendations that are provided to make an application more recovery resilient.</p>
   */
  RecommendationText: string | undefined;
}

/**
 * @public
 * <p>A representation of the application, typically containing multiple cells.</p>
 */
export interface RecoveryGroupOutput {
  /**
   * <p>A list of a cell's Amazon Resource Names (ARNs).</p>
   */
  Cells: string[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the recovery group.</p>
   */
  RecoveryGroupArn: string | undefined;

  /**
   * <p>The name of the recovery group.</p>
   */
  RecoveryGroupName: string | undefined;

  /**
   * <p>The tags associated with the recovery group.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 * <p>The Network Load Balancer resource that a DNS target resource points to.</p>
 */
export interface NLBResource {
  /**
   * <p>The Network Load Balancer resource Amazon Resource Name (ARN).</p>
   */
  Arn?: string;
}

/**
 * @public
 * <p>The Route 53 resource that a DNS target resource record points to.</p>
 */
export interface R53ResourceRecord {
  /**
   * <p>The DNS target domain name.</p>
   */
  DomainName?: string;

  /**
   * <p>The Route 53 Resource Record Set ID.</p>
   */
  RecordSetId?: string;
}

/**
 * @public
 * <p>The target resource that the Route 53 record points to.</p>
 */
export interface TargetResource {
  /**
   * <p>The Network Load Balancer Resource.</p>
   */
  NLBResource?: NLBResource;

  /**
   * <p>The Route 53 resource.</p>
   */
  R53Resource?: R53ResourceRecord;
}

/**
 * @public
 * <p>A component for DNS/routing control readiness checks and architecture checks.</p>
 */
export interface DNSTargetResource {
  /**
   * <p>The domain name that acts as an ingress point to a portion of the customer application.</p>
   */
  DomainName?: string;

  /**
   * <p>The hosted zone Amazon Resource Name (ARN) that contains the DNS record with the provided name of the target resource.</p>
   */
  HostedZoneArn?: string;

  /**
   * <p>The Route 53 record set ID that uniquely identifies a DNS record, given a name and a type.</p>
   */
  RecordSetId?: string;

  /**
   * <p>The type of DNS record of the target resource.</p>
   */
  RecordType?: string;

  /**
   * <p>The target resource of the DNS target resource.</p>
   */
  TargetResource?: TargetResource;
}

/**
 * @public
 * <p>The resource element of a resource set.</p>
 */
export interface Resource {
  /**
   * <p>The component identifier of the resource, generated when DNS target resource is used.</p>
   */
  ComponentId?: string;

  /**
   * <p>The DNS target resource.</p>
   */
  DnsTargetResource?: DNSTargetResource;

  /**
   * <p>A list of recovery group Amazon Resource Names (ARNs) and cell ARNs that this resource is contained within.</p>
   */
  ReadinessScopes?: string[];

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Web Services resource.</p>
   */
  ResourceArn?: string;
}

/**
 * @public
 * <p>The result of a successful Resource request, with status for an individual resource.</p>
 */
export interface ResourceResult {
  /**
   * <p>The component id of the resource.</p>
   */
  ComponentId?: string;

  /**
   * <p>The time (UTC) that the resource was last checked for readiness, in ISO-8601 format.</p>
   */
  LastCheckedTimestamp: Date | undefined;

  /**
   * <p>The readiness of a resource.</p>
   */
  Readiness: Readiness | string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  ResourceArn?: string;
}

/**
 * @public
 * <p>A collection of resources of the same type.</p>
 */
export interface ResourceSetOutput {
  /**
   * <p>The Amazon Resource Name (ARN) for the resource set.</p>
   */
  ResourceSetArn: string | undefined;

  /**
   * <p>The name of the resource set.</p>
   */
  ResourceSetName: string | undefined;

  /**
   * <p>The resource type of the resources in the resource set. Enter one of the following values for resource type:</p> <p>AWS::ApiGateway::Stage, AWS::ApiGatewayV2::Stage, AWS::AutoScaling::AutoScalingGroup, AWS::CloudWatch::Alarm, AWS::EC2::CustomerGateway, AWS::DynamoDB::Table, AWS::EC2::Volume, AWS::ElasticLoadBalancing::LoadBalancer, AWS::ElasticLoadBalancingV2::LoadBalancer, AWS::Lambda::Function, AWS::MSK::Cluster, AWS::RDS::DBCluster, AWS::Route53::HealthCheck, AWS::SQS::Queue, AWS::SNS::Topic, AWS::SNS::Subscription, AWS::EC2::VPC, AWS::EC2::VPNConnection, AWS::EC2::VPNGateway, AWS::Route53RecoveryReadiness::DNSTargetResource</p>
   */
  ResourceSetType: string | undefined;

  /**
   * <p>A list of resource objects.</p>
   */
  Resources: Resource[] | undefined;

  /**
   * <p>A collection of tags associated with a resource.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 * <p>The result of a successful Rule request, with status for an individual rule.</p>
 */
export interface RuleResult {
  /**
   * <p>The time the resource was last checked for readiness, in ISO-8601 format, UTC.</p>
   */
  LastCheckedTimestamp: Date | undefined;

  /**
   * <p>Details about the resource's readiness.</p>
   */
  Messages: Message[] | undefined;

  /**
   * <p>The readiness at rule level.</p>
   */
  Readiness: Readiness | string | undefined;

  /**
   * <p>The identifier of the rule.</p>
   */
  RuleId: string | undefined;
}

/**
 * @public
 * User does not have sufficient access to perform this action.
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessDeniedException, __BaseException>) {
    super({
      name: "AccessDeniedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessDeniedException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * Updating or deleting a resource can cause an inconsistent state.
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConflictException, __BaseException>) {
    super({
      name: "ConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConflictException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface CreateCellRequest {
  /**
   * <p>The name of the cell to create.</p>
   */
  CellName: string | undefined;

  /**
   * <p>A list of cell Amazon Resource Names (ARNs) contained within this cell, for use in nested cells. For example, Availability Zones within specific Amazon Web Services Regions.</p>
   */
  Cells?: string[];

  /**
   * <p>A collection of tags associated with a resource.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateCellResponse {
  /**
   * <p>The Amazon Resource Name (ARN) for the cell.</p>
   */
  CellArn?: string;

  /**
   * <p>The name of the cell.</p>
   */
  CellName?: string;

  /**
   * <p>A list of cell ARNs.</p>
   */
  Cells?: string[];

  /**
   * <p>The readiness scope for the cell, which can be a cell Amazon Resource Name (ARN) or a recovery group ARN. This is a list but currently can have only one element.</p>
   */
  ParentReadinessScopes?: string[];

  /**
   * <p>Tags on the resources.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 * An unexpected error occurred.
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerException, __BaseException>) {
    super({
      name: "InternalServerException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * Request was denied due to request throttling.
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottlingException, __BaseException>) {
    super({
      name: "ThrottlingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottlingException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * The input fails to satisfy the constraints specified by an AWS service.
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ValidationException, __BaseException>) {
    super({
      name: "ValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ValidationException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface CreateCrossAccountAuthorizationRequest {
  /**
   * <p>The cross-account authorization.</p>
   */
  CrossAccountAuthorization: string | undefined;
}

/**
 * @public
 */
export interface CreateCrossAccountAuthorizationResponse {
  /**
   * <p>The cross-account authorization.</p>
   */
  CrossAccountAuthorization?: string;
}

/**
 * @public
 */
export interface CreateReadinessCheckRequest {
  /**
   * <p>The name of the readiness check to create.</p>
   */
  ReadinessCheckName: string | undefined;

  /**
   * <p>The name of the resource set to check.</p>
   */
  ResourceSetName: string | undefined;

  /**
   * <p>A collection of tags associated with a resource.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateReadinessCheckResponse {
  /**
   * <p>The Amazon Resource Name (ARN) associated with a readiness check.</p>
   */
  ReadinessCheckArn?: string;

  /**
   * <p>Name of a readiness check.</p>
   */
  ReadinessCheckName?: string;

  /**
   * <p>Name of the resource set to be checked.</p>
   */
  ResourceSet?: string;

  /**
   * <p>A collection of tags associated with a resource.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateRecoveryGroupRequest {
  /**
   * <p>A list of the cell Amazon Resource Names (ARNs) in the recovery group.</p>
   */
  Cells?: string[];

  /**
   * <p>The name of the recovery group to create.</p>
   */
  RecoveryGroupName: string | undefined;

  /**
   * <p>A collection of tags associated with a resource.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateRecoveryGroupResponse {
  /**
   * <p>A list of a cell's Amazon Resource Names (ARNs).</p>
   */
  Cells?: string[];

  /**
   * <p>The Amazon Resource Name (ARN) for the recovery group.</p>
   */
  RecoveryGroupArn?: string;

  /**
   * <p>The name of the recovery group.</p>
   */
  RecoveryGroupName?: string;

  /**
   * <p>The tags associated with the recovery group.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateResourceSetRequest {
  /**
   * <p>The name of the resource set to create.</p>
   */
  ResourceSetName: string | undefined;

  /**
   * <p>The resource type of the resources in the resource set. Enter one of the following values for resource type:</p> <p>AWS::ApiGateway::Stage, AWS::ApiGatewayV2::Stage, AWS::AutoScaling::AutoScalingGroup, AWS::CloudWatch::Alarm, AWS::EC2::CustomerGateway, AWS::DynamoDB::Table, AWS::EC2::Volume, AWS::ElasticLoadBalancing::LoadBalancer, AWS::ElasticLoadBalancingV2::LoadBalancer, AWS::Lambda::Function, AWS::MSK::Cluster, AWS::RDS::DBCluster, AWS::Route53::HealthCheck, AWS::SQS::Queue, AWS::SNS::Topic, AWS::SNS::Subscription, AWS::EC2::VPC, AWS::EC2::VPNConnection, AWS::EC2::VPNGateway, AWS::Route53RecoveryReadiness::DNSTargetResource</p>
   */
  ResourceSetType: string | undefined;

  /**
   * <p>A list of resource objects in the resource set.</p>
   */
  Resources: Resource[] | undefined;

  /**
   * <p>A tag to associate with the parameters for a resource set.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateResourceSetResponse {
  /**
   * <p>The Amazon Resource Name (ARN) for the resource set.</p>
   */
  ResourceSetArn?: string;

  /**
   * <p>The name of the resource set.</p>
   */
  ResourceSetName?: string;

  /**
   * <p>The resource type of the resources in the resource set. Enter one of the following values for resource type:</p> <p>AWS::ApiGateway::Stage, AWS::ApiGatewayV2::Stage, AWS::AutoScaling::AutoScalingGroup, AWS::CloudWatch::Alarm, AWS::EC2::CustomerGateway, AWS::DynamoDB::Table, AWS::EC2::Volume, AWS::ElasticLoadBalancing::LoadBalancer, AWS::ElasticLoadBalancingV2::LoadBalancer, AWS::Lambda::Function, AWS::MSK::Cluster, AWS::RDS::DBCluster, AWS::Route53::HealthCheck, AWS::SQS::Queue, AWS::SNS::Topic, AWS::SNS::Subscription, AWS::EC2::VPC, AWS::EC2::VPNConnection, AWS::EC2::VPNGateway, AWS::Route53RecoveryReadiness::DNSTargetResource</p>
   */
  ResourceSetType?: string;

  /**
   * <p>A list of resource objects.</p>
   */
  Resources?: Resource[];

  /**
   * <p>A collection of tags associated with a resource.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface DeleteCellRequest {
  /**
   * <p>The name of the cell.</p>
   */
  CellName: string | undefined;
}

/**
 * @public
 * The requested resource does not exist.
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface DeleteCrossAccountAuthorizationRequest {
  /**
   * <p>The cross-account authorization.</p>
   */
  CrossAccountAuthorization: string | undefined;
}

/**
 * @public
 */
export interface DeleteCrossAccountAuthorizationResponse {}

/**
 * @public
 */
export interface DeleteReadinessCheckRequest {
  /**
   * <p>Name of a readiness check.</p>
   */
  ReadinessCheckName: string | undefined;
}

/**
 * @public
 */
export interface DeleteRecoveryGroupRequest {
  /**
   * <p>The name of a recovery group.</p>
   */
  RecoveryGroupName: string | undefined;
}

/**
 * @public
 */
export interface DeleteResourceSetRequest {
  /**
   * <p>Name of a resource set.</p>
   */
  ResourceSetName: string | undefined;
}

/**
 * @public
 */
export interface GetArchitectureRecommendationsRequest {
  /**
   * <p>The number of objects that you want to return with this call.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token that identifies which batch of results you want to see.</p>
   */
  NextToken?: string;

  /**
   * <p>The name of a recovery group.</p>
   */
  RecoveryGroupName: string | undefined;
}

/**
 * @public
 */
export interface GetArchitectureRecommendationsResponse {
  /**
   * <p>The time that a recovery group was last assessed for recommendations, in UTC ISO-8601 format.</p>
   */
  LastAuditTimestamp?: Date;

  /**
   * <p>The token that identifies which batch of results you want to see.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of the recommendations for the customer's application.</p>
   */
  Recommendations?: Recommendation[];
}

/**
 * @public
 */
export interface GetCellRequest {
  /**
   * <p>The name of the cell.</p>
   */
  CellName: string | undefined;
}

/**
 * @public
 */
export interface GetCellResponse {
  /**
   * <p>The Amazon Resource Name (ARN) for the cell.</p>
   */
  CellArn?: string;

  /**
   * <p>The name of the cell.</p>
   */
  CellName?: string;

  /**
   * <p>A list of cell ARNs.</p>
   */
  Cells?: string[];

  /**
   * <p>The readiness scope for the cell, which can be a cell Amazon Resource Name (ARN) or a recovery group ARN. This is a list but currently can have only one element.</p>
   */
  ParentReadinessScopes?: string[];

  /**
   * <p>Tags on the resources.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface GetCellReadinessSummaryRequest {
  /**
   * <p>The name of the cell.</p>
   */
  CellName: string | undefined;

  /**
   * <p>The number of objects that you want to return with this call.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token that identifies which batch of results you want to see.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetCellReadinessSummaryResponse {
  /**
   * <p>The token that identifies which batch of results you want to see.</p>
   */
  NextToken?: string;

  /**
   * <p>The readiness at a cell level.</p>
   */
  Readiness?: Readiness | string;

  /**
   * <p>Summaries for the readiness checks that make up the cell.</p>
   */
  ReadinessChecks?: ReadinessCheckSummary[];
}

/**
 * @public
 */
export interface GetReadinessCheckRequest {
  /**
   * <p>Name of a readiness check.</p>
   */
  ReadinessCheckName: string | undefined;
}

/**
 * @public
 */
export interface GetReadinessCheckResponse {
  /**
   * <p>The Amazon Resource Name (ARN) associated with a readiness check.</p>
   */
  ReadinessCheckArn?: string;

  /**
   * <p>Name of a readiness check.</p>
   */
  ReadinessCheckName?: string;

  /**
   * <p>Name of the resource set to be checked.</p>
   */
  ResourceSet?: string;

  /**
   * <p>A collection of tags associated with a resource.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface GetReadinessCheckResourceStatusRequest {
  /**
   * <p>The number of objects that you want to return with this call.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token that identifies which batch of results you want to see.</p>
   */
  NextToken?: string;

  /**
   * <p>Name of a readiness check.</p>
   */
  ReadinessCheckName: string | undefined;

  /**
   * <p>The resource identifier, which is the Amazon Resource Name (ARN) or the identifier generated for the resource by Application Recovery Controller (for example, for a DNS target resource).</p>
   */
  ResourceIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetReadinessCheckResourceStatusResponse {
  /**
   * <p>The token that identifies which batch of results you want to see.</p>
   */
  NextToken?: string;

  /**
   * <p>The readiness at a rule level.</p>
   */
  Readiness?: Readiness | string;

  /**
   * <p>Details of the rule's results.</p>
   */
  Rules?: RuleResult[];
}

/**
 * @public
 */
export interface GetReadinessCheckStatusRequest {
  /**
   * <p>The number of objects that you want to return with this call.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token that identifies which batch of results you want to see.</p>
   */
  NextToken?: string;

  /**
   * <p>Name of a readiness check.</p>
   */
  ReadinessCheckName: string | undefined;
}

/**
 * @public
 */
export interface GetReadinessCheckStatusResponse {
  /**
   * <p>Top level messages for readiness check status</p>
   */
  Messages?: Message[];

  /**
   * <p>The token that identifies which batch of results you want to see.</p>
   */
  NextToken?: string;

  /**
   * <p>The readiness at rule level.</p>
   */
  Readiness?: Readiness | string;

  /**
   * <p>Summary of the readiness of resources.</p>
   */
  Resources?: ResourceResult[];
}

/**
 * @public
 */
export interface GetRecoveryGroupRequest {
  /**
   * <p>The name of a recovery group.</p>
   */
  RecoveryGroupName: string | undefined;
}

/**
 * @public
 */
export interface GetRecoveryGroupResponse {
  /**
   * <p>A list of a cell's Amazon Resource Names (ARNs).</p>
   */
  Cells?: string[];

  /**
   * <p>The Amazon Resource Name (ARN) for the recovery group.</p>
   */
  RecoveryGroupArn?: string;

  /**
   * <p>The name of the recovery group.</p>
   */
  RecoveryGroupName?: string;

  /**
   * <p>The tags associated with the recovery group.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface GetRecoveryGroupReadinessSummaryRequest {
  /**
   * <p>The number of objects that you want to return with this call.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token that identifies which batch of results you want to see.</p>
   */
  NextToken?: string;

  /**
   * <p>The name of a recovery group.</p>
   */
  RecoveryGroupName: string | undefined;
}

/**
 * @public
 */
export interface GetRecoveryGroupReadinessSummaryResponse {
  /**
   * <p>The token that identifies which batch of results you want to see.</p>
   */
  NextToken?: string;

  /**
   * <p>The readiness status at a recovery group level.</p>
   */
  Readiness?: Readiness | string;

  /**
   * <p>Summaries of the readiness checks for the recovery group.</p>
   */
  ReadinessChecks?: ReadinessCheckSummary[];
}

/**
 * @public
 */
export interface GetResourceSetRequest {
  /**
   * <p>Name of a resource set.</p>
   */
  ResourceSetName: string | undefined;
}

/**
 * @public
 */
export interface GetResourceSetResponse {
  /**
   * <p>The Amazon Resource Name (ARN) for the resource set.</p>
   */
  ResourceSetArn?: string;

  /**
   * <p>The name of the resource set.</p>
   */
  ResourceSetName?: string;

  /**
   * <p>The resource type of the resources in the resource set. Enter one of the following values for resource type:</p> <p>AWS::ApiGateway::Stage, AWS::ApiGatewayV2::Stage, AWS::AutoScaling::AutoScalingGroup, AWS::CloudWatch::Alarm, AWS::EC2::CustomerGateway, AWS::DynamoDB::Table, AWS::EC2::Volume, AWS::ElasticLoadBalancing::LoadBalancer, AWS::ElasticLoadBalancingV2::LoadBalancer, AWS::Lambda::Function, AWS::MSK::Cluster, AWS::RDS::DBCluster, AWS::Route53::HealthCheck, AWS::SQS::Queue, AWS::SNS::Topic, AWS::SNS::Subscription, AWS::EC2::VPC, AWS::EC2::VPNConnection, AWS::EC2::VPNGateway, AWS::Route53RecoveryReadiness::DNSTargetResource</p>
   */
  ResourceSetType?: string;

  /**
   * <p>A list of resource objects.</p>
   */
  Resources?: Resource[];

  /**
   * <p>A collection of tags associated with a resource.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface ListCellsRequest {
  /**
   * <p>The number of objects that you want to return with this call.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token that identifies which batch of results you want to see.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListCellsResponse {
  /**
   * <p>A list of cells.</p>
   */
  Cells?: CellOutput[];

  /**
   * <p>The token that identifies which batch of results you want to see.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListCrossAccountAuthorizationsRequest {
  /**
   * <p>The number of objects that you want to return with this call.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token that identifies which batch of results you want to see.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListCrossAccountAuthorizationsResponse {
  /**
   * <p>A list of cross-account authorizations.</p>
   */
  CrossAccountAuthorizations?: string[];

  /**
   * <p>The token that identifies which batch of results you want to see.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListReadinessChecksRequest {
  /**
   * <p>The number of objects that you want to return with this call.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token that identifies which batch of results you want to see.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListReadinessChecksResponse {
  /**
   * <p>The token that identifies which batch of results you want to see.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of readiness checks associated with the account.</p>
   */
  ReadinessChecks?: ReadinessCheckOutput[];
}

/**
 * @public
 */
export interface ListRecoveryGroupsRequest {
  /**
   * <p>The number of objects that you want to return with this call.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token that identifies which batch of results you want to see.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListRecoveryGroupsResponse {
  /**
   * <p>The token that identifies which batch of results you want to see.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of recovery groups.</p>
   */
  RecoveryGroups?: RecoveryGroupOutput[];
}

/**
 * @public
 */
export interface ListResourceSetsRequest {
  /**
   * <p>The number of objects that you want to return with this call.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token that identifies which batch of results you want to see.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListResourceSetsResponse {
  /**
   * <p>The token that identifies which batch of results you want to see.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of resource sets associated with the account.</p>
   */
  ResourceSets?: ResourceSetOutput[];
}

/**
 * @public
 */
export interface ListRulesRequest {
  /**
   * <p>The number of objects that you want to return with this call.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token that identifies which batch of results you want to see.</p>
   */
  NextToken?: string;

  /**
   * <p>The resource type that a readiness rule applies to.</p>
   */
  ResourceType?: string;
}

/**
 * @public
 */
export interface ListRulesResponse {
  /**
   * <p>The token that identifies which batch of results you want to see.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of readiness rules for a specific resource type.</p>
   */
  Rules?: ListRulesOutput[];
}

/**
 * @public
 */
export interface ListTagsForResourcesRequest {
  /**
   * <p>The Amazon Resource Name (ARN) for a resource.</p>
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourcesResponse {
  /**
   * <p></p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) for a resource.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p></p>
   */
  Tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) for a resource.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The keys for tags you add to resources.</p>
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateCellRequest {
  /**
   * <p>The name of the cell.</p>
   */
  CellName: string | undefined;

  /**
   * <p>A list of cell Amazon Resource Names (ARNs), which completely replaces the previous list.</p>
   */
  Cells: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateCellResponse {
  /**
   * <p>The Amazon Resource Name (ARN) for the cell.</p>
   */
  CellArn?: string;

  /**
   * <p>The name of the cell.</p>
   */
  CellName?: string;

  /**
   * <p>A list of cell ARNs.</p>
   */
  Cells?: string[];

  /**
   * <p>The readiness scope for the cell, which can be a cell Amazon Resource Name (ARN) or a recovery group ARN. This is a list but currently can have only one element.</p>
   */
  ParentReadinessScopes?: string[];

  /**
   * <p>Tags on the resources.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 * <p>Name of a readiness check to describe.</p>
 */
export interface UpdateReadinessCheckRequest {
  /**
   * <p>Name of a readiness check.</p>
   */
  ReadinessCheckName: string | undefined;

  /**
   * <p>The name of the resource set to be checked.</p>
   */
  ResourceSetName: string | undefined;
}

/**
 * @public
 */
export interface UpdateReadinessCheckResponse {
  /**
   * <p>The Amazon Resource Name (ARN) associated with a readiness check.</p>
   */
  ReadinessCheckArn?: string;

  /**
   * <p>Name of a readiness check.</p>
   */
  ReadinessCheckName?: string;

  /**
   * <p>Name of the resource set to be checked.</p>
   */
  ResourceSet?: string;

  /**
   * <p>A collection of tags associated with a resource.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 * <p>Name of a recovery group.</p>
 */
export interface UpdateRecoveryGroupRequest {
  /**
   * <p>A list of cell Amazon Resource Names (ARNs). This list completely replaces the previous list.</p>
   */
  Cells: string[] | undefined;

  /**
   * <p>The name of a recovery group.</p>
   */
  RecoveryGroupName: string | undefined;
}

/**
 * @public
 */
export interface UpdateRecoveryGroupResponse {
  /**
   * <p>A list of a cell's Amazon Resource Names (ARNs).</p>
   */
  Cells?: string[];

  /**
   * <p>The Amazon Resource Name (ARN) for the recovery group.</p>
   */
  RecoveryGroupArn?: string;

  /**
   * <p>The name of the recovery group.</p>
   */
  RecoveryGroupName?: string;

  /**
   * <p>The tags associated with the recovery group.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 * <p>Name of a resource set.</p>
 */
export interface UpdateResourceSetRequest {
  /**
   * <p>Name of a resource set.</p>
   */
  ResourceSetName: string | undefined;

  /**
   * <p>The resource type of the resources in the resource set. Enter one of the following values for resource type:</p> <p>AWS::ApiGateway::Stage, AWS::ApiGatewayV2::Stage, AWS::AutoScaling::AutoScalingGroup, AWS::CloudWatch::Alarm, AWS::EC2::CustomerGateway, AWS::DynamoDB::Table, AWS::EC2::Volume, AWS::ElasticLoadBalancing::LoadBalancer, AWS::ElasticLoadBalancingV2::LoadBalancer, AWS::Lambda::Function, AWS::MSK::Cluster, AWS::RDS::DBCluster, AWS::Route53::HealthCheck, AWS::SQS::Queue, AWS::SNS::Topic, AWS::SNS::Subscription, AWS::EC2::VPC, AWS::EC2::VPNConnection, AWS::EC2::VPNGateway, AWS::Route53RecoveryReadiness::DNSTargetResource</p>
   */
  ResourceSetType: string | undefined;

  /**
   * <p>A list of resource objects.</p>
   */
  Resources: Resource[] | undefined;
}

/**
 * @public
 */
export interface UpdateResourceSetResponse {
  /**
   * <p>The Amazon Resource Name (ARN) for the resource set.</p>
   */
  ResourceSetArn?: string;

  /**
   * <p>The name of the resource set.</p>
   */
  ResourceSetName?: string;

  /**
   * <p>The resource type of the resources in the resource set. Enter one of the following values for resource type:</p> <p>AWS::ApiGateway::Stage, AWS::ApiGatewayV2::Stage, AWS::AutoScaling::AutoScalingGroup, AWS::CloudWatch::Alarm, AWS::EC2::CustomerGateway, AWS::DynamoDB::Table, AWS::EC2::Volume, AWS::ElasticLoadBalancing::LoadBalancer, AWS::ElasticLoadBalancingV2::LoadBalancer, AWS::Lambda::Function, AWS::MSK::Cluster, AWS::RDS::DBCluster, AWS::Route53::HealthCheck, AWS::SQS::Queue, AWS::SNS::Topic, AWS::SNS::Subscription, AWS::EC2::VPC, AWS::EC2::VPNConnection, AWS::EC2::VPNGateway, AWS::Route53RecoveryReadiness::DNSTargetResource</p>
   */
  ResourceSetType?: string;

  /**
   * <p>A list of resource objects.</p>
   */
  Resources?: Resource[];

  /**
   * <p>A collection of tags associated with a resource.</p>
   */
  Tags?: Record<string, string>;
}
