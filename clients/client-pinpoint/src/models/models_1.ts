// smithy-typescript generated code
import {
  AddressConfiguration,
  ADMChannelRequest,
  ADMChannelResponse,
  AndroidPushNotificationTemplate,
  APNSChannelRequest,
  APNSChannelResponse,
  APNSPushNotificationTemplate,
  APNSSandboxChannelRequest,
  APNSSandboxChannelResponse,
  APNSVoipChannelRequest,
  APNSVoipChannelResponse,
  APNSVoipSandboxChannelRequest,
  APNSVoipSandboxChannelResponse,
  ApplicationSettingsResource,
  AttributesResource,
  BaiduChannelRequest,
  BaiduChannelResponse,
  BaseKpiResult,
  CampaignEventFilter,
  CampaignHook,
  CampaignLimits,
  CampaignResponse,
  ChannelsResponse,
  DefaultPushNotificationTemplate,
  DeliveryStatus,
  DirectMessageConfiguration,
  EmailChannelRequest,
  EmailChannelResponse,
  EmailTemplateRequest,
  EmailTemplateResponse,
  EndpointBatchRequest,
  EndpointMessageResult,
  EndpointRequest,
  EndpointResponse,
  EndpointSendConfiguration,
  EndpointsResponse,
  EventsRequest,
  EventsResponse,
  EventStream,
  ExportJobResponse,
  ExportJobsResponse,
  GCMChannelRequest,
  GCMChannelResponse,
  ImportJobResponse,
  InAppMessageContent,
  InAppTemplateRequest,
  JourneyResponse,
  Layout,
  MessageBody,
  PushNotificationTemplateRequest,
  QuietTime,
  RecommenderConfigurationResponse,
  SegmentResponse,
  SMSChannelResponse,
  SMSTemplateRequest,
  State,
  TemplateConfiguration,
  TemplateType,
  VoiceChannelResponse,
  VoiceTemplateRequest,
  WriteCampaignRequest,
  WriteJourneyRequest,
  WriteSegmentRequest,
} from "./models_0";

/**
 * @public
 */
export interface GetChannelsRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;
}

/**
 * @public
 */
export interface GetChannelsResponse {
  /**
   * <p>Provides information about the general settings and status of all channels for an application, including channels that aren't enabled for the application.</p>
   */
  ChannelsResponse: ChannelsResponse | undefined;
}

/**
 * @public
 */
export interface GetEmailChannelRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;
}

/**
 * @public
 */
export interface GetEmailChannelResponse {
  /**
   * <p>Provides information about the status and settings of the email channel for an application.</p>
   */
  EmailChannelResponse: EmailChannelResponse | undefined;
}

/**
 * @public
 */
export interface GetEmailTemplateRequest {
  /**
   * <p>The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.</p>
   */
  TemplateName: string | undefined;

  /**
   * <p>The unique identifier for the version of the message template to update, retrieve information about, or delete. To retrieve identifiers and other information for all the versions of a template, use the <link  linkend="templates-template-name-template-type-versions">Template Versions</link> resource.</p> <p>If specified, this value must match the identifier for an existing template version. If specified for an update operation, this value must match the identifier for the latest existing version of the template. This restriction helps ensure that race conditions don't occur.</p> <p>If you don't specify a value for this parameter, Amazon Pinpoint does the following:</p> <ul><li><p>For a get operation, retrieves information about the active version of the template.</p></li> <li><p>For an update operation, saves the updates to (overwrites) the latest existing version of the template, if the create-new-version parameter isn't used or is set to false.</p></li> <li><p>For a delete operation, deletes the template, including all versions of the template.</p></li></ul>
   */
  Version?: string;
}

/**
 * @public
 */
export interface GetEmailTemplateResponse {
  /**
   * <p>Provides information about the content and settings for a message template that can be used in messages that are sent through the email channel.</p>
   */
  EmailTemplateResponse: EmailTemplateResponse | undefined;
}

/**
 * @public
 */
export interface GetEndpointRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The unique identifier for the endpoint.</p>
   */
  EndpointId: string | undefined;
}

/**
 * @public
 */
export interface GetEndpointResponse {
  /**
   * <p>Provides information about the channel type and other settings for an endpoint.</p>
   */
  EndpointResponse: EndpointResponse | undefined;
}

/**
 * @public
 */
export interface GetEventStreamRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;
}

/**
 * @public
 */
export interface GetEventStreamResponse {
  /**
   * <p>Specifies settings for publishing event data to an Amazon Kinesis data stream or an Amazon Kinesis Data Firehose delivery stream.</p>
   */
  EventStream: EventStream | undefined;
}

/**
 * @public
 */
export interface GetExportJobRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The unique identifier for the job.</p>
   */
  JobId: string | undefined;
}

/**
 * @public
 */
export interface GetExportJobResponse {
  /**
   * <p>Provides information about the status and settings of a job that exports endpoint definitions to a file. The file can be added directly to an Amazon Simple Storage Service (Amazon S3) bucket by using the Amazon Pinpoint API or downloaded directly to a computer by using the Amazon Pinpoint console.</p>
   */
  ExportJobResponse: ExportJobResponse | undefined;
}

/**
 * @public
 */
export interface GetExportJobsRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The maximum number of items to include in each page of a paginated response. This parameter is not supported for application, campaign, and journey metrics.</p>
   */
  PageSize?: string;

  /**
   * <p>The NextToken string that specifies which page of results to return in a paginated response.</p>
   */
  Token?: string;
}

/**
 * @public
 */
export interface GetExportJobsResponse {
  /**
   * <p>Provides information about all the export jobs that are associated with an application or segment. An export job is a job that exports endpoint definitions to a file.</p>
   */
  ExportJobsResponse: ExportJobsResponse | undefined;
}

/**
 * @public
 */
export interface GetGcmChannelRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;
}

/**
 * @public
 */
export interface GetGcmChannelResponse {
  /**
   * <p>Provides information about the status and settings of the GCM channel for an application. The GCM channel enables Amazon Pinpoint to send push notifications through the Firebase Cloud Messaging (FCM), formerly Google Cloud Messaging (GCM), service.</p>
   */
  GCMChannelResponse: GCMChannelResponse | undefined;
}

/**
 * @public
 */
export interface GetImportJobRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The unique identifier for the job.</p>
   */
  JobId: string | undefined;
}

/**
 * @public
 */
export interface GetImportJobResponse {
  /**
   * <p>Provides information about the status and settings of a job that imports endpoint definitions from one or more files. The files can be stored in an Amazon Simple Storage Service (Amazon S3) bucket or uploaded directly from a computer by using the Amazon Pinpoint console.</p>
   */
  ImportJobResponse: ImportJobResponse | undefined;
}

/**
 * @public
 */
export interface GetImportJobsRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The maximum number of items to include in each page of a paginated response. This parameter is not supported for application, campaign, and journey metrics.</p>
   */
  PageSize?: string;

  /**
   * <p>The NextToken string that specifies which page of results to return in a paginated response.</p>
   */
  Token?: string;
}

/**
 * @public
 * <p>Provides information about the status and settings of all the import jobs that are associated with an application or segment. An import job is a job that imports endpoint definitions from one or more files.</p>
 */
export interface ImportJobsResponse {
  /**
   * <p>An array of responses, one for each import job that's associated with the application (Import Jobs resource) or segment (Segment Import Jobs resource).</p>
   */
  Item: ImportJobResponse[] | undefined;

  /**
   * <p>The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetImportJobsResponse {
  /**
   * <p>Provides information about the status and settings of all the import jobs that are associated with an application or segment. An import job is a job that imports endpoint definitions from one or more files.</p>
   */
  ImportJobsResponse: ImportJobsResponse | undefined;
}

/**
 * @public
 */
export interface GetInAppMessagesRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The unique identifier for the endpoint.</p>
   */
  EndpointId: string | undefined;
}

/**
 * @public
 * <p>Provides all fields required for building an in-app message.</p>
 */
export interface InAppMessage {
  /**
   * <p>In-app message content.</p>
   */
  Content?: InAppMessageContent[];

  /**
   * <p>Custom config to be sent to SDK.</p>
   */
  CustomConfig?: Record<string, string>;

  /**
   * <p>The layout of the message.</p>
   */
  Layout?: Layout | string;
}

/**
 * @public
 * <p>Schedule of the campaign.</p>
 */
export interface InAppCampaignSchedule {
  /**
   * <p>The scheduled time after which the in-app message should not be shown. Timestamp is in ISO 8601 format.</p>
   */
  EndDate?: string;

  /**
   * <p>The event filter the SDK has to use to show the in-app message in the application.</p>
   */
  EventFilter?: CampaignEventFilter;

  /**
   * <p>Time during which the in-app message should not be shown to the user.</p>
   */
  QuietTime?: QuietTime;
}

/**
 * @public
 * <p>Targeted in-app message campaign.</p>
 */
export interface InAppMessageCampaign {
  /**
   * <p>Campaign id of the corresponding campaign.</p>
   */
  CampaignId?: string;

  /**
   * <p>Daily cap which controls the number of times any in-app messages can be shown to the endpoint during a day.</p>
   */
  DailyCap?: number;

  /**
   * <p>In-app message content with all fields required for rendering an in-app message.</p>
   */
  InAppMessage?: InAppMessage;

  /**
   * <p>Priority of the in-app message.</p>
   */
  Priority?: number;

  /**
   * <p>Schedule of the campaign.</p>
   */
  Schedule?: InAppCampaignSchedule;

  /**
   * <p>Session cap which controls the number of times an in-app message can be shown to the endpoint during an application session.</p>
   */
  SessionCap?: number;

  /**
   * <p>Total cap which controls the number of times an in-app message can be shown to the endpoint.</p>
   */
  TotalCap?: number;

  /**
   * <p>Treatment id of the campaign.</p>
   */
  TreatmentId?: string;
}

/**
 * @public
 * <p>Get in-app messages response object.</p>
 */
export interface InAppMessagesResponse {
  /**
   * <p>List of targeted in-app message campaigns.</p>
   */
  InAppMessageCampaigns?: InAppMessageCampaign[];
}

/**
 * @public
 */
export interface GetInAppMessagesResponse {
  /**
   * <p>Get in-app messages response object.</p>
   */
  InAppMessagesResponse: InAppMessagesResponse | undefined;
}

/**
 * @public
 */
export interface GetInAppTemplateRequest {
  /**
   * <p>The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.</p>
   */
  TemplateName: string | undefined;

  /**
   * <p>The unique identifier for the version of the message template to update, retrieve information about, or delete. To retrieve identifiers and other information for all the versions of a template, use the <link  linkend="templates-template-name-template-type-versions">Template Versions</link> resource.</p> <p>If specified, this value must match the identifier for an existing template version. If specified for an update operation, this value must match the identifier for the latest existing version of the template. This restriction helps ensure that race conditions don't occur.</p> <p>If you don't specify a value for this parameter, Amazon Pinpoint does the following:</p> <ul><li><p>For a get operation, retrieves information about the active version of the template.</p></li> <li><p>For an update operation, saves the updates to (overwrites) the latest existing version of the template, if the create-new-version parameter isn't used or is set to false.</p></li> <li><p>For a delete operation, deletes the template, including all versions of the template.</p></li></ul>
   */
  Version?: string;
}

