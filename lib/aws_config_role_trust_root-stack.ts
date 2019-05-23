import cdk = require('@aws-cdk/cdk');
import lambda = require('@aws-cdk/aws-lambda')

export class AwsConfigRoleTrustRootStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new lambda.Function(this, 'config-rule-root-trust-lambda',{
      handler: 'index.handler',
      runtime: lambda.Runtime.NodeJS810,
      code: lambda.Code.asset('./function')
    })     
  }
}
