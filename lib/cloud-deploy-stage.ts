import { Construct, Stage, StageProps } from '@aws-cdk/core';
import { EmptyStack } from './empty-stack';

/**
 * Deployable unit of entire architecture
 */
export class CloudDeployStage extends Stage {

  constructor(scope: Construct, id: string, props?: StageProps) {
    super(scope, id, props);
    new EmptyStack(this, 'Sample');
  }

}
