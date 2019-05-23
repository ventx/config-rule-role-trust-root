#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/cdk');
import { AwsConfigRoleTrustRootStack } from '../lib/aws_config_role_trust_root-stack';

const app = new cdk.App();
new AwsConfigRoleTrustRootStack(app, 'AwsConfigRoleTrustRootStack');
