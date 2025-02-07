import { danielwaltz } from "@danielwaltz/eslint-config";
import { withNuxt } from "./.nuxt/eslint.config.mjs";

export default withNuxt(danielwaltz());
