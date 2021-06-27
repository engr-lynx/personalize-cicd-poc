import { Construct, Stage, StageProps } from '@aws-cdk/core';
import { SampleStack } from './sample-stack';

/**
 * Deployable unit of entire architecture
 */
export class CloudDeployStage extends Stage {

  constructor(scope: Construct, id: string, props?: StageProps) {
    super(scope, id, props);
    new SampleStack(this, 'Sample');
  }

}
