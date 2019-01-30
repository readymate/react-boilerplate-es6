module.exports = {
	transform: {
		'^.+\\.jsx?$': 'babel-jest'
	},
	verbose: true,
	setupFiles: ['./test/setup-tests.js'],
	testRegex: '(src/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?)$',
	coverageDirectory: 'coverage',
	coverageReporters: [
		'lcov', // html report
		'text' // report in console
	],
	collectCoverageFrom: [
		'src/**/*.{js,jsx}',
		'!**/*._story.*',
		'!**/*.story.*',
		'!src/index.*',
		'!src/store/index.*',
		'!src/containers/Transactions/IcoChart.jsx',
		'!src/containers/Transactions/IcoList.jsx',
		'!src/containers/Transactions/Transactions.jsx',
		'!src/__playground/*'
	],
	// uncomment the following to make tests fail if coverage goals are not met
	// coverageThreshold: {
	//   global: {
	//     branches: 80,
	//     functions: 80,
	//     statements: 80,
	//     line: 80
	//   }
	// },
	moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
	// static files are actually mocked
	moduleNameMapper: {
		'\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
			'<rootDir>/test/__mocks__/fileMock.js',
		'\\.(css|scss)$': 'identity-obj-proxy'
	}
};
