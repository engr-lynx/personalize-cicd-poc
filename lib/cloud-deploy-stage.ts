import { Construct, Stage, StageProps } from '@aws-cdk/core';
import { EmptyStack } from './empty-stack';

interface CloudDeployProps extends StageProps {
  cacheBucketArn?: string,
}

/**
 * Deployable unit of entire architecture
 */
export class CloudDeployStage extends Stage {

  constructor(scope: Construct, id: string, cloudDeployProps?: CloudDeployProps) {
    super(scope, id, cloudDeployProps);
    new EmptyStack(this, 'Sample');
  }

}
