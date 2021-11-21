import * as cdk from '@aws-cdk/core';
import * as AmplifyHelpers from '@aws-amplify/cli-extensibility-helper';
import * as iam from '@aws-cdk/aws-iam';
import * as sns from '@aws-cdk/aws-sns';
// import * as subs from '@aws-cdk/aws-sns-subscriptions';


export class cdkStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps, amplifyResourceProps?: AmplifyHelpers.AmplifyResourceProps) {
    super(scope, id, props);
    /* Do not remove - Amplify CLI automatically injects the current deployment environment in this input parameter */
    new cdk.CfnParameter(this, 'env', {
      type: 'String',
      description: 'Current Amplify CLI env name',
    });
    /* AWS CDK code goes here - learn more: https://docs.aws.amazon.com/cdk/latest/guide/home.html */
    

    const amplifyResourceInfo = amplifyResourceProps;
    // create sns topic
    
    const snsTopicResourceNamePrefix = `sns-topic-${amplifyResourceInfo.resourceName}`;
    const topic = new sns.Topic(this, 'sns-topic', {
      topicName: `${snsTopicResourceNamePrefix}-${cdk.Fn.ref('env')}`
    });


    // TODO subscribe queue to topic
    
    // topic.addSubscription(new subs.SqsSubscription(queue));
    // new cdk.CfnOutput(this, 'snsTopicArn', {
    //   value: topic.topicArn,
    //   description: 'The arn of the SNS topic',
    // });


    // Adding IAM role to the custom stack 

    const roleResourceNamePrefix = `CustomRole-${amplifyResourceInfo.resourceName}`;
    
    const role = new iam.Role(this, 'CustomRole', {
      assumedBy: new iam.AccountRootPrincipal(),
      roleName: `${roleResourceNamePrefix}-${cdk.Fn.ref('env')}`
    }); 

    // Adding policy to the IAM role
  
    role.addToPolicy(
      new iam.PolicyStatement({
        actions: ['*'],
        resources: [topic.topicArn],
      }),
    );
   
  }
}