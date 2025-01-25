import { danielwaltz } from "@danielwaltz/eslint-config";
import { withNuxt } from "./.nuxt/eslint.config.mjs";

// @ts-expect-error `@nuxt/eslint` needs newest `eslint-flat-config-utils` version
export default withNuxt(danielwaltz());
