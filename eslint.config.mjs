import withNuxt from "./.nuxt/eslint.config.mjs";
import unocss from "@unocss/eslint-config/flat";
import prettier from "eslint-plugin-prettier/recommended";

export default withNuxt([
  unocss,
  prettier,
  {
    files: ["**/*.vue"],
    rules: {
      "vue/block-lang": ["error", { script: { lang: ["ts", "tsx"] } }],
      "vue/block-order": ["error", { order: ["script", "template", "style"] }],
      "vue/block-tag-newline": "error",
      "vue/component-api-style": ["error", ["script-setup"]],
      "vue/component-name-in-template-casing": "error",
      "vue/component-options-name-casing": "error",
      "vue/custom-event-name-casing": "error",
      "vue/define-emits-declaration": ["error", "type-based"],
      "vue/define-macros-order": [
        "error",
        {
          order: [
            "definePageMeta",
            "defineOptions",
            "defineModal",
            "defineProps",
            "defineEmits",
            "defineSlots",
          ],
          defineExposeLast: true,
        },
      ],
      "vue/define-props-declaration": ["error", "type-based"],
      "vue/enforce-style-attribute": ["error", { allow: ["scoped"] }],
      "vue/match-component-file-name": [
        "error",
        { extensions: ["vue", "tsx"] },
      ],
      "vue/match-component-import-name": "error",
      "vue/next-tick-style": ["error", "promise"],
      "vue/no-duplicate-attr-inheritance": "error",
      "vue/no-empty-component-block": "error",
      "vue/no-multiple-objects-in-class": "error",
      "vue/no-ref-object-reactivity-loss": "error",
      "vue/no-required-prop-with-default": ["error", { autofix: true }],
      "vue/no-reserved-component-names": "error",
      "vue/no-root-v-if": "error",
      "vue/no-template-target-blank": "error",
      "vue/no-unsupported-features": ["error", { version: "^3.5.0" }],
      "vue/no-unused-emit-declarations": "error",
      "vue/no-unused-properties": "error",
      "vue/no-unused-refs": "error",
      "vue/no-use-v-else-with-v-for": "error",
      "vue/no-useless-mustaches": "error",
      "vue/no-useless-v-bind": "error",
      "vue/no-v-text": "error",
      "vue/padding-line-between-blocks": "error",
      "vue/prefer-define-options": "error",
      "vue/prefer-prop-type-boolean-first": "error",
      "vue/prefer-separate-static-class": "error",
      "vue/prefer-true-attribute-shorthand": "error",
      "vue/prefer-use-template-ref": "error",
      "vue/require-direct-export": "error",
      "vue/require-macro-variable-name": "error",
      "vue/require-typed-ref": "error",
      "vue/v-bind-style": [
        "error",
        "shorthand",
        { sameNameShorthand: "always" },
      ],
      "vue/v-for-delimiter-style": "error",
      "vue/v-on-function-call": "error",
      "vue/valid-define-options": "error",
    },
  },
]);
