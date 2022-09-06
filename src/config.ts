import {
  IntegrationInstanceConfigFieldMap,
  IntegrationInstanceConfig,
} from '@jupiterone/integration-sdk-core';

export const instanceConfigFields: IntegrationInstanceConfigFieldMap = {
  wontUse: {
    type: 'string',
  },
};

export interface IntegrationConfig extends IntegrationInstanceConfig {
  wontUse: string;
}

export function validateInvocation() {
  return Promise.resolve();
}
