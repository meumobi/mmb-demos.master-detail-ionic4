# Coding best practices
- [x] Lazy load pages and deep-linking
  - [Angular Firebase: How to Lazy Load Components in Angular 4 in Three Steps](https://angularfirebase.com/lessons/how-to-lazy-load-components-in-angular-4-in-three-steps/)
- [x] Shared and Core modules
  - [6 Best Practices & Pro Tips when using Angular CLI](https://medium.com/@tomastrajan/6-best-practices-pro-tips-for-angular-cli-better-developer-experience-7b328bc9db81)
- [x] Folder structure: module  by feature
  - [How to define a highly scalable folder structure for your Angular project](https://itnext.io/choosing-a-highly-scalable-folder-structure-in-angular-d987de65ec7)
- [ ] Unit and e2e tests
- [ ] [Continuous integration with Travis CI](#continuous-integration-with-travis-ci)
- [x] [Shorten TypeScript Imports using custom namespace](#typescript-path-mapping)
- [ ] [Automated dependency updates with Greenkeeper](#automated-dependency-updates-with-greenkeeper)

# Implement Stacked Master-Detail Pattern
- [x] Interface
  - [When to use Interface and Model in TypeScript / Angular2](https://stackoverflow.com/questions/37652801/when-to-use-interface-and-model-in-typescript-angular2)
- [x] Back navigation
  - [Ion-back-button](https://beta.ionicframework.com/docs/api/back-button/)
- [x] Routing and navigation
  - [Angular Firebase: Ionic 4 Routing and Navigation Guide](https://angularfirebase.com/lessons/ionic-4-routing-and-navigation-guide/)
- [ ] Generate data provider and mockup
  - [Implementing the Master-Detail Pattern in Ionic]()

## Furthermore
- [Baljeet Singh]: [Creating News Application With Ionic 4 and Angular](https://www.youtube.com/watch?v=NJ9C7iY9350)

# REST API integration with Auth Based Token
- [x] HttpClient
  - [Angular.io: Httpclient](https://angular.io/guide/http#httpclient)
- [x] HttpInterceptor
  - [Ionic Academy: Authorisation Headers with Ionic using HTTP Interceptor and Storage v3](https://ionicacademy.com/ionic-http-interceptor/)
  - [Angular.io: Intercepting requests and responses](https://angular.io/guide/http#intercepting-requests-and-responses)
    - [Set default headers](https://angular.io/guide/http#set-default-headers)
    - https://stackblitz.com/angular/dyommnvvmry

## Backlog
- Caching Http response with Etag
  - [Angular.io: Caching](https://angular.io/guide/http#caching)
    - https://stackblitz.com/angular/dyommnvvmry
  - Testing HTTP requests
    - [Angular.io: testing HTTP requests](https://angular.io/guide/http#testing-http-requests)

# Login Flow with Angular Router and and Guards

## Furthermore
- [Building a Basic Ionic 4 Login Flow with Angular Router](https://www.youtube.com/watch?v=z3pDqnuyzZ4)

## Backlog
- [Angular 2 - Redirect to Previous URL after Login with Auth Guard](http://jasonwatmore.com/post/2016/12/08/angular-2-redirect-to-previous-url-after-login-with-auth-guard)

# PWA
- https://github.com/johnpapa/pwa-angular
- https://angular.io/guide/service-worker-intro
- https://moduscreate.com/blog/creating-progressive-web-apps-using-angular/
- https://medium.com/@nsmirnova/creating-pwa-with-angular-5-part-2-progressifying-the-application-449e3a706129

# Full examples of “Well implemented” Angular Apps
- [Vlado Tesanovic]: [The PRPL Pattern for Progressive Web Applications using Angular 6+](https://itnext.io/the-prpl-pattern-for-progressive-web-applications-using-angular-6-f7237b7dc2a7)
- [Matt Raible]: [Angular and Angular CLI Tutorial: Search and edit App](http://gist.asciidoctor.org/?github-mraible%2Fng2-demo%2F%2FREADME.adoc)
- [Indermohan Singh]: [Ionic 4 Beta: What’s New and Building a Sample App](https://auth0.com/blog/ionic-4-beta-whats-new-and-building-a-sample-app/)

## Continuous integration with Travis CI
- [github.com/angular/angular-cli: stories continuous integration](https://github.com/angular/angular-cli/wiki/stories-continuous-integration)
- [Ionic project: Continuous Integration with Travis for gh-pages](https://medium.com/@hamidihamza/ionic-project-continuous-integration-with-travis-for-gh-pages-3275edaac6a0)
- [continuous integration | angular cli + firebase + travis ci](https://houssein.me/continuous-integration-angular-firebase-travisci)
- [Continuous everything with Angular, Travis CI, Firebase and Greenkeeper](https://medium.com/@jamzi/continuous-everything-with-angular-travis-ci-firebase-and-greenkeeper-6656543bd826)
- [Continuous Integration for Angular Projects with TravisCI](https://moduscreate.com/blog/continuous-integration-angular-projects-travisci/)
- [Continuous Deployment for Ionic 2 to Firebase Hosting](https://guillaumeroy.xyz/2017/02/23/continous-deployment-ionic2-firebase-hosting/)
- `npm run lint` [Using Travis-CI to Run Your Ionic Unit Tests](http://kensodemann.github.io/angular/tdd/testing/ionic/2017/05/22/ionic-travis-ci.html)

## Automated dependency updates with Greenkeeper
- [Greenkeeper](https://greenkeeper.io/)
- [Continuous everything with Angular, Travis CI, Firebase and Greenkeeper](https://medium.com/@jamzi/continuous-everything-with-angular-travis-ci-firebase-and-greenkeeper-6656543bd826)

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

# Performance
## Angular preloading strategy
Adding `PreloadAllModules` strategy on your `RouterModule`, you can preload all of the modules in the background asynchronously. This will help boost up the loading time and performance tremendously.
You can also ceate your own [preloading strategy](https://mehraban.com.au/2018/06/06/angular-preloading/) by implementing its `PreloadingStrategy` class.


[Baljeet Singh]: https://github.com/mbaljeetsingh
[Vlado Tesanovic]: https://github.com/vladotesanovic
[Matt Raible]: https://twitter.com/mraible
[Indermohan Singh]: https://twitter.com/imsinghk7