import {
  IntegrationInstanceConfigFieldMap,
  IntegrationInstanceConfig,
} from '@jupiterone/integration-sdk-core';

export const instanceConfigFields: IntegrationInstanceConfigFieldMap = {};

export interface IntegrationConfig extends IntegrationInstanceConfig {}

export function validateInvocation() {
  return Promise.resolve();
}