/**
 * @public
 * <p>In-App Template Response.</p>
 */
export interface InAppTemplateResponse {
  /**
   * <p>The resource arn of the template.</p>
   */
  Arn?: string;

  /**
   * <p>The content of the message, can include up to 5 modals. Each modal must contain a message, a header, and background color. ImageUrl and buttons are optional.</p>
   */
  Content?: InAppMessageContent[];

  /**
   * <p>The creation date of the template.</p>
   */
  CreationDate: string | undefined;

  /**
   * <p>Custom config to be sent to client.</p>
   */
  CustomConfig?: Record<string, string>;

  /**
   * <p>The last modified date of the template.</p>
   */
  LastModifiedDate: string | undefined;

  /**
   * <p>The layout of the message.</p>
   */
  Layout?: Layout | string;

  /**
   * <p>A string-to-string map of key-value pairs that defines the tags to associate with the message template. Each tag consists of a required tag key and an associated tag value.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>The description of the template.</p>
   */
  TemplateDescription?: string;

  /**
   * <p>The name of the template.</p>
   */
  TemplateName: string | undefined;

  /**
   * <p>The type of the template.</p>
   */
  TemplateType: TemplateType | string | undefined;

  /**
   * <p>The version id of the template.</p>
   */
  Version?: string;
}

/**
 * @public
 */
export interface GetInAppTemplateResponse {
  /**
   * <p>In-App Template Response.</p>
   */
  InAppTemplateResponse: InAppTemplateResponse | undefined;
}

/**
 * @public
 */
export interface GetJourneyRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The unique identifier for the journey.</p>
   */
  JourneyId: string | undefined;
}

/**
 * @public
 */
export interface GetJourneyResponse {
  /**
   * <p>Provides information about the status, configuration, and other settings for a journey.</p>
   */
  JourneyResponse: JourneyResponse | undefined;
}

/**
 * @public
 */
export interface GetJourneyDateRangeKpiRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The last date and time to retrieve data for, as part of an inclusive date range that filters the query results. This value should be in extended ISO 8601 format and use Coordinated Universal Time (UTC), for example: 2019-07-26T20:00:00Z for 8:00 PM UTC July 26, 2019.</p>
   */
  EndTime?: Date;

  /**
   * <p>The unique identifier for the journey.</p>
   */
  JourneyId: string | undefined;

  /**
   * <p>The name of the metric, also referred to as a <i>key performance indicator (KPI)</i>, to retrieve data for. This value describes the associated metric and consists of two or more terms, which are comprised of lowercase alphanumeric characters, separated by a hyphen. Examples are email-open-rate and successful-delivery-rate. For a list of valid values, see the <a href="https://docs.aws.amazon.com/pinpoint/latest/developerguide/analytics-standard-metrics.html">Amazon Pinpoint Developer Guide</a>.</p>
   */
  KpiName: string | undefined;

  /**
   * <p>The  string that specifies which page of results to return in a paginated response. This parameter is not supported for application, campaign, and journey metrics.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of items to include in each page of a paginated response. This parameter is not supported for application, campaign, and journey metrics.</p>
   */
  PageSize?: string;

  /**
   * <p>The first date and time to retrieve data for, as part of an inclusive date range that filters the query results. This value should be in extended ISO 8601 format and use Coordinated Universal Time (UTC), for example: 2019-07-19T20:00:00Z for 8:00 PM UTC July 19, 2019. This value should also be fewer than 90 days from the current day.</p>
   */
  StartTime?: Date;
}

/**
 * @public
 * <p>Provides the results of a query that retrieved the data for a standard engagement metric that applies to a journey, and provides information about that query.</p>
 */
export interface JourneyDateRangeKpiResponse {
  /**
   * <p>The unique identifier for the application that the metric applies to.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The last date and time of the date range that was used to filter the query results, in extended ISO 8601 format. The date range is inclusive.</p>
   */
  EndTime: Date | undefined;

  /**
   * <p>The unique identifier for the journey that the metric applies to.</p>
   */
  JourneyId: string | undefined;

  /**
   * <p>The name of the metric, also referred to as a <i>key performance indicator (KPI)</i>, that the data was retrieved for. This value describes the associated metric and consists of two or more terms, which are comprised of lowercase alphanumeric characters, separated by a hyphen. For a list of possible values, see the <a href="https://docs.aws.amazon.com/pinpoint/latest/developerguide/analytics-standard-metrics.html">Amazon Pinpoint Developer Guide</a>.</p>
   */
  KpiName: string | undefined;

  /**
   * <p>An array of objects that contains the results of the query. Each object contains the value for the metric and metadata about that value.</p>
   */
  KpiResult: BaseKpiResult | undefined;

  /**
   * <p>The string to use in a subsequent request to get the next page of results in a paginated response. This value is null for the Journey Engagement Metrics resource because the resource returns all results in a single page.</p>
   */
  NextToken?: string;

  /**
   * <p>The first date and time of the date range that was used to filter the query results, in extended ISO 8601 format. The date range is inclusive.</p>
   */
  StartTime: Date | undefined;
}

/**
 * @public
 */
export interface GetJourneyDateRangeKpiResponse {
  /**
   * <p>Provides the results of a query that retrieved the data for a standard engagement metric that applies to a journey, and provides information about that query.</p>
   */
  JourneyDateRangeKpiResponse: JourneyDateRangeKpiResponse | undefined;
}

/**
 * @public
 */
export interface GetJourneyExecutionActivityMetricsRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The unique identifier for the journey activity.</p>
   */
  JourneyActivityId: string | undefined;

  /**
   * <p>The unique identifier for the journey.</p>
   */
  JourneyId: string | undefined;

  /**
   * <p>The  string that specifies which page of results to return in a paginated response. This parameter is not supported for application, campaign, and journey metrics.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of items to include in each page of a paginated response. This parameter is not supported for application, campaign, and journey metrics.</p>
   */
  PageSize?: string;
}

/**
 * @public
 * <p>Provides the results of a query that retrieved the data for a standard execution metric that applies to a journey activity, and provides information about that query.</p>
 */
export interface JourneyExecutionActivityMetricsResponse {
  /**
   * <p>The type of activity that the metric applies to. Possible values are:</p> <ul><li><p>CONDITIONAL_SPLIT - For a yes/no split activity, which is an activity that sends participants down one of two paths in a journey.</p></li> <li><p>HOLDOUT - For a holdout activity, which is an activity that stops a journey for a specified percentage of participants.</p></li> <li><p>MESSAGE - For an email activity, which is an activity that sends an email message to participants.</p></li> <li><p>MULTI_CONDITIONAL_SPLIT - For a multivariate split activity, which is an activity that sends participants down one of as many as five paths in a journey.</p></li> <li><p>RANDOM_SPLIT - For a random split activity, which is an activity that sends specified percentages of participants down one of as many as five paths in a journey.</p></li> <li><p>WAIT - For a wait activity, which is an activity that waits for a certain amount of time or until a specific date and time before moving participants to the next activity in a journey.</p></li></ul>
   */
  ActivityType: string | undefined;

  /**
   * <p>The unique identifier for the application that the metric applies to.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The unique identifier for the activity that the metric applies to.</p>
   */
  JourneyActivityId: string | undefined;

  /**
   * <p>The unique identifier for the journey that the metric applies to.</p>
   */
  JourneyId: string | undefined;

  /**
   * <p>The date and time, in ISO 8601 format, when Amazon Pinpoint last evaluated the execution status of the activity and updated the data for the metric.</p>
   */
  LastEvaluatedTime: string | undefined;

  /**
   * <p>A JSON object that contains the results of the query. The results vary depending on the type of activity (ActivityType). For information about the structure and contents of the results, see the <a href="https://docs.aws.amazon.com/pinpoint/latest/developerguide/analytics-standard-metrics.html">Amazon Pinpoint Developer Guide</a>.</p>
   */
  Metrics: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetJourneyExecutionActivityMetricsResponse {
  /**
   * <p>Provides the results of a query that retrieved the data for a standard execution metric that applies to a journey activity, and provides information about that query.</p>
   */
  JourneyExecutionActivityMetricsResponse: JourneyExecutionActivityMetricsResponse | undefined;
}

/**
 * @public
 */
export interface GetJourneyExecutionMetricsRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The unique identifier for the journey.</p>
   */
  JourneyId: string | undefined;

  /**
   * <p>The  string that specifies which page of results to return in a paginated response. This parameter is not supported for application, campaign, and journey metrics.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of items to include in each page of a paginated response. This parameter is not supported for application, campaign, and journey metrics.</p>
   */
  PageSize?: string;
}

/**
 * @public
 * <p>Provides the results of a query that retrieved the data for a standard execution metric that applies to a journey, and provides information about that query.</p>
 */
export interface JourneyExecutionMetricsResponse {
  /**
   * <p>The unique identifier for the application that the metric applies to.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The unique identifier for the journey that the metric applies to.</p>
   */
  JourneyId: string | undefined;

  /**
   * <p>The date and time, in ISO 8601 format, when Amazon Pinpoint last evaluated the journey and updated the data for the metric.</p>
   */
  LastEvaluatedTime: string | undefined;

  /**
   * <p>A JSON object that contains the results of the query. For information about the structure and contents of the results, see the <a href="https://docs.aws.amazon.com//pinpoint/latest/developerguide/analytics-standard-metrics.html">Amazon Pinpoint Developer Guide</a>.</p>
   */
  Metrics: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetJourneyExecutionMetricsResponse {
  /**
   * <p>Provides the results of a query that retrieved the data for a standard execution metric that applies to a journey, and provides information about that query.</p>
   */
  JourneyExecutionMetricsResponse: JourneyExecutionMetricsResponse | undefined;
}

/**
 * @public
 */
export interface GetPushTemplateRequest {
  /**
   * <p>The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.</p>
   */
  TemplateName: string | undefined;

  /**
   * <p>The unique identifier for the version of the message template to update, retrieve information about, or delete. To retrieve identifiers and other information for all the versions of a template, use the <link  linkend="templates-template-name-template-type-versions">Template Versions</link> resource.</p> <p>If specified, this value must match the identifier for an existing template version. If specified for an update operation, this value must match the identifier for the latest existing version of the template. This restriction helps ensure that race conditions don't occur.</p> <p>If you don't specify a value for this parameter, Amazon Pinpoint does the following:</p> <ul><li><p>For a get operation, retrieves information about the active version of the template.</p></li> <li><p>For an update operation, saves the updates to (overwrites) the latest existing version of the template, if the create-new-version parameter isn't used or is set to false.</p></li> <li><p>For a delete operation, deletes the template, including all versions of the template.</p></li></ul>
   */
  Version?: string;
}

/**
 * @public
 * <p>Provides information about the content and settings for a message template that can be used in messages that are sent through a push notification channel.</p>
 */
export interface PushNotificationTemplateResponse {
  /**
   * <p>The message template that's used for the ADM (Amazon Device Messaging) channel. This message template overrides the default template for push notification channels (DefaultPushNotificationTemplate).</p>
   */
  ADM?: AndroidPushNotificationTemplate;

  /**
   * <p>The message template that's used for the APNs (Apple Push Notification service) channel. This message template overrides the default template for push notification channels (DefaultPushNotificationTemplate).</p>
   */
  APNS?: APNSPushNotificationTemplate;

