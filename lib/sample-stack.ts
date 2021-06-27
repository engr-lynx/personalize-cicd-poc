import { Construct, Stack, StackProps } from '@aws-cdk/core';
import { PolicyStatement, Effect } from '@aws-cdk/aws-iam';

export class SampleStack extends Stack {

  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);
    new PolicyStatement({
      effect: Effect.DENY,
    });
  }

}
