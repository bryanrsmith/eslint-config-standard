module.exports = {
	rules: {
		"strict": [2, "never"], // babel inserts it

		// variables
		"no-shadow": 0,
		"no-shadow-restricted-names": 2,
		"no-undef": 2,
		"no-unused-vars": [2, {
			"vars": "local",
			"args": "after-used"
		}],
		"no-use-before-define": 0,

		// possible errors
		"comma-dangle": [2, "always-multiline"],
		"no-cond-assign": [2, "always"],
		"no-console": 1,
		"no-debugger": 1,
		"no-alert": 1,
		"no-constant-condition": 1,
		"no-dupe-keys": 2,
		"no-duplicate-case": 2,
		"no-empty": 2,
		"no-ex-assign": 2,
		"no-extra-boolean-cast": 0,
		"no-extra-semi": 2,
		"no-func-assign": 2,
		"no-inner-declarations": 2,
		"no-invalid-regexp": 2,
		"no-irregular-whitespace": 2,
		"no-obj-calls": 2,
		"no-sparse-arrays": 2,
		"no-unreachable": 2,
		"use-isnan": 2,
		"block-scoped-var": 2,

		// best practices
		"consistent-return": 2,
		"curly": [2, "multi-line"],
		"default-case": 2,
		"dot-notation": [2, {
			"allowKeywords": true
		}],
		"eqeqeq": [2, "smart"],
		"guard-for-in": 0,
		"no-caller": 2,
		"no-else-return": 2,
		"no-eq-null": 0,
		"no-eval": 2,
		"no-extend-native": 2,
		"no-extra-bind": 2,
		"no-fallthrough": 2,
		"no-floating-decimal": 2,
		"no-implied-eval": 2,
		"no-lone-blocks": 2,
		"no-loop-func": 2,
		"no-multi-str": 2,
		"no-native-reassign": 2,
		"no-new": 2,
		"no-new-func": 2,
		"no-new-wrappers": 2,
		"no-octal": 2,
		"no-octal-escape": 2,
		"no-param-reassign": 0,
		"no-proto": 2,
		"no-redeclare": 2,
		"no-return-assign": 2,
		"no-script-url": 2,
		"no-self-compare": 2,
		"no-sequences": 2,
		"no-throw-literal": 2,
		"no-with": 2,
		"radix": 2,
		"wrap-iife": [2, "any"],
		"yoda": 2,

		// style
		"indent": [2, "tab"],
		"brace-style": [2, "1tbs"],
		"quotes": [
			2, "single", "avoid-escape"
		],
		"camelcase": [2, {
			"properties": "never"
		}],
		"comma-spacing": [2, {
			"before": false,
			"after": true
		}],
		"comma-style": [2, "last"],
		"eol-last": 2,
		"func-names": 1,
		"key-spacing": [2, {
			"beforeColon": false,
			"afterColon": true
		}],
		"new-cap": [2, {
			"newIsCap": true
		}],
		"no-multiple-empty-lines": [2, {
			"max": 2
		}],
		"no-nested-ternary": 2,
		"no-new-object": 2,
		"no-spaced-func": 2,
		"no-trailing-spaces": 2,
		"no-extra-parens": [2, "functions"],
		"no-underscore-dangle": 0,
		"one-var": [2, "never"],
		"padded-blocks": [2, "never"],
		"semi": [2, "always"],
		"semi-spacing": [2, {
			"before": false,
			"after": true
		}],
		"space-after-keywords": 2,
		"space-before-blocks": 2,
		"space-before-function-paren": [2, "never"],
		"space-infix-ops": 2,
		"space-return-throw-case": 2,
		"spaced-comment": [2, "always"],
		"object-curly-spacing": [2, "always", {
			"objectsInObjects": false,
			"arraysInObjects": false
		}],
		"array-bracket-spacing": [2, "always", {
			"objectsInArrays": false,
			"arraysInArrays": false
		}],

		// es6
		"arrow-body-style": [2, "as-needed"],
		"arrow-spacing": 2,
		"constructor-super": 2,
		"no-arrow-condition": 2,
		"no-class-assign": 2,
		"no-const-assign": 2,
		"no-dupe-class-members": 2,
		"no-this-before-super": 2,
		"no-var": 2,
		"prefer-const": 0,
		"object-shorthand": 2,
		"prefer-spread": 2,
		"require-yield": 2
	}
};