  /**
   * <p>The Amazon Resource Name (ARN) of the message template.</p>
   */
  Arn?: string;

  /**
   * <p>The message template that's used for the Baidu (Baidu Cloud Push) channel. This message template overrides the default template for push notification channels (DefaultPushNotificationTemplate).</p>
   */
  Baidu?: AndroidPushNotificationTemplate;

  /**
   * <p>The date, in ISO 8601 format, when the message template was created.</p>
   */
  CreationDate: string | undefined;

  /**
   * <p>The default message template that's used for push notification channels.</p>
   */
  Default?: DefaultPushNotificationTemplate;

  /**
   * <p>The JSON object that specifies the default values that are used for message variables in the message template. This object is a set of key-value pairs. Each key defines a message variable in the template. The corresponding value defines the default value for that variable.</p>
   */
  DefaultSubstitutions?: string;

  /**
   * <p>The message template that's used for the GCM channel, which is used to send notifications through the Firebase Cloud Messaging (FCM), formerly Google Cloud Messaging (GCM), service. This message template overrides the default template for push notification channels (DefaultPushNotificationTemplate).</p>
   */
  GCM?: AndroidPushNotificationTemplate;

  /**
   * <p>The date, in ISO 8601 format, when the message template was last modified.</p>
   */
  LastModifiedDate: string | undefined;

  /**
   * <p>The unique identifier for the recommender model that's used by the message template.</p>
   */
  RecommenderId?: string;

  /**
   * <p>A string-to-string map of key-value pairs that identifies the tags that are associated with the message template. Each tag consists of a required tag key and an associated tag value.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>The custom description of the message template.</p>
   */
  TemplateDescription?: string;

  /**
   * <p>The name of the message template.</p>
   */
  TemplateName: string | undefined;

  /**
   * <p>The type of channel that the message template is designed for. For a push notification template, this value is PUSH.</p>
   */
  TemplateType: TemplateType | string | undefined;

  /**
   * <p>The unique identifier, as an integer, for the active version of the message template, or the version of the template that you specified by using the version parameter in your request.</p>
   */
  Version?: string;
}

/**
 * @public
 */
export interface GetPushTemplateResponse {
  /**
   * <p>Provides information about the content and settings for a message template that can be used in messages that are sent through a push notification channel.</p>
   */
  PushNotificationTemplateResponse: PushNotificationTemplateResponse | undefined;
}

/**
 * @public
 */
export interface GetRecommenderConfigurationRequest {
  /**
   * <p>The unique identifier for the recommender model configuration. This identifier is displayed as the <b>Recommender ID</b> on the Amazon Pinpoint console.</p>
   */
  RecommenderId: string | undefined;
}

/**
 * @public
 */
export interface GetRecommenderConfigurationResponse {
  /**
   * <p>Provides information about Amazon Pinpoint configuration settings for retrieving and processing data from a recommender model.</p>
   */
  RecommenderConfigurationResponse: RecommenderConfigurationResponse | undefined;
}

/**
 * @public
 */
export interface GetRecommenderConfigurationsRequest {
  /**
   * <p>The maximum number of items to include in each page of a paginated response. This parameter is not supported for application, campaign, and journey metrics.</p>
   */
  PageSize?: string;

  /**
   * <p>The NextToken string that specifies which page of results to return in a paginated response.</p>
   */
  Token?: string;
}

/**
 * @public
 * <p>Provides information about all the recommender model configurations that are associated with your Amazon Pinpoint account.</p>
 */
export interface ListRecommenderConfigurationsResponse {
  /**
   * <p>An array of responses, one for each recommender model configuration that's associated with your Amazon Pinpoint account.</p>
   */
  Item: RecommenderConfigurationResponse[] | undefined;

  /**
   * <p>The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetRecommenderConfigurationsResponse {
  /**
   * <p>Provides information about all the recommender model configurations that are associated with your Amazon Pinpoint account.</p>
   */
  ListRecommenderConfigurationsResponse: ListRecommenderConfigurationsResponse | undefined;
}

/**
 * @public
 */
export interface GetSegmentRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The unique identifier for the segment.</p>
   */
  SegmentId: string | undefined;
}

/**
 * @public
 */
export interface GetSegmentResponse {
  /**
   * <p>Provides information about the configuration, dimension, and other settings for a segment.</p>
   */
  SegmentResponse: SegmentResponse | undefined;
}

/**
 * @public
 */
export interface GetSegmentExportJobsRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The maximum number of items to include in each page of a paginated response. This parameter is not supported for application, campaign, and journey metrics.</p>
   */
  PageSize?: string;

  /**
   * <p>The unique identifier for the segment.</p>
   */
  SegmentId: string | undefined;

  /**
   * <p>The NextToken string that specifies which page of results to return in a paginated response.</p>
   */
  Token?: string;
}

/**
 * @public
 */
export interface GetSegmentExportJobsResponse {
  /**
   * <p>Provides information about all the export jobs that are associated with an application or segment. An export job is a job that exports endpoint definitions to a file.</p>
   */
  ExportJobsResponse: ExportJobsResponse | undefined;
}

/**
 * @public
 */
export interface GetSegmentImportJobsRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The maximum number of items to include in each page of a paginated response. This parameter is not supported for application, campaign, and journey metrics.</p>
   */
  PageSize?: string;

  /**
   * <p>The unique identifier for the segment.</p>
   */
  SegmentId: string | undefined;

  /**
   * <p>The NextToken string that specifies which page of results to return in a paginated response.</p>
   */
  Token?: string;
}

/**
 * @public
 */
export interface GetSegmentImportJobsResponse {
  /**
   * <p>Provides information about the status and settings of all the import jobs that are associated with an application or segment. An import job is a job that imports endpoint definitions from one or more files.</p>
   */
  ImportJobsResponse: ImportJobsResponse | undefined;
}

/**
 * @public
 */
export interface GetSegmentsRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The maximum number of items to include in each page of a paginated response. This parameter is not supported for application, campaign, and journey metrics.</p>
   */
  PageSize?: string;

  /**
   * <p>The NextToken string that specifies which page of results to return in a paginated response.</p>
   */
  Token?: string;
}

/**
 * @public
 * <p>Provides information about all the segments that are associated with an application.</p>
 */
export interface SegmentsResponse {
  /**
   * <p>An array of responses, one for each segment that's associated with the application (Segments resource) or each version of a segment that's associated with the application (Segment Versions resource).</p>
   */
  Item: SegmentResponse[] | undefined;

  /**
   * <p>The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetSegmentsResponse {
  /**
   * <p>Provides information about all the segments that are associated with an application.</p>
   */
  SegmentsResponse: SegmentsResponse | undefined;
}

/**
 * @public
 */
export interface GetSegmentVersionRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The unique identifier for the segment.</p>
   */
  SegmentId: string | undefined;

  /**
   * <p>The unique version number (Version property) for the campaign version.</p>
   */
  Version: string | undefined;
}

/**
 * @public
 */
export interface GetSegmentVersionResponse {
  /**
   * <p>Provides information about the configuration, dimension, and other settings for a segment.</p>
   */
  SegmentResponse: SegmentResponse | undefined;
}

/**
 * @public
 */
export interface GetSegmentVersionsRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The maximum number of items to include in each page of a paginated response. This parameter is not supported for application, campaign, and journey metrics.</p>
   */
  PageSize?: string;

  /**
   * <p>The unique identifier for the segment.</p>
   */
  SegmentId: string | undefined;

  /**
   * <p>The NextToken string that specifies which page of results to return in a paginated response.</p>
   */
  Token?: string;
}

/**
 * @public
 */
export interface GetSegmentVersionsResponse {
  /**
   * <p>Provides information about all the segments that are associated with an application.</p>
   */
  SegmentsResponse: SegmentsResponse | undefined;
}

/**
 * @public
 */
export interface GetSmsChannelRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;
}

/**
 * @public
 */
export interface GetSmsChannelResponse {
  /**
   * <p>Provides information about the status and settings of the SMS channel for an application.</p>
   */
  SMSChannelResponse: SMSChannelResponse | undefined;
}

/**
 * @public
 */
export interface GetSmsTemplateRequest {
  /**
   * <p>The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.</p>
   */
  TemplateName: string | undefined;

  /**
   * <p>The unique identifier for the version of the message template to update, retrieve information about, or delete. To retrieve identifiers and other information for all the versions of a template, use the <link  linkend="templates-template-name-template-type-versions">Template Versions</link> resource.</p> <p>If specified, this value must match the identifier for an existing template version. If specified for an update operation, this value must match the identifier for the latest existing version of the template. This restriction helps ensure that race conditions don't occur.</p> <p>If you don't specify a value for this parameter, Amazon Pinpoint does the following:</p> <ul><li><p>For a get operation, retrieves information about the active version of the template.</p></li> <li><p>For an update operation, saves the updates to (overwrites) the latest existing version of the template, if the create-new-version parameter isn't used or is set to false.</p></li> <li><p>For a delete operation, deletes the template, including all versions of the template.</p></li></ul>
   */
  Version?: string;
}

/**
 * @public
 * <p>Provides information about the content and settings for a message template that can be used in text messages that are sent through the SMS channel.</p>
 */
export interface SMSTemplateResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the message template.</p>
   */
  Arn?: string;

  /**
   * <p>The message body that's used in text messages that are based on the message template.</p>
   */
  Body?: string;

  /**
   * <p>The date, in ISO 8601 format, when the message template was created.</p>
   */
  CreationDate: string | undefined;

  /**
   * <p>The JSON object that specifies the default values that are used for message variables in the message template. This object is a set of key-value pairs. Each key defines a message variable in the template. The corresponding value defines the default value for that variable.</p>
   */
  DefaultSubstitutions?: string;

  /**
   * <p>The date, in ISO 8601 format, when the message template was last modified.</p>
   */
  LastModifiedDate: string | undefined;

  /**
   * <p>The unique identifier for the recommender model that's used by the message template.</p>
   */
  RecommenderId?: string;

  /**
   * <p>A string-to-string map of key-value pairs that identifies the tags that are associated with the message template. Each tag consists of a required tag key and an associated tag value.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>The custom description of the message template.</p>
   */
  TemplateDescription?: string;

  /**
   * <p>The name of the message template.</p>
   */
  TemplateName: string | undefined;

  /**
   * <p>The type of channel that the message template is designed for. For an SMS template, this value is SMS.</p>
   */
  TemplateType: TemplateType | string | undefined;

  /**
   * <p>The unique identifier, as an integer, for the active version of the message template, or the version of the template that you specified by using the version parameter in your request.</p>
   */
  Version?: string;
}

/**
 * @public
 */
export interface GetSmsTemplateResponse {
  /**
   * <p>Provides information about the content and settings for a message template that can be used in text messages that are sent through the SMS channel.</p>
   */
  SMSTemplateResponse: SMSTemplateResponse | undefined;
}

/**
 * @public
 */
export interface GetUserEndpointsRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The unique identifier for the user.</p>
   */
  UserId: string | undefined;
}

/**
 * @public
 */
export interface GetUserEndpointsResponse {
  /**
   * <p>Provides information about all the endpoints that are associated with a user ID.</p>
   */
  EndpointsResponse: EndpointsResponse | undefined;
}

