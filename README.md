
## Coding best practices

- [x] Shared module
- [x] Lazy loading / Deep-linking
- [x] Unit and e2e tests
- [x] Continuous integration
- [x] [shorten TypeScript Imports using custom namespace](#typescript-path-mapping)
- [x] [Documentation generation using Compodoc](#documentation-generation-using-compodoc)
- [x] [Unit testing and end-to-end (e2e)](#unit-testing-and-end-to-end-e2e)
- [] Continuous integration with Travis CI(#continuous-integration-with-travis-ci)
  - [github.com/angular/angular-cli: stories continuous integration](https://github.com/angular/angular-cli/wiki/stories-continuous-integration)
  - [Ionic project: Continuous Integration with Travis for gh-pages](https://medium.com/@hamidihamza/ionic-project-continuous-integration-with-travis-for-gh-pages-3275edaac6a0)
  - [continuous integration | angular cli + firebase + travis ci](https://houssein.me/continuous-integration-angular-firebase-travisci)
  - [Continuous everything with Angular, Travis CI, Firebase and Greenkeeper](https://medium.com/@jamzi/continuous-everything-with-angular-travis-ci-firebase-and-greenkeeper-6656543bd826)
  - [Continuous Integration for Angular Projects with TravisCI](https://moduscreate.com/blog/continuous-integration-angular-projects-travisci/)
  - [Continuous Deployment for Ionic 2 to Firebase Hosting](https://guillaumeroy.xyz/2017/02/23/continous-deployment-ionic2-firebase-hosting/)
- [] Automated dependency updates
  - [Dependabot](https://dependabot.com/)
  - [Greenkeeper](https://greenkeeper.io/)
- [Style CI]
  - `npm run lint` [Using Travis-CI to Run Your Ionic Unit Tests](http://kensodemann.github.io/angular/tdd/testing/ionic/2017/05/22/ionic-travis-ci.html)

## Coding best practices

- [] Shared module
  - [meumobi: Creating a shared module for Ionic App](http://meumobi.github.io/ionic/2017/08/23/creating-shared-module-ionic.html)
- [] Simple Logging Service
  - [A simple logging service for Angular 4](https://robferguson.org/blog/2017/09/09/a-simple-logging-service-for-angular-4/)
  - [Angular's github: Add $log like functionality to Angular 2](https://github.com/angular/angular/issues/5458)
- [] Lazy loading / Deep-linking
  - [Ionic blog: Ionic and Lazy Loading Pt 1](https://blog.ionicframework.com/ionic-and-lazy-loading-pt-1/)
  - [Ionic blog: Ionic and Lazy Loading Pt 2](https://blog.ionicframework.com/ionic-and-lazy-loading-pt-2/)
- [] Generate data provider and mockup
  - [Implementing the Master-Detail Pattern in Ionic]()

# Typescript path mapping
An Angular app’s file structure can be relatively deep, making it difficult to figure out where a module lives when importing it. The idea is to make your import paths go from `../../../../` to `@namespace`.
TypeScript compiler supports the declaration of mappings using "paths" property in `tsconfig.json` files. Using [TypeScript path mapping](https://www.typescriptlang.org/docs/handbook/module-resolution.html) make import statements in your Angular app shorter and much more developer-friendly

```
// tsconfig.json in the root dir

{
  "compileOnSave": false,
  "compilerOptions": {

    // omitted...

    "baseUrl": "src",
    "paths": {
      "@core/*": ["app/core/*"],
      "@shared/*": ["app/shared/*"],
      "@items/*": ["app/items/*"]
      "@env/*": ["environments/*"]
    }
  }
}
```

Then instead of 
```
// import from component.ts
import { MyService } from '../../../core/api.service';
```

we can use custom namespace `@core` declared on `tsconfig.json` to use following import:

```
// import from component.ts
import { MyService } from '@core/services/api.service';
```

More [details](https://angularfirebase.com/lessons/shorten-typescript-imports-in-an-angular-project/)