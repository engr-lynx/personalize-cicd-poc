import { Construct, Stage, StageProps } from '@aws-cdk/core';
import { PipelineCacheStack } from './pipeline-cache-stack';

/**
 * Deployable unit of entire architecture
 */
export class CloudDeployStage extends Stage {

  constructor(scope: Construct, id: string, props?: StageProps) {
    super(scope, id, props);
    const pipelineCache = new PipelineCacheStack(this, 'PipelineCache');
  }

}