/**
 * @public
 */
export interface GetVoiceChannelRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;
}

/**
 * @public
 */
export interface GetVoiceChannelResponse {
  /**
   * <p>Provides information about the status and settings of the voice channel for an application.</p>
   */
  VoiceChannelResponse: VoiceChannelResponse | undefined;
}

/**
 * @public
 */
export interface GetVoiceTemplateRequest {
  /**
   * <p>The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.</p>
   */
  TemplateName: string | undefined;

  /**
   * <p>The unique identifier for the version of the message template to update, retrieve information about, or delete. To retrieve identifiers and other information for all the versions of a template, use the <link  linkend="templates-template-name-template-type-versions">Template Versions</link> resource.</p> <p>If specified, this value must match the identifier for an existing template version. If specified for an update operation, this value must match the identifier for the latest existing version of the template. This restriction helps ensure that race conditions don't occur.</p> <p>If you don't specify a value for this parameter, Amazon Pinpoint does the following:</p> <ul><li><p>For a get operation, retrieves information about the active version of the template.</p></li> <li><p>For an update operation, saves the updates to (overwrites) the latest existing version of the template, if the create-new-version parameter isn't used or is set to false.</p></li> <li><p>For a delete operation, deletes the template, including all versions of the template.</p></li></ul>
   */
  Version?: string;
}

/**
 * @public
 * <p>Provides information about the content and settings for a message template that can be used in messages that are sent through the voice channel.</p>
 */
export interface VoiceTemplateResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the message template.</p>
   */
  Arn?: string;

  /**
   * <p>The text of the script that's used in messages that are based on the message template, in plain text format.</p>
   */
  Body?: string;

  /**
   * <p>The date, in ISO 8601 format, when the message template was created.</p>
   */
  CreationDate: string | undefined;

  /**
   * <p>The JSON object that specifies the default values that are used for message variables in the message template. This object is a set of key-value pairs. Each key defines a message variable in the template. The corresponding value defines the default value for that variable.</p>
   */
  DefaultSubstitutions?: string;

  /**
   * <p>The code for the language that's used when synthesizing the text of the script in messages that are based on the message template. For a list of supported languages and the code for each one, see the <a href="https://docs.aws.amazon.com/polly/latest/dg/what-is.html">Amazon Polly Developer Guide</a>.</p>
   */
  LanguageCode?: string;

  /**
   * <p>The date, in ISO 8601 format, when the message template was last modified.</p>
   */
  LastModifiedDate: string | undefined;

  /**
   * <p>A string-to-string map of key-value pairs that identifies the tags that are associated with the message template. Each tag consists of a required tag key and an associated tag value.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>The custom description of the message template.</p>
   */
  TemplateDescription?: string;

  /**
   * <p>The name of the message template.</p>
   */
  TemplateName: string | undefined;

  /**
   * <p>The type of channel that the message template is designed for. For a voice template, this value is VOICE.</p>
   */
  TemplateType: TemplateType | string | undefined;

  /**
   * <p>The unique identifier, as an integer, for the active version of the message template, or the version of the template that you specified by using the version parameter in your request.</p>
   */
  Version?: string;

  /**
   * <p>The name of the voice that's used when delivering messages that are based on the message template. For a list of supported voices, see the <a href="https://docs.aws.amazon.com/polly/latest/dg/what-is.html">Amazon Polly Developer Guide</a>.</p>
   */
  VoiceId?: string;
}

/**
 * @public
 */
export interface GetVoiceTemplateResponse {
  /**
   * <p>Provides information about the content and settings for a message template that can be used in messages that are sent through the voice channel.</p>
   */
  VoiceTemplateResponse: VoiceTemplateResponse | undefined;
}

/**
 * @public
 * <p>Provides information about the status, configuration, and other settings for all the journeys that are associated with an application.</p>
 */
export interface JourneysResponse {
  /**
   * <p>An array of responses, one for each journey that's associated with the application.</p>
   */
  Item: JourneyResponse[] | undefined;

  /**
   * <p>The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Changes the status of a journey.</p>
 */
export interface JourneyStateRequest {
  /**
   * <p>The status of the journey. Currently, Supported values are ACTIVE, PAUSED, and CANCELLED</p> <p>If you cancel a journey, Amazon Pinpoint continues to perform activities that are currently in progress, until those activities are complete. Amazon Pinpoint also continues to collect and aggregate analytics data for those activities, until they are complete, and any activities that were complete when you cancelled the journey.</p> <p>After you cancel a journey, you can't add, change, or remove any activities from the journey. In addition, Amazon Pinpoint stops evaluating the journey and doesn't perform any activities that haven't started.</p> <p>When the journey is paused, Amazon Pinpoint continues to perform activities that are currently in progress, until those activities are complete. Endpoints will stop entering journeys when the journey is paused and will resume entering the journey after the journey is resumed. For wait activities, wait time is paused when the journey is paused. Currently, PAUSED only supports journeys with a segment refresh interval.</p>
   */
  State?: State | string;
}

/**
 * @public
 */
export interface ListJourneysRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The maximum number of items to include in each page of a paginated response. This parameter is not supported for application, campaign, and journey metrics.</p>
   */
  PageSize?: string;

  /**
   * <p>The NextToken string that specifies which page of results to return in a paginated response.</p>
   */
  Token?: string;
}

/**
 * @public
 */
export interface ListJourneysResponse {
  /**
   * <p>Provides information about the status, configuration, and other settings for all the journeys that are associated with an application.</p>
   */
  JourneysResponse: JourneysResponse | undefined;
}

/**
 * @public
 * <p>Provides information about a message template that's associated with your Amazon Pinpoint account.</p>
 */
export interface TemplateResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the message template. This value isn't included in a TemplateResponse object. To retrieve the ARN of a template, use the GetEmailTemplate, GetPushTemplate, GetSmsTemplate, or GetVoiceTemplate operation, depending on the type of template that you want to retrieve the ARN for.</p>
   */
  Arn?: string;

  /**
   * <p>The date, in ISO 8601 format, when the message template was created.</p>
   */
  CreationDate: string | undefined;

  /**
   * <p>The JSON object that specifies the default values that are used for message variables in the message template. This object isn't included in a TemplateResponse object. To retrieve this object for a template, use the GetEmailTemplate, GetPushTemplate, GetSmsTemplate, or GetVoiceTemplate operation, depending on the type of template that you want to retrieve the object for.</p>
   */
  DefaultSubstitutions?: string;

  /**
   * <p>The date, in ISO 8601 format, when the message template was last modified.</p>
   */
  LastModifiedDate: string | undefined;

  /**
   * <p>A map of key-value pairs that identifies the tags that are associated with the message template. This object isn't included in a TemplateResponse object. To retrieve this object for a template, use the GetEmailTemplate, GetPushTemplate, GetSmsTemplate, or GetVoiceTemplate operation, depending on the type of template that you want to retrieve the object for.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>The custom description of the message template. This value isn't included in a TemplateResponse object. To retrieve the description of a template, use the GetEmailTemplate, GetPushTemplate, GetSmsTemplate, or GetVoiceTemplate operation, depending on the type of template that you want to retrieve the description for.</p>
   */
  TemplateDescription?: string;

  /**
   * <p>The name of the message template.</p>
   */
  TemplateName: string | undefined;

  /**
   * <p>The type of channel that the message template is designed for. Possible values are: EMAIL, PUSH, SMS, and VOICE.</p>
   */
  TemplateType: TemplateType | string | undefined;

  /**
   * <p>The unique identifier, as an integer, for the active version of the message template.</p>
   */
  Version?: string;
}

/**
 * @public
 * <p>Provides information about a specific version of a message template.</p>
 */
export interface TemplateVersionResponse {
  /**
   * <p>The date, in ISO 8601 format, when the version of the message template was created.</p>
   */
  CreationDate: string | undefined;

  /**
   * <p>A JSON object that specifies the default values that are used for message variables in the version of the message template. This object is a set of key-value pairs. Each key defines a message variable in the template. The corresponding value defines the default value for that variable.</p>
   */
  DefaultSubstitutions?: string;

  /**
   * <p>The date, in ISO 8601 format, when the version of the message template was last modified.</p>
   */
  LastModifiedDate: string | undefined;

  /**
   * <p>The custom description of the version of the message template.</p>
   */
  TemplateDescription?: string;

  /**
   * <p>The name of the message template.</p>
   */
  TemplateName: string | undefined;

  /**
   * <p>The type of channel that the message template is designed for. Possible values are: EMAIL, PUSH, SMS, and VOICE.</p>
   */
  TemplateType: string | undefined;

  /**
   * <p>The unique identifier for the version of the message template. This value is an integer that Amazon Pinpoint automatically increments and assigns to each new version of a template.</p>
   */
  Version?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 * <p>Specifies the tags (keys and values) for an application, campaign, message template, or segment.</p>
 */
export interface TagsModel {
  /**
   * <p>A string-to-string map of key-value pairs that defines the tags for an application, campaign, message template, or segment. Each of these resources can have a maximum of 50 tags.</p> <p>Each tag consists of a required tag key and an associated tag value. The maximum length of a tag key is 128 characters. The maximum length of a tag value is 256 characters.</p>
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>Specifies the tags (keys and values) for an application, campaign, message template, or segment.</p>
   */
  TagsModel: TagsModel | undefined;
}

/**
 * @public
 */
export interface ListTemplatesRequest {
  /**
   * <p>The  string that specifies which page of results to return in a paginated response. This parameter is not supported for application, campaign, and journey metrics.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of items to include in each page of a paginated response. This parameter is not supported for application, campaign, and journey metrics.</p>
   */
  PageSize?: string;

  /**
   * <p>The substring to match in the names of the message templates to include in the results. If you specify this value, Amazon Pinpoint returns only those templates whose names begin with the value that you specify.</p>
   */
  Prefix?: string;

  /**
   * <p>The type of message template to include in the results. Valid values are: EMAIL, PUSH, SMS, and VOICE. To include all types of templates in the results, don't include this parameter in your request.</p>
   */
  TemplateType?: string;
}

/**
 * @public
 * <p>Provides information about all the message templates that are associated with your Amazon Pinpoint account.</p>
 */
export interface TemplatesResponse {
  /**
   * <p>An array of responses, one for each message template that's associated with your Amazon Pinpoint account and meets any filter criteria that you specified in the request.</p>
   */
  Item: TemplateResponse[] | undefined;

  /**
   * <p>The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListTemplatesResponse {
  /**
   * <p>Provides information about all the message templates that are associated with your Amazon Pinpoint account.</p>
   */
  TemplatesResponse: TemplatesResponse | undefined;
}

/**
 * @public
 */
export interface ListTemplateVersionsRequest {
  /**
   * <p>The  string that specifies which page of results to return in a paginated response. This parameter is not supported for application, campaign, and journey metrics.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of items to include in each page of a paginated response. This parameter is not supported for application, campaign, and journey metrics.</p>
   */
  PageSize?: string;

  /**
   * <p>The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.</p>
   */
  TemplateName: string | undefined;

