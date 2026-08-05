import { SITE_CONFIG } from '../config/siteConfig';
import { ModelInfo } from '../types';

export const MODELS_DATA: ModelInfo[] = SITE_CONFIG.models;

export const DEFAULT_MODEL_ID = MODELS_DATA[0].id;

export const findModel = (modelId: string): ModelInfo => {
  return MODELS_DATA.find((model) => model.id === modelId) ?? MODELS_DATA[0];
};
