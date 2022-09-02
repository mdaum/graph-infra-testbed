import {
  IntegrationInstanceConfigFieldMap,
  IntegrationInstanceConfig,
} from '@jupiterone/integration-sdk-core';

export const instanceConfigFields: IntegrationInstanceConfigFieldMap = {};

export type IntegrationConfig = IntegrationInstanceConfig;

export function validateInvocation() {
  return Promise.resolve();
}