  /**
   * <p>The type of channel that the message template is designed for. Valid values are: EMAIL, PUSH, SMS, and VOICE.</p>
   */
  TemplateType: string | undefined;
}

/**
 * @public
 * <p>Provides information about all the versions of a specific message template.</p>
 */
export interface TemplateVersionsResponse {
  /**
   * <p>An array of responses, one for each version of the message template.</p>
   */
  Item: TemplateVersionResponse[] | undefined;

  /**
   * <p>The message that's returned from the API for the request to retrieve information about all the versions of the message template.</p>
   */
  Message?: string;

  /**
   * <p>The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.</p>
   */
  NextToken?: string;

  /**
   * <p>The unique identifier for the request to retrieve information about all the versions of the message template.</p>
   */
  RequestID?: string;
}

/**
 * @public
 */
export interface ListTemplateVersionsResponse {
  /**
   * <p>Provides information about all the versions of a specific message template.</p>
   */
  TemplateVersionsResponse: TemplateVersionsResponse | undefined;
}

/**
 * @public
 * <p>Provides information about the results of sending a message directly to an endpoint address.</p>
 */
export interface MessageResult {
  /**
   * <p>The delivery status of the message. Possible values are:</p> <ul> <li><p>DUPLICATE - The endpoint address is a duplicate of another endpoint address. Amazon Pinpoint won't attempt to send the message again.</p></li>   <li><p>OPT_OUT - The user who's associated with the endpoint address has opted out of receiving messages from you. Amazon Pinpoint won't attempt to send the message again.</p></li> <li><p>PERMANENT_FAILURE - An error occurred when delivering the message to the endpoint address. Amazon Pinpoint won't attempt to send the message again.</p></li>   <li><p>SUCCESSFUL - The message was successfully delivered to the endpoint address.</p></li> <li><p>TEMPORARY_FAILURE - A temporary error occurred. Amazon Pinpoint won't attempt to send the message again.</p></li> <li><p>THROTTLED - Amazon Pinpoint throttled the operation to send the message to the endpoint address.</p></li> <li><p>TIMEOUT - The message couldn't be sent within the timeout period.</p></li> <li><p>UNKNOWN_FAILURE - An unknown error occurred.</p></li></ul>
   */
  DeliveryStatus: DeliveryStatus | string | undefined;

  /**
   * <p>The unique identifier for the message that was sent.</p>
   */
  MessageId?: string;

  /**
   * <p>The downstream service status code for delivering the message.</p>
   */
  StatusCode: number | undefined;

  /**
   * <p>The status message for delivering the message.</p>
   */
  StatusMessage?: string;

  /**
   * <p>For push notifications that are sent through the GCM channel, specifies whether the endpoint's device registration token was updated as part of delivering the message.</p>
   */
  UpdatedToken?: string;
}

/**
 * @public
 * <p>Specifies the configuration and other settings for a message.</p>
 */
export interface MessageRequest {
  /**
   * <p>A map of key-value pairs, where each key is an address and each value is an <a href="https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-messages.html#apps-application-id-messages-model-addressconfiguration">AddressConfiguration</a> object. An address can be a push notification token, a phone number, or an email address. You can use an <a href="https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-messages.html#apps-application-id-messages-model-addressconfiguration">AddressConfiguration</a> object to tailor the message for an address by specifying settings such as content overrides and message variables.</p>
   */
  Addresses?: Record<string, AddressConfiguration>;

  /**
   * <p>A map of custom attributes to attach to the message. For a push notification, this payload is added to the data.pinpoint object. For an email or text message, this payload is added to email/SMS delivery receipt event attributes.</p>
   */
  Context?: Record<string, string>;

  /**
   * <p>A map of key-value pairs, where each key is an endpoint ID and each value is an <a href="https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-messages.html#apps-application-id-messages-model-endpointsendconfiguration">EndpointSendConfiguration</a> object. You can use an <a href="https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-messages.html#apps-application-id-messages-model-endpointsendconfiguration">EndpointSendConfiguration</a> object to tailor the message for an endpoint by specifying settings such as content overrides and message variables.</p>
   */
  Endpoints?: Record<string, EndpointSendConfiguration>;

  /**
   * <p>The settings and content for the default message and any default messages that you defined for specific channels.</p>
   */
  MessageConfiguration: DirectMessageConfiguration | undefined;

  /**
   * <p>The message template to use for the message.</p>
   */
  TemplateConfiguration?: TemplateConfiguration;

  /**
   * <p>The unique identifier for tracing the message. This identifier is visible to message recipients.</p>
   */
  TraceId?: string;
}

/**
 * @public
 * <p>Provides information about the results of a request to send a message to an endpoint address.</p>
 */
export interface MessageResponse {
  /**
   * <p>The unique identifier for the application that was used to send the message.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>A map that contains a multipart response for each address that the message was sent to. In the map, the endpoint ID is the key and the result is the value.</p>
   */
  EndpointResult?: Record<string, EndpointMessageResult>;

  /**
   * <p>The identifier for the original request that the message was delivered for.</p>
   */
  RequestId?: string;

  /**
   * <p>A map that contains a multipart response for each address (email address, phone number, or push notification token) that the message was sent to. In the map, the address is the key and the result is the value.</p>
   */
  Result?: Record<string, MessageResult>;
}

/**
 * @public
 * <p>Specifies a phone number to validate and retrieve information about.</p>
 */
export interface NumberValidateRequest {
  /**
   * <p>The two-character code, in ISO 3166-1 alpha-2 format, for the country or region where the phone number was originally registered.</p>
   */
  IsoCountryCode?: string;

  /**
   * <p>The phone number to retrieve information about. The phone number that you provide should include a valid numeric country code. Otherwise, the operation might result in an error.</p>
   */
  PhoneNumber?: string;
}

/**
 * @public
 * <p>Provides information about a phone number.</p>
 */
export interface NumberValidateResponse {
  /**
   * <p>The carrier or service provider that the phone number is currently registered with. In some countries and regions, this value may be the carrier or service provider that the phone number was originally registered with.</p>
   */
  Carrier?: string;

  /**
   * <p>The name of the city where the phone number was originally registered.</p>
   */
  City?: string;

  /**
   * <p>The cleansed phone number, in E.164 format, for the location where the phone number was originally registered.</p>
   */
  CleansedPhoneNumberE164?: string;

  /**
   * <p>The cleansed phone number, in the format for the location where the phone number was originally registered.</p>
   */
  CleansedPhoneNumberNational?: string;

  /**
   * <p>The name of the country or region where the phone number was originally registered.</p>
   */
  Country?: string;

  /**
   * <p>The two-character code, in ISO 3166-1 alpha-2 format, for the country or region where the phone number was originally registered.</p>
   */
  CountryCodeIso2?: string;

  /**
   * <p>The numeric code for the country or region where the phone number was originally registered.</p>
   */
  CountryCodeNumeric?: string;

  /**
   * <p>The name of the county where the phone number was originally registered.</p>
   */
  County?: string;

  /**
   * <p>The two-character code, in ISO 3166-1 alpha-2 format, that was sent in the request body.</p>
   */
  OriginalCountryCodeIso2?: string;

  /**
   * <p>The phone number that was sent in the request body.</p>
   */
  OriginalPhoneNumber?: string;

  /**
   * <p>The description of the phone type. Valid values are: MOBILE, LANDLINE, VOIP,
   *                   INVALID, PREPAID, and OTHER.</p>
   */
  PhoneType?: string;

  /**
   * <p>The phone type, represented by an integer. Valid values are: 0 (mobile), 1 (landline), 2 (VoIP), 3 (invalid), 4 (other), and 5 (prepaid).</p>
   */
  PhoneTypeCode?: number;

  /**
   * <p>The time zone for the location where the phone number was originally registered.</p>
   */
  Timezone?: string;

  /**
   * <p>The postal or ZIP code for the location where the phone number was originally registered.</p>
   */
  ZipCode?: string;
}

/**
 * @public
 */
export interface PhoneNumberValidateRequest {
  /**
   * <p>Specifies a phone number to validate and retrieve information about.</p>
   */
  NumberValidateRequest: NumberValidateRequest | undefined;
}

/**
 * @public
 */
export interface PhoneNumberValidateResponse {
  /**
   * <p>Provides information about a phone number.</p>
   */
  NumberValidateResponse: NumberValidateResponse | undefined;
}

/**
 * @public
 */
export interface PutEventsRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>Specifies a batch of events to process.</p>
   */
  EventsRequest: EventsRequest | undefined;
}

/**
 * @public
 */
export interface PutEventsResponse {
  /**
   * <p>Provides information about endpoints and the events that they're associated with.</p>
   */
  EventsResponse: EventsResponse | undefined;
}

/**
 * @public
 * <p>Specifies the Amazon Resource Name (ARN) of an event stream to publish events to and the AWS Identity and Access Management (IAM) role to use when publishing those events.</p>
 */
export interface WriteEventStream {
  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Kinesis data stream or Amazon Kinesis Data Firehose delivery stream that you want to publish event data to.</p> <p>For a Kinesis data stream, the ARN format is: arn:aws:kinesis:<replaceable>region</replaceable>:<replaceable>account-id</replaceable>:stream/<replaceable>stream_name</replaceable>
   *                </p> <p>For a Kinesis Data Firehose delivery stream, the ARN format is: arn:aws:firehose:<replaceable>region</replaceable>:<replaceable>account-id</replaceable>:deliverystream/<replaceable>stream_name</replaceable>
   *                </p>
   */
  DestinationStreamArn: string | undefined;

  /**
   * <p>The AWS Identity and Access Management (IAM) role that authorizes Amazon Pinpoint to publish event data to the stream in your AWS account.</p>
   */
  RoleArn: string | undefined;
}

/**
 * @public
 */
export interface PutEventStreamRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>Specifies the Amazon Resource Name (ARN) of an event stream to publish events to and the AWS Identity and Access Management (IAM) role to use when publishing those events.</p>
   */
  WriteEventStream: WriteEventStream | undefined;
}

/**
 * @public
 */
export interface PutEventStreamResponse {
  /**
   * <p>Specifies settings for publishing event data to an Amazon Kinesis data stream or an Amazon Kinesis Data Firehose delivery stream.</p>
   */
  EventStream: EventStream | undefined;
}

/**
 * @public
 * <p>Specifies one or more attributes to remove from all the endpoints that are associated with an application.</p>
 */
export interface UpdateAttributesRequest {
  /**
   * <p>An array of the attributes to remove from all the endpoints that are associated with the application. The array can specify the complete, exact name of each attribute to remove or it can specify a glob pattern that an attribute name must match in order for the attribute to be removed.</p>
   */
  Blacklist?: string[];
}

/**
 * @public
 */
export interface RemoveAttributesRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The type of attribute or attributes to remove. Valid values are:</p> <ul><li><p>endpoint-custom-attributes - Custom attributes that describe endpoints, such as the date when an associated user opted in or out of receiving communications from you through a specific type of channel.</p></li> <li><p>endpoint-metric-attributes - Custom metrics that your app reports to Amazon Pinpoint for endpoints, such as the number of app sessions or the number of items left in a cart.</p></li> <li><p>endpoint-user-attributes - Custom attributes that describe users, such as first name, last name, and age.</p></li></ul>
   */
  AttributeType: string | undefined;

  /**
   * <p>Specifies one or more attributes to remove from all the endpoints that are associated with an application.</p>
   */
  UpdateAttributesRequest: UpdateAttributesRequest | undefined;
}

