'use strict';

// external tooling
const postcss = require('postcss');

// internal tooling
const ids = require('./lib/logical-identifiers');

// internal tooling cache
const keys = Object.keys(ids);

// plugin
module.exports = postcss.plugin('postcss-identifiers', () => (root) => {
	root.walkDecls(
		(decl) => {
			if (declHasIdentifier(decl)) {
				// get id, values, and value keys of declaration
				const id        = ids[decl.prop];
				const values    = getIdentifierWords(decl);
				const valueKeys = Object.keys(values);

				// test whether the values are valid
				const valuesAreValid = valueKeys.every(
					(key) => key in id && values[key].length === 1 || values[key].length === id[key].length
				);

				if (valuesAreValid) {
					// append unique declarations from the valid values
					const uniqueDecls = {};

					decl.after(
						valueKeys.reduce(
							(decls, key) => {
								// get the value array
								const value = values[key];

								return decls.concat(
									id[key].map(
										(prop, index) => {
											const uniqueDecl = uniqueDecls[prop] = uniqueDecls[prop] || decl.clone();

											uniqueDecl.prop = prop;
											uniqueDecl.value = value[index] || value[0];

											return uniqueDecl;
										}
									)
								);
							},
							[]
						).filter(
							(uniqueDecl, index, array) => array.indexOf(uniqueDecl) === index
						)
					);

					decl.remove();
				}
			}
		}
	);

	return root;
});

function declSupportsIdentifiers(decl) {
	return keys.indexOf(decl.prop) !== -1;
}

function declHasIdentifier(decl) {
	const matchAnyIdentifier = /(^|\s)\[(.*)\](\s|$)/;

	return declSupportsIdentifiers(decl) && matchAnyIdentifier.test(decl.value)
}

function getIdentifierWords(decl) {
	// ...
	const object = {};
	let values = [];
	let key = '+';

	// ...
	const matchWord = /^\[(.*)\]$/;

	// ...
	postcss.list.space(decl.value).forEach(
		(value) => {
			const match = value.match(matchWord);

			if (match) {
				values = object[key = match[1]] = [];
			} else if (key) {
				values.push(value);
			} else {
				// probably warn the user
			}
		}
	);

	// ...
	return object;
}
