This template creates a baseline structure for an Angular 2 application.

Update "MyApp" with the application name.
Update "FeatureAa, feature-aa", "FeatureBb, feature-bb", and "FeatureCc, feature-cc" with the feature names.

The entry point is index.html, which imports the app from main.js.
All other code is in the app foloder structure, which consists of...
	- The app component, module, and routing.
	- Feature folders for each feature.
	- A shared folder with shared functionality, including a simple Pipe example.

Routing is configured for 3 root-level features, which are accessible via a navbar.

** If the files in a feature folder become too numerous, subfolders should be established.
** If subfolders are established for a feature, also include a shared subfolder for functionality shared within that feature.
** See this link for more on app structure: https://angular.io/docs/ts/latest/guide/style-guide.html#!#app-structure-and-angular-modules