/**
 * @public
 */
export interface RemoveAttributesResponse {
  /**
   * <p>Provides information about the type and the names of attributes that were removed from all the endpoints that are associated with an application.</p>
   */
  AttributesResource: AttributesResource | undefined;
}

/**
 * @public
 */
export interface SendMessagesRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>Specifies the configuration and other settings for a message.</p>
   */
  MessageRequest: MessageRequest | undefined;
}

/**
 * @public
 */
export interface SendMessagesResponse {
  /**
   * <p>Provides information about the results of a request to send a message to an endpoint address.</p>
   */
  MessageResponse: MessageResponse | undefined;
}

/**
 * @public
 * <p>Send OTP message request parameters.</p>
 */
export interface SendOTPMessageRequestParameters {
  /**
   * <p>The attempts allowed to validate an OTP.</p>
   */
  AllowedAttempts?: number;

  /**
   * <p>The brand name that will be substituted into the OTP message body. Should be owned by calling AWS account.</p>
   */
  BrandName: string | undefined;

  /**
   * <p>Channel type for the OTP message. Supported values: [SMS].</p>
   */
  Channel: string | undefined;

  /**
   * <p>The number of characters in the generated OTP.</p>
   */
  CodeLength?: number;

  /**
   * <p>The destination identity to send OTP to.</p>
   */
  DestinationIdentity: string | undefined;

  /**
   * <p>A unique Entity ID received from DLT after entity registration is approved.</p>
   */
  EntityId?: string;

  /**
   * <p>The language to be used for the outgoing message body containing the OTP.</p>
   */
  Language?: string;

  /**
   * <p>The origination identity used to send OTP from.</p>
   */
  OriginationIdentity: string | undefined;

  /**
   * <p>Developer-specified reference identifier. Required to match during OTP verification.</p>
   */
  ReferenceId: string | undefined;

  /**
   * <p>A unique Template ID received from DLT after entity registration is approved.</p>
   */
  TemplateId?: string;

  /**
   * <p>The time in minutes before the OTP is no longer valid.</p>
   */
  ValidityPeriod?: number;
}

/**
 * @public
 */
export interface SendOTPMessageRequest {
  /**
   * <p>The unique ID of your Amazon Pinpoint application.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>Send OTP message request parameters.</p>
   */
  SendOTPMessageRequestParameters: SendOTPMessageRequestParameters | undefined;
}

/**
 * @public
 */
export interface SendOTPMessageResponse {
  /**
   * <p>Provides information about the results of a request to send a message to an endpoint address.</p>
   */
  MessageResponse: MessageResponse | undefined;
}

/**
 * @public
 * <p>Specifies the configuration and other settings for a message to send to all the endpoints that are associated with a list of users.</p>
 */
export interface SendUsersMessageRequest {
  /**
   * <p>A map of custom attribute-value pairs. For a push notification, Amazon Pinpoint adds these attributes to the data.pinpoint object in the body of the notification payload. Amazon Pinpoint also provides these attributes in the events that it generates for users-messages deliveries.</p>
   */
  Context?: Record<string, string>;

  /**
   * <p>The settings and content for the default message and any default messages that you defined for specific channels.</p>
   */
  MessageConfiguration: DirectMessageConfiguration | undefined;

  /**
   * <p>The message template to use for the message.</p>
   */
  TemplateConfiguration?: TemplateConfiguration;

  /**
   * <p>The unique identifier for tracing the message. This identifier is visible to message recipients.</p>
   */
  TraceId?: string;

  /**
   * <p>A map that associates user IDs with <a href="https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-messages.html#apps-application-id-messages-model-endpointsendconfiguration">EndpointSendConfiguration</a> objects. You can use an <a href="https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-messages.html#apps-application-id-messages-model-endpointsendconfiguration">EndpointSendConfiguration</a> object to tailor the message for a user by specifying settings such as content overrides and message variables.</p>
   */
  Users: Record<string, EndpointSendConfiguration> | undefined;
}

/**
 * @public
 */
export interface SendUsersMessagesRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>Specifies the configuration and other settings for a message to send to all the endpoints that are associated with a list of users.</p>
   */
  SendUsersMessageRequest: SendUsersMessageRequest | undefined;
}

/**
 * @public
 * <p>Provides information about which users and endpoints a message was sent to.</p>
 */
export interface SendUsersMessageResponse {
  /**
   * <p>The unique identifier for the application that was used to send the message.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The unique identifier that was assigned to the message request.</p>
   */
  RequestId?: string;

  /**
   * <p>An object that indicates which endpoints the message was sent to, for each user. The object lists user IDs and, for each user ID, provides the endpoint IDs that the message was sent to. For each endpoint ID, it provides an EndpointMessageResult object.</p>
   */
  Result?: Record<string, Record<string, EndpointMessageResult>>;
}

/**
 * @public
 */
export interface SendUsersMessagesResponse {
  /**
   * <p>Provides information about which users and endpoints a message was sent to.</p>
   */
  SendUsersMessageResponse: SendUsersMessageResponse | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>Specifies the tags (keys and values) for an application, campaign, message template, or segment.</p>
   */
  TagsModel: TagsModel | undefined;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The key of the tag to remove from the resource. To remove multiple tags, append the tagKeys parameter and argument for each additional tag to remove, separated by an ampersand (&amp;).</p>
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateAdmChannelRequest {
  /**
   * <p>Specifies the status and settings of the ADM (Amazon Device Messaging) channel for an application.</p>
   */
  ADMChannelRequest: ADMChannelRequest | undefined;

  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;
}

/**
 * @public
 */
export interface UpdateAdmChannelResponse {
  /**
   * <p>Provides information about the status and settings of the ADM (Amazon Device Messaging) channel for an application.</p>
   */
  ADMChannelResponse: ADMChannelResponse | undefined;
}

/**
 * @public
 */
export interface UpdateApnsChannelRequest {
  /**
   * <p>Specifies the status and settings of the APNs (Apple Push Notification service) channel for an application.</p>
   */
  APNSChannelRequest: APNSChannelRequest | undefined;

  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;
}

/**
 * @public
 */
export interface UpdateApnsChannelResponse {
  /**
   * <p>Provides information about the status and settings of the APNs (Apple Push Notification service) channel for an application.</p>
   */
  APNSChannelResponse: APNSChannelResponse | undefined;
}

/**
 * @public
 */
export interface UpdateApnsSandboxChannelRequest {
  /**
   * <p>Specifies the status and settings of the APNs (Apple Push Notification service) sandbox channel for an application.</p>
   */
  APNSSandboxChannelRequest: APNSSandboxChannelRequest | undefined;

  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;
}

/**
 * @public
 */
export interface UpdateApnsSandboxChannelResponse {
  /**
   * <p>Provides information about the status and settings of the APNs (Apple Push Notification service) sandbox channel for an application.</p>
   */
  APNSSandboxChannelResponse: APNSSandboxChannelResponse | undefined;
}

/**
 * @public
 */
export interface UpdateApnsVoipChannelRequest {
  /**
   * <p>Specifies the status and settings of the APNs (Apple Push Notification service) VoIP channel for an application.</p>
   */
  APNSVoipChannelRequest: APNSVoipChannelRequest | undefined;

  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;
}

/**
 * @public
 */
export interface UpdateApnsVoipChannelResponse {
  /**
   * <p>Provides information about the status and settings of the APNs (Apple Push Notification service) VoIP channel for an application.</p>
   */
  APNSVoipChannelResponse: APNSVoipChannelResponse | undefined;
}

/**
 * @public
 */
export interface UpdateApnsVoipSandboxChannelRequest {
  /**
   * <p>Specifies the status and settings of the APNs (Apple Push Notification service) VoIP sandbox channel for an application.</p>
   */
  APNSVoipSandboxChannelRequest: APNSVoipSandboxChannelRequest | undefined;

  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;
}

/**
 * @public
 */
export interface UpdateApnsVoipSandboxChannelResponse {
  /**
   * <p>Provides information about the status and settings of the APNs (Apple Push Notification service) VoIP sandbox channel for an application.</p>
   */
  APNSVoipSandboxChannelResponse: APNSVoipSandboxChannelResponse | undefined;
}

/**
 * @public
 * <p>Specifies the default settings for an application.</p>
 */
export interface WriteApplicationSettingsRequest {
  /**
   * <p>The settings for the AWS Lambda function to invoke by default as a code hook for campaigns in the application. You can use this hook to customize segments that are used by campaigns in the application.</p> <p>To override these settings and define custom settings for a specific campaign, use the CampaignHook object of the <link  linkend="apps-application-id-campaigns-campaign-id">Campaign</link> resource.</p>
   */
  CampaignHook?: CampaignHook;

  /**
   * <p>Specifies whether to enable application-related alarms in Amazon CloudWatch.</p>
   */
  CloudWatchMetricsEnabled?: boolean;

  EventTaggingEnabled?: boolean;
  /**
   * <p>The default sending limits for campaigns in the application. To override these limits and define custom limits for a specific campaign or journey, use the <link  linkend="apps-application-id-campaigns-campaign-id">Campaign</link> resource or the <link  linkend="apps-application-id-journeys-journey-id">Journey</link> resource, respectively.</p>
   */
  Limits?: CampaignLimits;

  /**
   * <p>The default quiet time for campaigns in the application. Quiet time is a specific time range when messages aren't sent to endpoints, if all the following conditions are met:</p> <ul><li><p>The EndpointDemographic.Timezone property of the endpoint is set to a valid value.</p></li> <li><p>The current time in the endpoint's time zone is later than or equal to the time specified by the QuietTime.Start property for the application (or a campaign or journey that has custom quiet time settings).</p></li> <li><p>The current time in the endpoint's time zone is earlier than or equal to the time specified by the QuietTime.End property for the application (or a campaign or journey that has custom quiet time settings).</p></li></ul> <p>If any of the preceding conditions isn't met, the endpoint will receive messages from a campaign or journey, even if quiet time is enabled.</p> <p>To override the default quiet time settings for a specific campaign or journey, use the <link  linkend="apps-application-id-campaigns-campaign-id">Campaign</link> resource or the <link  linkend="apps-application-id-journeys-journey-id">Journey</link> resource to define a custom quiet time for the campaign or journey.</p>
   */
  QuietTime?: QuietTime;
}

/**
 * @public
 */
export interface UpdateApplicationSettingsRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>Specifies the default settings for an application.</p>
   */
  WriteApplicationSettingsRequest: WriteApplicationSettingsRequest | undefined;
}

/**
 * @public
 */
export interface UpdateApplicationSettingsResponse {
  /**
   * <p>Provides information about an application, including the default settings for an application.</p>
   */
  ApplicationSettingsResource: ApplicationSettingsResource | undefined;
}

/**
 * @public
 */
export interface UpdateBaiduChannelRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>Specifies the status and settings of the Baidu (Baidu Cloud Push) channel for an application.</p>
   */
  BaiduChannelRequest: BaiduChannelRequest | undefined;
}

/**
 * @public
 */
export interface UpdateBaiduChannelResponse {
  /**
   * <p>Provides information about the status and settings of the Baidu (Baidu Cloud Push) channel for an application.</p>
   */
  BaiduChannelResponse: BaiduChannelResponse | undefined;
}

