# Angular

- [document](https://star-academy.github.io/codestar-documents/docs/frontend/phase06-angular/)

## Components

Decorator that marks a class as an Angular component and provides configuration metadata that determines how the component should be processed, instantiated, and used at runtime.

Components are the most basic UI building block of an Angular app. An Angular app contains a tree of Angular components.

Angular components are a subset of directives, always associated with a template. Unlike other directives, only one component can be instantiated for a given element in a template.

### Create Simple Compoents

```bash
ng generate component hello-world
```

or

```bash
ng g c hello
```

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

[docs](https://angular.dev/guide/di/dependency-injection)
