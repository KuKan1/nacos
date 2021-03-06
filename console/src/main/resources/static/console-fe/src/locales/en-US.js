/*
 * Copyright 1999-2018 Alibaba Group Holding Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *      http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const I18N_CONF = {
  Header: {
    home: 'HOME',
    docs: 'DOCS',
    blog: 'BLOG',
    community: 'COMMUNITY',
    languageSwitchButton: '中',
  },
  MainLayout: {
    nacosName: 'NACOS',
    nacosVersion: '0.6.1',
    doesNotExist: 'The page you visit does not exist',
    configurationManagementVirtual: 'ConfigManagement',
    configurationManagement: 'Configurations',
    configdetail: 'Configuration Details',
    configsync: 'Synchronize Configuration',
    configeditor: 'Edit Configuration',
    newconfig: 'Create Configuration',
    historyRollback: 'Historical Versions',
    configRollback: 'Configuration Rollback',
    historyDetail: 'History Details',
    listeningToQuery: 'Listening Query',
    serviceManagementVirtual: 'ServiceManagement',
    serviceManagement: 'Service List',
    serviceDetail: 'Service Details',
    namespace: 'Namespace',
  },
  NameSpace: {
    namespace: 'Namespaces',
    prompt: 'Notice',
    namespaceDetails: 'Namespace details',
    namespaceName: 'Name',
    namespaceID: 'ID:',
    configuration: 'Number of Configurations',
    description: 'Description',
    removeNamespace: 'Remove the namespace',
    confirmDelete: 'Sure you want to delete the following namespaces?',
    configurationManagement: 'Configurations',
    removeSuccess: 'Remove the namespace success',
    deletedSuccessfully: 'Deleted successfully',
    deletedFailure: 'Delete failed',
    namespaceDelete: 'Delete',
    details: 'Details',
    edit: 'Edit',
    namespacePublic: 'public(to retain control)',
    pubNoData: 'No results found.',
    namespaceAdd: 'Create Namespace',
    namespaceNames: 'Namespaces',
    namespaceNumber: 'Namespace ID',
    namespaceOperation: 'Actions',
  },
  ServiceList: {
    serviceList: 'Service List',
    serviceName: 'Service Name',
    serviceNamePlaceholder: 'Enter Service Name',
    query: 'Search',
    pubNoData: 'No results found.',
    columnServiceName: 'Service Name',
    columnClusterCount: 'Cluster Count',
    columnIpCount: 'Instance Count',
    columnHealthyInstanceCount: 'Healthy Instance Count',
    operation: 'Operation',
    detail: 'Details',
    deleteAction: 'Delete',
    prompt: 'Confirm',
    promptDelete: 'Do you want to delete the service?',
    create: 'Create Service',
  },
  EditClusterDialog: {
    updateCluster: 'Update Cluster',
    checkType: 'Check Type',
    checkPort: 'Check Port',
    useIpPortCheck: 'Use port of IP',
    checkPath: 'Check Path',
    checkHeaders: 'Check Headers',
    metadata: 'Metadata',
  },
  ServiceDetail: {
    serviceDetails: 'Service Details',
    back: 'Back',
    editCluster: 'Edit Cluster',
    cluster: 'Cluster',
    metadata: 'Metadata',
    healthCheckPattern: 'Health check pattern',
    protectThreshold: 'Protect Threshold',
    serviceName: 'Service Name',
    editService: 'Edit Service',
  },
  EditServiceDialog: {
    createService: 'Create Service',
    updateService: 'Edit Service',
    serviceName: 'Service Name',
    metadata: 'Metadata',
    protectThreshold: 'Protect Threshold',
    healthCheckPattern: 'Health check pattern',
    healthCheckPatternService: 'Service',
    healthCheckPatternClient: 'Client',
    healthCheckPatternNone: 'None',
  },
  InstanceTable: {
    operation: 'Operation',
    port: 'Port',
    weight: 'Weight',
    healthy: 'Healthy',
    metadata: 'Metadata',
    editor: 'Edit',
    offline: 'Offline',
    online: 'Online',
  },
  EditInstanceDialog: {
    port: 'Port',
    weight: 'Weight',
    metadata: 'Metadata',
    updateInstance: 'Update Instance',
    whetherOnline: 'Whether Online',
  },
  ListeningToQuery: {
    success: 'Success',
    failure: 'Failure',
    configuration: 'Configuration',
    pubNoData: 'No results found.',
    listenerQuery: 'Listening Query',
    queryDimension: 'Dimension',
    pleaseEnterTheDataId: 'Enter Data ID',
    dataIdCanNotBeEmpty: 'Data ID cannot be empty',
    pleaseInputGroup: 'Enter Group',
    groupCanNotBeEmpty: 'Group cannot be empty',
    pleaseInputIp: 'Enter IP',
    query: 'Search',
    queryResultsQuery: 'Search Results: Found',
    articleMeetRequirementsConfiguration: 'configuration items.',
  },
  HistoryRollback: {
    details: 'Details',
    rollback: 'Roll Back',
    pubNoData: 'No results found.',
    toConfigure: 'Historical Versions (Configuration record is retained for 30 days.)',
    dataId: 'Enter Data ID',
    dataIdCanNotBeEmpty: 'Data ID cannot be empty',
    group: 'Enter Group',
    groupCanNotBeEmpty: 'Group cannot be empty',
    query: 'Search',
    queryResult: 'Search Results: Found',
    articleMeet: 'configuration items.',
    lastUpdateTime: 'Last Modified At',
    operation: 'Operation',
  },
  HistoryDetail: {
    historyDetails: 'History Details',
    update: 'Update',
    insert: 'Insert',
    deleteAction: 'Delete',
    recipientFrom: 'Collapse',
    moreAdvancedOptions: 'Advanced Options',
    home: 'Application:',
    actionType: 'Action Type:',
    configureContent: 'Configuration Content:',
    back: 'Back',
  },
  DashboardCard: {
    importantReminder0: 'Important reminder',
    viewDetails1: 'view details',
  },
  ConfigurationManagement: {
    questionnaire2: 'questionnaire',
    ad:
      'a ACM front-end monitoring questionnaire, the time limit to receive Ali cloud voucher details shoved stamp: the',
    noLongerDisplay4: 'no longer display:',
    removeConfiguration: 'Delete Configuration',
    sureDelete: 'Are you sure you want to delete the following configuration?',
    environment: 'Region:',
    configurationManagement: 'Configurations',
    details: 'Details',
    sampleCode: 'Code Example',
    edit: 'Edit',
    deleteAction: 'Delete',
    more: 'More',
    version: 'Historical Versions',
    listenerQuery: 'Configuration Listening Query',
    failedEntry: 'Failed Entry:',
    successfulEntry: 'Successful Entry:',
    unprocessedEntry: 'Unprocessed Entry:',
    pubNoData: 'No results found.',
    configurationManagement8: 'configuration management',
    queryResults: 'Search Results: Found',
    articleMeetRequirements: 'configuration items',
    fuzzyd: 'Enter Data ID',
    fuzzyg: 'Enter Group',
    query: 'Search',
    advancedQuery9: 'Advanced Query',
    application0: 'Application:',
    app1: 'Enter App Name\n',
    tags: 'Tags:',
    pleaseEnterTag: 'Enter Tag',
    application: 'Application',
    operation: 'Operation',
  },
  NewConfig: {
    newListingMain: 'Create Configuration',
    newListing: 'Create Configuration',
    publishFailed: 'Publish failed. Make sure parameters are entered correctly.',
    doNotEnte: 'Illegal characters not allowed',
    newConfig: 'Data ID cannot be empty.',
    dataIdIsNotEmpty: 'Data ID cannot exceed 255 characters in length',
    groupPlaceholder: 'Enter your group name',
    moreAdvanced: 'Group cannot be empty',
    groupNotEmpty: 'Group ID cannot exceed 127 characters in length',
    annotation:
      'Notice: You are going to add configuration to a new group, please make sure that the version of Pandora which clients are using is higher than 3.4.0, otherwise this configuration may be unreadable to clients.',
    dataIdLength: 'Collapse',
    collapse: 'Advanced Options',
    tags: 'Tags:',
    pleaseEnterTag: 'Enter Tag',
    groupIdCannotBeLonger: 'Application:',
    description: 'Description:',
    targetEnvironment: 'Format:',
    configurationFormat: 'Configuration Content',
    configureContentsOf: 'Press F1 to view in full screen',
    fullScreen: 'Press Esc to exit',
    escExit: 'Publish',
    release: 'Back',
  },
};

export default I18N_CONF;
