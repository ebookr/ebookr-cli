var expect = require('chai').expect,
		child_process = require('child_process');

describe('When getting version', function () {
	var packageVersion;

	beforeEach(function () {
		packageVersion = require('../package').version;
	});

	it('should fetch version from package', function (done) {
		child_process.exec('node bin/ebookr --version', function (error, stdout) {
			expect(stdout).to.match(/ebookr-cli v/);
			done();
		});
	});
});