/**
 * @public
 */
export interface UpdateCampaignRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The unique identifier for the campaign.</p>
   */
  CampaignId: string | undefined;

  /**
   * <p>Specifies the configuration and other settings for a campaign.</p>
   */
  WriteCampaignRequest: WriteCampaignRequest | undefined;
}

/**
 * @public
 */
export interface UpdateCampaignResponse {
  /**
   * <p>Provides information about the status, configuration, and other settings for a campaign.</p>
   */
  CampaignResponse: CampaignResponse | undefined;
}

/**
 * @public
 */
export interface UpdateEmailChannelRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>Specifies the status and settings of the email channel for an application.</p>
   */
  EmailChannelRequest: EmailChannelRequest | undefined;
}

/**
 * @public
 */
export interface UpdateEmailChannelResponse {
  /**
   * <p>Provides information about the status and settings of the email channel for an application.</p>
   */
  EmailChannelResponse: EmailChannelResponse | undefined;
}

/**
 * @public
 */
export interface UpdateEmailTemplateRequest {
  /**
   * <p>Specifies whether to save the updates as a new version of the message template. Valid values are: true, save the updates as a new version; and, false, save the updates to (overwrite) the latest existing version of the template.</p> <p>If you don't specify a value for this parameter, Amazon Pinpoint saves the updates to (overwrites) the latest existing version of the template. If you specify a value of true for this parameter, don't specify a value for the version parameter. Otherwise, an error will occur.</p>
   */
  CreateNewVersion?: boolean;

  /**
   * <p>Specifies the content and settings for a message template that can be used in messages that are sent through the email channel.</p>
   */
  EmailTemplateRequest: EmailTemplateRequest | undefined;

  /**
   * <p>The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.</p>
   */
  TemplateName: string | undefined;

  /**
   * <p>The unique identifier for the version of the message template to update, retrieve information about, or delete. To retrieve identifiers and other information for all the versions of a template, use the <link  linkend="templates-template-name-template-type-versions">Template Versions</link> resource.</p> <p>If specified, this value must match the identifier for an existing template version. If specified for an update operation, this value must match the identifier for the latest existing version of the template. This restriction helps ensure that race conditions don't occur.</p> <p>If you don't specify a value for this parameter, Amazon Pinpoint does the following:</p> <ul><li><p>For a get operation, retrieves information about the active version of the template.</p></li> <li><p>For an update operation, saves the updates to (overwrites) the latest existing version of the template, if the create-new-version parameter isn't used or is set to false.</p></li> <li><p>For a delete operation, deletes the template, including all versions of the template.</p></li></ul>
   */
  Version?: string;
}

/**
 * @public
 */
export interface UpdateEmailTemplateResponse {
  /**
   * <p>Provides information about an API request or response.</p>
   */
  MessageBody: MessageBody | undefined;
}

/**
 * @public
 */
export interface UpdateEndpointRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The unique identifier for the endpoint.</p>
   */
  EndpointId: string | undefined;

  /**
   * <p>Specifies the channel type and other settings for an endpoint.</p>
   */
  EndpointRequest: EndpointRequest | undefined;
}

/**
 * @public
 */
export interface UpdateEndpointResponse {
  /**
   * <p>Provides information about an API request or response.</p>
   */
  MessageBody: MessageBody | undefined;
}

/**
 * @public
 */
export interface UpdateEndpointsBatchRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>Specifies a batch of endpoints to create or update and the settings and attributes to set or change for each endpoint.</p>
   */
  EndpointBatchRequest: EndpointBatchRequest | undefined;
}

/**
 * @public
 */
export interface UpdateEndpointsBatchResponse {
  /**
   * <p>Provides information about an API request or response.</p>
   */
  MessageBody: MessageBody | undefined;
}

/**
 * @public
 */
export interface UpdateGcmChannelRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>Specifies the status and settings of the GCM channel for an application. This channel enables Amazon Pinpoint to send push notifications through the Firebase Cloud Messaging (FCM), formerly Google Cloud Messaging (GCM), service.</p>
   */
  GCMChannelRequest: GCMChannelRequest | undefined;
}

/**
 * @public
 */
export interface UpdateGcmChannelResponse {
  /**
   * <p>Provides information about the status and settings of the GCM channel for an application. The GCM channel enables Amazon Pinpoint to send push notifications through the Firebase Cloud Messaging (FCM), formerly Google Cloud Messaging (GCM), service.</p>
   */
  GCMChannelResponse: GCMChannelResponse | undefined;
}

/**
 * @public
 */
export interface UpdateInAppTemplateRequest {
  /**
   * <p>Specifies whether to save the updates as a new version of the message template. Valid values are: true, save the updates as a new version; and, false, save the updates to (overwrite) the latest existing version of the template.</p> <p>If you don't specify a value for this parameter, Amazon Pinpoint saves the updates to (overwrites) the latest existing version of the template. If you specify a value of true for this parameter, don't specify a value for the version parameter. Otherwise, an error will occur.</p>
   */
  CreateNewVersion?: boolean;

  /**
   * <p>InApp Template Request.</p>
   */
  InAppTemplateRequest: InAppTemplateRequest | undefined;

  /**
   * <p>The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.</p>
   */
  TemplateName: string | undefined;

  /**
   * <p>The unique identifier for the version of the message template to update, retrieve information about, or delete. To retrieve identifiers and other information for all the versions of a template, use the <link  linkend="templates-template-name-template-type-versions">Template Versions</link> resource.</p> <p>If specified, this value must match the identifier for an existing template version. If specified for an update operation, this value must match the identifier for the latest existing version of the template. This restriction helps ensure that race conditions don't occur.</p> <p>If you don't specify a value for this parameter, Amazon Pinpoint does the following:</p> <ul><li><p>For a get operation, retrieves information about the active version of the template.</p></li> <li><p>For an update operation, saves the updates to (overwrites) the latest existing version of the template, if the create-new-version parameter isn't used or is set to false.</p></li> <li><p>For a delete operation, deletes the template, including all versions of the template.</p></li></ul>
   */
  Version?: string;
}

/**
 * @public
 */
export interface UpdateInAppTemplateResponse {
  /**
   * <p>Provides information about an API request or response.</p>
   */
  MessageBody: MessageBody | undefined;
}

/**
 * @public
 */
export interface UpdateJourneyRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The unique identifier for the journey.</p>
   */
  JourneyId: string | undefined;

  /**
   * <p>Specifies the configuration and other settings for a journey.</p>
   */
  WriteJourneyRequest: WriteJourneyRequest | undefined;
}

/**
 * @public
 */
export interface UpdateJourneyResponse {
  /**
   * <p>Provides information about the status, configuration, and other settings for a journey.</p>
   */
  JourneyResponse: JourneyResponse | undefined;
}

/**
 * @public
 */
export interface UpdateJourneyStateRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The unique identifier for the journey.</p>
   */
  JourneyId: string | undefined;

  /**
   * <p>Changes the status of a journey.</p>
   */
  JourneyStateRequest: JourneyStateRequest | undefined;
}

/**
 * @public
 */
export interface UpdateJourneyStateResponse {
  /**
   * <p>Provides information about the status, configuration, and other settings for a journey.</p>
   */
  JourneyResponse: JourneyResponse | undefined;
}

/**
 * @public
 */
export interface UpdatePushTemplateRequest {
  /**
   * <p>Specifies whether to save the updates as a new version of the message template. Valid values are: true, save the updates as a new version; and, false, save the updates to (overwrite) the latest existing version of the template.</p> <p>If you don't specify a value for this parameter, Amazon Pinpoint saves the updates to (overwrites) the latest existing version of the template. If you specify a value of true for this parameter, don't specify a value for the version parameter. Otherwise, an error will occur.</p>
   */
  CreateNewVersion?: boolean;

  /**
   * <p>Specifies the content and settings for a message template that can be used in messages that are sent through a push notification channel.</p>
   */
  PushNotificationTemplateRequest: PushNotificationTemplateRequest | undefined;

  /**
   * <p>The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.</p>
   */
  TemplateName: string | undefined;

  /**
   * <p>The unique identifier for the version of the message template to update, retrieve information about, or delete. To retrieve identifiers and other information for all the versions of a template, use the <link  linkend="templates-template-name-template-type-versions">Template Versions</link> resource.</p> <p>If specified, this value must match the identifier for an existing template version. If specified for an update operation, this value must match the identifier for the latest existing version of the template. This restriction helps ensure that race conditions don't occur.</p> <p>If you don't specify a value for this parameter, Amazon Pinpoint does the following:</p> <ul><li><p>For a get operation, retrieves information about the active version of the template.</p></li> <li><p>For an update operation, saves the updates to (overwrites) the latest existing version of the template, if the create-new-version parameter isn't used or is set to false.</p></li> <li><p>For a delete operation, deletes the template, including all versions of the template.</p></li></ul>
   */
  Version?: string;
}

/**
 * @public
 */
export interface UpdatePushTemplateResponse {
  /**
   * <p>Provides information about an API request or response.</p>
   */
  MessageBody: MessageBody | undefined;
}

/**
 * @public
 * <p>Specifies Amazon Pinpoint configuration settings for retrieving and processing recommendation data from a recommender model.</p>
 */
export interface UpdateRecommenderConfigurationShape {
  /**
   * <p>A map of key-value pairs that defines 1-10 custom endpoint or user attributes, depending on the value for the RecommendationProviderIdType property. Each of these attributes temporarily stores a recommended item that's retrieved from the recommender model and sent to an AWS Lambda function for additional processing. Each attribute can be used as a message variable in a message template.</p> <p>In the map, the key is the name of a custom attribute and the value is a custom display name for that attribute. The display name appears in the <b>Attribute finder</b> of the template editor on the Amazon Pinpoint console. The following restrictions apply to these names:</p> <ul><li><p>An attribute name must start with a letter or number and it can contain up to 50 characters. The characters can be letters, numbers, underscores (_), or hyphens (-). Attribute names are case sensitive and must be unique.</p></li> <li><p>An attribute display name must start with a letter or number and it can contain up to 25 characters. The characters can be letters, numbers, spaces, underscores (_), or hyphens (-).</p></li></ul> <p>This object is required if the configuration invokes an AWS Lambda function (RecommendationTransformerUri) to process recommendation data. Otherwise, don't include this object in your request.</p>
   */
  Attributes?: Record<string, string>;

  /**
   * <p>A custom description of the configuration for the recommender model. The description can contain up to 128 characters. The characters can be letters, numbers, spaces, or the following symbols: _ ; () , ‐.</p>
   */
  Description?: string;

  /**
   * <p>A custom name of the configuration for the recommender model. The name must start with a letter or number and it can contain up to 128 characters. The characters can be letters, numbers, spaces, underscores (_), or hyphens (-).</p>
   */
  Name?: string;

