<h1 style="font-size: 50px; color: gold; opacity: 0.8; text-align: center;">Angular</h1>

- [document](https://star-academy.github.io/codestar-documents/docs/frontend/phase06-angular/)

<h3 style="width: 1000px; margin-left: auto; margin-right: auto; font-size: 30px;"><i>Web frameworks:</i></h3>

<pre style="width: 1000px; margin-left: auto; margin-right: auto; font-size: 20px;">
Web frameworks are a collection of tools and libraries that provide us great flexibility, easier development for bigger and complex projects, and performance. Some popular examples are Next.JS, build on top of React library, and Angular. We use them so we have a better orginazition, performance, navigation, control and easier and more powerful development.
</pre>
<br/>
<pre style="width: 1000px; margin-left: auto; margin-right: auto; font-size: 20px;">
Angular among them has a modular structure, great performance, and testability. This is why we are talking about it right now.
It is a web framework developed by Google, and is a great choice for making SPA (Single Page Application).
</pre>
<br/>
<pre style="width: 1000px; margin-left: auto; margin-right: auto; font-size: 20px;">
Some of the key features of Angular includes:
<ul>
<li>Supports Typescript and actually, build with Typescript.</li>
<li>Has a advanced templating system so we you can easley inject your dynamic data inside it.</li>
<li>Components let you re-build, re-make, and respect the DRY rule, easier development in short. Each component has its own HTML, CSS, and JS files.</li>
<li>Modules and modular structure for better orginazition.</li>
<li>Directives let you add some custom feature to the elements of Angular.</li>
<li>Services have the job of logic and connection between components.</li>
<li>Supports Dependency Injection design pattern.</li>
<li>Router for navigating in pages.</li></ul>
</pre>
<br/>
<pre style="width: 1000px; margin-left: auto; margin-right: auto; font-size: 20px;">
Start:
<ol>
<li>Have a package manager like npm or yarn.</li>
<li>Install angular CLI command using below:
<code style="color: #29970B;">npm install -g @angular/cli</code></li>
<li>Start a new project:
<code style="color: #29970B;">ng new project-name</code></li>
</pre>
<hr style="width: 1200px; margin-left: auto; margin-right: auto;"/>
<h3 style="width: 1000px; margin-left: auto; margin-right: auto; font-size: 30px;"><i>Components:</i></h3>
<pre style="width: 1000px; margin-left: auto; margin-right: auto; font-size: 20px;">
Components are the parts of the application, each component has its own HTML, CSS, and JS/TS file. There is a contract that we name the component files
name.component.ts (we assume we are using Typescript), and test files name.component.spec.ts so there always is a good orgenize.
The following bash command generates a hello world component:
<code style="margin-top: 25px; margin-bottom: 25px;color: #29970B;">ng generate component hello-world (or) ng g c hello-world</code>
We use "@Component" decorator for our class components, which has some parameters:
<ul>
<li>selector which shows the component is rendered with what HTML tag (using that selector as a tag makes the Angular to use the component).</li>
<li>template shows a HTML tag or tags to be rendered.</li>
<li>style shows the style of that component.</li>
<li>templateUrl determines the path to the HTML file related to the component.</li>
<li>styleUrl which determines the path to the CSS file related to the component.</li></ul>
We use it above a class, and we have a component.
Now for using it, we can make a tag in the app component named with "selector", the selector we just gave the component.
Note: Also HTML and CSS file of a component has their own nmae.component.prefix rule.
</pre>

in src/app angular create `hello` folder and create some files like:

- hello.component.ts
- hello.component.spec.ts
- hello.component.html
- hello.component.css

in `hello.component.ts` file:

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  standalone: true,
  imports: [],
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.css'
})
export class HelloComponent {

}
```

import the component in `app.component.ts` file:

```ts
import { HelloComponent } from './hello/hello.component';

// and import in decorator
//...
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HelloComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
}
//...
```

[docs](https://angular.dev/api/core/Component)

## Component Lifecycle

A component's lifecycle is the sequence of steps that happen between the component's creation and its destruction. Each step represents a different part of Angular's process for rendering components and checking them for updates over time.

In your components, you can implement lifecycle hooks to run code during these steps. Lifecycle hooks that relate to a specific component instance are implemented as methods on your component class. Lifecycle hooks that relate the Angular application as a whole are implemented as functions that accept a callback.

| Phase | Method | Summary |
| :--: | :--: | :-- |
| Creation | `constructor` |  Standard JavaScript class constructor . Runs when Angular instantiates the component. |
| Change / Detection | `ngOnInit` | Runs once after Angular has initialized all the component's inputs. |
| | `ngOnChanges` |  Runs every time the component's inputs have changed. |
| | `ngDoCheck` | Runs every time this component is checked for changes. |
| | `ngAfterViewInit` | Runs once after the component's view has been initialized. |
| | `ngAfterContentInit` | Runs once after the component's content has been initialized. |
| | `ngAfterViewChecked` |Runs every time this component content has been checked for changes.|
| Rendering | `afterNextRender` |Runs once the next time that all components have been rendered to the DOM.|
| | `afterRender` |Runs every time all components have been rendered to the DOM.|
| Destruction | `ngOnDestroy` | Runs once before the component is destroyed.|

```ts
@Component({
  /* ... */
})
export class UserProfile {
  @Input() name: string = '';
  ngOnChanges(changes: SimpleChanges) {
    for (const inputName in changes) {
      const inputValues = changes[inputName];
      console.log(`Previous ${inputName} == ${inputValues.previousValue}`);
      console.log(`Current ${inputName} == ${inputValues.currentValue}`);
      console.log(`Is first ${inputName} change == ${inputValues.firstChange}`);
    }
  }
}
```

### Lifecycle interfaces

Angular provides a TypeScript interface for each lifecycle method. You can optionally import and `implement` these interfaces to ensure that your implementation does not have any typos or misspellings.

Each interface has the same name as the corresponding method without the `ng` prefix. For example, the interface for `ngOnInit` is `OnInit`.

```ts
@Component({
  /* ... */
})
export class UserProfile implements OnInit {
  ngOnInit() {
    /* ... */
  }
}
```

[docs](https://angular.dev/guide/components/lifecycle)

## Dependency injection

When you develop a smaller part of your system, like a module or a class, you may need to use features from other classes. For example, you may need an HTTP service to make backend calls. Dependency Injection, or DI, is a design pattern and mechanism for creating and delivering some parts of an application to other parts of an application that require them. Angular supports this design pattern and you can use it in your applications to increase flexibility and modularity.

Dependency injection, or DI, is one of the fundamental concepts in Angular. DI is wired into the Angular framework and allows classes with Angular decorators, such as Components, Directives, Pipes, and Injectables, to configure dependencies that they need.

Two main roles exist in the DI system: `dependency consumer` and `dependency provider`.

Angular facilitates the interaction between dependency consumers and dependency providers using an abstraction called `Injector`.

When a dependency is requested, the injector checks its registry to see if there is an instance already available there. If not, a new instance is created and stored in the registry.

Angular creates an application-wide injector (also known as the "root" injector) during the application bootstrap process.

In most cases you don't need to manually create injectors, but you should know that there is a layer that connects providers and consumers.

```ts
@Injectable({
  providedIn: 'root'
})
class HeroService {}
```

```ts
constructor(heroService: HeroService)
```

[docs](https://angular.dev/guide/di/dependency-injection)
