import * as cdk from '@aws-cdk/core';
import * as AmplifyHelpers from '@aws-amplify/cli-extensibility-helper';
import * as iam from '@aws-cdk/aws-iam';
import * as sqs from '@aws-cdk/aws-sqs';

export class cdkStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps, amplifyResourceProps?: AmplifyHelpers.AmplifyResourceProps) {
    super(scope, id, props);
    /* Do not remove - Amplify CLI automatically injects the current deployment environment in this input parameter */
    new cdk.CfnParameter(this, 'env', {
      type: 'String',
      description: 'Current Amplify CLI env name',
    });

    // Set up an SQS queue

    const amplifyResourceInfo = amplifyResourceProps;
    const sqsQueueResourceNamePrefix = `sqs-queue-${amplifyResourceInfo.resourceName}`;
    const queue = new sqs.Queue(this, 'sqs-queue', {
      queueName: `${sqsQueueResourceNamePrefix}-${cdk.Fn.ref('env')}`
    });

    // Adding IAM role to the custom stack 
  
    const roleResourceNamePrefix = `CustomRole-${amplifyResourceInfo.resourceName}`;
    
    const role = new iam.Role(this, 'CustomRole', {
      assumedBy: new iam.AccountRootPrincipal(),
      roleName: `${roleResourceNamePrefix}-${cdk.Fn.ref('env')}`
    }); 


    // Example 3: Adding policy to the IAM role
    // TODO add policy and build
    
    // role.addToPolicy(
    //   new iam.PolicyStatement({
    //     actions: ['*'],
    //     resources: [topic.topicArn],
    //   }),
    // );
    

    
  }
}