  /**
   * <p>The type of Amazon Pinpoint ID to associate with unique user IDs in the recommender model. This value enables the model to use attribute and event data that’s specific to a particular endpoint or user in an Amazon Pinpoint application. Valid values are:</p> <ul><li><p>PINPOINT_ENDPOINT_ID - Associate each user in the model with a particular endpoint in Amazon Pinpoint. The data is correlated based on endpoint IDs in Amazon Pinpoint. This is the default value.</p></li> <li><p>PINPOINT_USER_ID - Associate each user in the model with a particular user and endpoint in Amazon Pinpoint. The data is correlated based on user IDs in Amazon Pinpoint. If you specify this value, an endpoint definition in Amazon Pinpoint has to specify both a user ID (UserId) and an endpoint ID. Otherwise, messages won’t be sent to the user's endpoint.</p></li></ul>
   */
  RecommendationProviderIdType?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that authorizes Amazon Pinpoint to retrieve recommendation data from the recommender model.</p>
   */
  RecommendationProviderRoleArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the recommender model to retrieve recommendation data from. This value must match the ARN of an Amazon Personalize campaign.</p>
   */
  RecommendationProviderUri: string | undefined;

  /**
   * <p>The name or Amazon Resource Name (ARN) of the AWS Lambda function to invoke for additional processing of recommendation data that's retrieved from the recommender model.</p>
   */
  RecommendationTransformerUri?: string;

  /**
   * <p>A custom display name for the standard endpoint or user attribute (RecommendationItems) that temporarily stores recommended items for each endpoint or user, depending on the value for the RecommendationProviderIdType property. This value is required if the configuration doesn't invoke an AWS Lambda function (RecommendationTransformerUri) to perform additional processing of recommendation data.</p> <p>This name appears in the <b>Attribute finder</b> of the template editor on the Amazon Pinpoint console. The name can contain up to 25 characters. The characters can be letters, numbers, spaces, underscores (_), or hyphens (-). These restrictions don't apply to attribute values.</p>
   */
  RecommendationsDisplayName?: string;

  /**
   * <p>The number of recommended items to retrieve from the model for each endpoint or user, depending on the value for the RecommendationProviderIdType property. This number determines how many recommended items are available for use in message variables. The minimum value is 1. The maximum value is 5. The default value is 5.</p> <p>To use multiple recommended items and custom attributes with message variables, you have to use an AWS Lambda function (RecommendationTransformerUri) to perform additional processing of recommendation data.</p>
   */
  RecommendationsPerMessage?: number;
}

/**
 * @public
 */
export interface UpdateRecommenderConfigurationRequest {
  /**
   * <p>The unique identifier for the recommender model configuration. This identifier is displayed as the <b>Recommender ID</b> on the Amazon Pinpoint console.</p>
   */
  RecommenderId: string | undefined;

  /**
   * <p>Specifies Amazon Pinpoint configuration settings for retrieving and processing recommendation data from a recommender model.</p>
   */
  UpdateRecommenderConfiguration: UpdateRecommenderConfigurationShape | undefined;
}

/**
 * @public
 */
export interface UpdateRecommenderConfigurationResponse {
  /**
   * <p>Provides information about Amazon Pinpoint configuration settings for retrieving and processing data from a recommender model.</p>
   */
  RecommenderConfigurationResponse: RecommenderConfigurationResponse | undefined;
}

/**
 * @public
 */
export interface UpdateSegmentRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The unique identifier for the segment.</p>
   */
  SegmentId: string | undefined;

  /**
   * <p>Specifies the configuration, dimension, and other settings for a segment. A WriteSegmentRequest object can include a Dimensions object or a SegmentGroups object, but not both.</p>
   */
  WriteSegmentRequest: WriteSegmentRequest | undefined;
}

/**
 * @public
 */
export interface UpdateSegmentResponse {
  /**
   * <p>Provides information about the configuration, dimension, and other settings for a segment.</p>
   */
  SegmentResponse: SegmentResponse | undefined;
}

/**
 * @public
 * <p>Specifies the status and settings of the SMS channel for an application.</p>
 */
export interface SMSChannelRequest {
  /**
   * <p>Specifies whether to enable the SMS channel for the application.</p>
   */
  Enabled?: boolean;

  /**
   * <p>The identity that you want to display on recipients' devices when they receive messages from the SMS channel.</p>
   */
  SenderId?: string;

  /**
   * <p>The registered short code that you want to use when you send messages through the SMS channel.</p>
   */
  ShortCode?: string;
}

/**
 * @public
 */
export interface UpdateSmsChannelRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>Specifies the status and settings of the SMS channel for an application.</p>
   */
  SMSChannelRequest: SMSChannelRequest | undefined;
}

/**
 * @public
 */
export interface UpdateSmsChannelResponse {
  /**
   * <p>Provides information about the status and settings of the SMS channel for an application.</p>
   */
  SMSChannelResponse: SMSChannelResponse | undefined;
}

/**
 * @public
 */
export interface UpdateSmsTemplateRequest {
  /**
   * <p>Specifies whether to save the updates as a new version of the message template. Valid values are: true, save the updates as a new version; and, false, save the updates to (overwrite) the latest existing version of the template.</p> <p>If you don't specify a value for this parameter, Amazon Pinpoint saves the updates to (overwrites) the latest existing version of the template. If you specify a value of true for this parameter, don't specify a value for the version parameter. Otherwise, an error will occur.</p>
   */
  CreateNewVersion?: boolean;

  /**
   * <p>Specifies the content and settings for a message template that can be used in text messages that are sent through the SMS channel.</p>
   */
  SMSTemplateRequest: SMSTemplateRequest | undefined;

  /**
   * <p>The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.</p>
   */
  TemplateName: string | undefined;

  /**
   * <p>The unique identifier for the version of the message template to update, retrieve information about, or delete. To retrieve identifiers and other information for all the versions of a template, use the <link  linkend="templates-template-name-template-type-versions">Template Versions</link> resource.</p> <p>If specified, this value must match the identifier for an existing template version. If specified for an update operation, this value must match the identifier for the latest existing version of the template. This restriction helps ensure that race conditions don't occur.</p> <p>If you don't specify a value for this parameter, Amazon Pinpoint does the following:</p> <ul><li><p>For a get operation, retrieves information about the active version of the template.</p></li> <li><p>For an update operation, saves the updates to (overwrites) the latest existing version of the template, if the create-new-version parameter isn't used or is set to false.</p></li> <li><p>For a delete operation, deletes the template, including all versions of the template.</p></li></ul>
   */
  Version?: string;
}

/**
 * @public
 */
export interface UpdateSmsTemplateResponse {
  /**
   * <p>Provides information about an API request or response.</p>
   */
  MessageBody: MessageBody | undefined;
}

/**
 * @public
 * <p>Specifies which version of a message template to use as the active version of the template.</p>
 */
export interface TemplateActiveVersionRequest {
  /**
   * <p>The version of the message template to use as the active version of the template. Valid values are: latest, for the most recent version of the template; or, the unique identifier for any existing version of the template. If you specify an identifier, the value must match the identifier for an existing template version. To retrieve a list of versions and version identifiers for a template, use the <link  linkend="templates-template-name-template-type-versions">Template Versions</link> resource.</p>
   */
  Version?: string;
}

/**
 * @public
 */
export interface UpdateTemplateActiveVersionRequest {
  /**
   * <p>Specifies which version of a message template to use as the active version of the template.</p>
   */
  TemplateActiveVersionRequest: TemplateActiveVersionRequest | undefined;

  /**
   * <p>The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.</p>
   */
  TemplateName: string | undefined;

  /**
   * <p>The type of channel that the message template is designed for. Valid values are: EMAIL, PUSH, SMS, and VOICE.</p>
   */
  TemplateType: string | undefined;
}

/**
 * @public
 */
export interface UpdateTemplateActiveVersionResponse {
  /**
   * <p>Provides information about an API request or response.</p>
   */
  MessageBody: MessageBody | undefined;
}

/**
 * @public
 * <p>Specifies the status and settings of the voice channel for an application.</p>
 */
export interface VoiceChannelRequest {
  /**
   * <p>Specifies whether to enable the voice channel for the application.</p>
   */
  Enabled?: boolean;
}

/**
 * @public
 */
export interface UpdateVoiceChannelRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>Specifies the status and settings of the voice channel for an application.</p>
   */
  VoiceChannelRequest: VoiceChannelRequest | undefined;
}

/**
 * @public
 */
export interface UpdateVoiceChannelResponse {
  /**
   * <p>Provides information about the status and settings of the voice channel for an application.</p>
   */
  VoiceChannelResponse: VoiceChannelResponse | undefined;
}

/**
 * @public
 */
export interface UpdateVoiceTemplateRequest {
  /**
   * <p>Specifies whether to save the updates as a new version of the message template. Valid values are: true, save the updates as a new version; and, false, save the updates to (overwrite) the latest existing version of the template.</p> <p>If you don't specify a value for this parameter, Amazon Pinpoint saves the updates to (overwrites) the latest existing version of the template. If you specify a value of true for this parameter, don't specify a value for the version parameter. Otherwise, an error will occur.</p>
   */
  CreateNewVersion?: boolean;

  /**
   * <p>The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.</p>
   */
  TemplateName: string | undefined;

  /**
   * <p>The unique identifier for the version of the message template to update, retrieve information about, or delete. To retrieve identifiers and other information for all the versions of a template, use the <link  linkend="templates-template-name-template-type-versions">Template Versions</link> resource.</p> <p>If specified, this value must match the identifier for an existing template version. If specified for an update operation, this value must match the identifier for the latest existing version of the template. This restriction helps ensure that race conditions don't occur.</p> <p>If you don't specify a value for this parameter, Amazon Pinpoint does the following:</p> <ul><li><p>For a get operation, retrieves information about the active version of the template.</p></li> <li><p>For an update operation, saves the updates to (overwrites) the latest existing version of the template, if the create-new-version parameter isn't used or is set to false.</p></li> <li><p>For a delete operation, deletes the template, including all versions of the template.</p></li></ul>
   */
  Version?: string;

  /**
   * <p>Specifies the content and settings for a message template that can be used in messages that are sent through the voice channel.</p>
   */
  VoiceTemplateRequest: VoiceTemplateRequest | undefined;
}

/**
 * @public
 */
export interface UpdateVoiceTemplateResponse {
  /**
   * <p>Provides information about an API request or response.</p>
   */
  MessageBody: MessageBody | undefined;
}

/**
 * @public
 * <p>Verify OTP message request.</p>
 */
export interface VerifyOTPMessageRequestParameters {
  /**
   * <p>The destination identity to send OTP to.</p>
   */
  DestinationIdentity: string | undefined;

  /**
   * <p>The OTP the end user provided for verification.</p>
   */
  Otp: string | undefined;

  /**
   * <p>The reference identifier provided when the OTP was previously sent.</p>
   */
  ReferenceId: string | undefined;
}

/**
 * @public
 */
export interface VerifyOTPMessageRequest {
  /**
   * <p>The unique ID of your Amazon Pinpoint application.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>Verify OTP message request.</p>
   */
  VerifyOTPMessageRequestParameters: VerifyOTPMessageRequestParameters | undefined;
}

/**
 * @public
 * <p>Verify OTP Message Response.</p>
 */
export interface VerificationResponse {
  /**
   * <p>Specifies whether the OTP is valid or not.</p>
   */
  Valid?: boolean;
}

/**
 * @public
 */
export interface VerifyOTPMessageResponse {
  /**
   * <p>Verify OTP Message Response.</p>
   */
  VerificationResponse: VerificationResponse | undefined;
}
