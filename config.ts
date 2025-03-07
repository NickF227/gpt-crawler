import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://support.regal.ai/hc/en-us",
  match: "https://support.regal.ai/hc/en-us/articles/**",
  maxPagesToCrawl: 300,
  outputFileName: "output.json",
  maxTokens: 2000000,
};
