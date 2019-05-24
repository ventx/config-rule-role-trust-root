import cdk = require('@aws-cdk/cdk');
import lambda = require('@aws-cdk/aws-lambda')
import config = require('@aws-cdk/aws-config')

export class AwsConfigRoleTrustRootStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const ruleFunction = new lambda.Function(this, 'config-rule-root-trust-lambda', {
      handler: 'index.handler',
      runtime: lambda.Runtime.NodeJS810,
      code: lambda.Code.asset('./function')
    })

    new config.CfnConfigRule(this, 'config-role', {
      source: {
        owner: 'CUSTOM_LAMBDA',
        sourceIdentifier: ruleFunction.functionArn,
        sourceDetails: [
          {
            eventSource: 'aws.config',
            messageType: 'ConfigurationItemChangeNotification'
          }
        ]
      }})
  }
}