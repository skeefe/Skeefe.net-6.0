//Moved from index.htm.
System.import('app').then(null, console.error.bind(console));

(function (global) {
	System.config({
		paths: {
			// paths serve as alias
			'npm:': '/assets/scripts/vendor/' //assets/scripts/vendor/
		},
		// map tells the System loader where to look for things
		map: {
			// our app is within the app folder
			app: '/app', //app
			// angular bundles
			'@angular/core': 'npm:@angular/core/bundles/core.umd.js',
			'@angular/common': 'npm:@angular/common/bundles/common.umd.js',
			'@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
			'@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
			'@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
			'@angular/http': 'npm:@angular/http/bundles/http.umd.js',
			'@angular/router': 'npm:@angular/router/bundles/router.umd.js',
			'@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
			// other libraries
			//'angular-in-memory-web-api': 'npm:angular-in-memory-web-api',// Not used
			'rxjs': 'npm:rxjs'
			
		},
		// packages tells the System loader how to load when no filename and/or no extension
		packages: {
			app: {
				main: '/main.js',
				defaultExtension: 'js'
			},
			/*
			'angular-in-memory-web-api': { // Not used
				main: './index.js',
				defaultExtension: 'js'
			},
			*/
			rxjs: {
				defaultExtension: 'js'
			}
		}
	});
})(this);