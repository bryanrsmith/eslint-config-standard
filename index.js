module.exports = {
	"extends": "airbnb/base",

	"parserOptions": {
		"ecmaFeatures": {
			"experimentalObjectRestSpread": true
		}
	},

	"plugins": [
		"prefer-object-spread"
	],

	"rules": {
		"indent": [2, "tab"],
		"no-param-reassign": 0,
		"no-use-before-define": 0,
		"guard-for-in": 0,
		"id-length": 0,
		"no-console": 0,
		"max-len": 0,
		"new-cap": 0,
		"quote-props": "consistent",
		"array-bracket-spacing": [2, "always", {
			"objectsInArrays": false,
			"arraysInArrays": false
		}],
		"object-curly-spacing": [2, "always", {
			"objectsInObjects": false,
			"arraysInObjects": true
		}],
		"prefer-object-spread/prefer-object-spread": 2,
	}
};
