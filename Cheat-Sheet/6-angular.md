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
<hr style="width: 1200px; margin-left: auto; margin-right: auto;"/>
<h3 style="width: 1000px; margin-left: auto; margin-right: auto; font-size: 30px;"><i>Lifecycles:</i></h3>
<pre style="width: 1000px; margin-left: auto; margin-right: auto; font-size: 20px;">
Life cycles are things happening to a component from construction to destruction.
Hooks for a component -> A method in their class
Hooks for the whole application -> Functions that accept callbacks
The lifecycle is as follows:
<ul>
<li>constructor: The default constructor of JS, runs when a component instantiates.</li>
<li>ngOnInit: Runs once after Angular has initialized all the component's inputs.</li>
<li>ngOnChanges: Runs every time the component's inputs have changed.</li>
<li>ngDoCheck: Runs before every time Angular checks a component's template for changes.</li>
<li>ngAfterViewInit: Runs once after all the children in the component's template (its view) have been initialized.</li>
<li>ngAfterContentInit: Runs once after all the children nested inside the component ( its content) have been initialized.</li>
<li>ngAfterViewChecked: Runs every time the component's view has been checked for changes.</li>
<li>ngAfterContentChecked: Runs every time this component content has been checked for changes.</li>
<li>afterNextRender: Runs once the next time that all components have been rendered to the DOM.</li>
<li>afterRender: Runs every time all components have been rendered to the DOM.</li>
<li>ngOnDestroy: Runs once before the component is destroyed.</li></ul>
Now some tips about the hooks:
<ul>
<li>In ngOnInit you can update the component's state based on its initial input values.</li>
<li>During initialization, the first ngOnChanges runs before ngOnInit.</li>
<li>During initialization, the first ngOnChanges runs before ngOnInit.</li>
<li>The ngOnChanges method accepts one SimpleChanges (Type) argument. This object is a Record mapping each component input name to a SimpleChange object. Each SimpleChange contains the input's previous value, its current value, and a flag for whether this is the first time the input has changed.</li>
<li>Angular destroys a component when it is no longer shown on the page, such as being hidden by NgIf or upon navigating to another page.</li>
<li>As an alternative to the ngOnDestroy method, you can inject an instance of DestroyRef. You can register a callback to be invoked upon the component's destruction by calling the onDestroy method of DestroyRef.</li>
<li>In ngDoCheck, This method runs very frequently and can significantly impact your page's performance. Avoid defining this hook whenever possible, only using it when you have no alternative.
During initialization, the first ngDoCheck runs after ngOnInit.</li>
<li>In ngAfterViewInit, we can use view quries, and in the ngAfterContentInit, we can use content queries.</li>
<li>afterRender and afterNextRender must be called in an injection context, typically a component's constructor.</li>
<li>Render callbacks do not run during server-side rendering or during build-time pre-rendering.</li>
<li>The callbacks that can be used within renders are "write", "read", "earlyRead" and "mixedReadWrite", which they must be given inside an object to the hooks, and the hooks must be imported from angular.</li>
<li>Angular provides a TypeScript interface for each lifecycle method. You can optionally import and implement these interfaces to ensure that your implementation does not have any typos or misspellings.</li></ul>
</pre>
<hr style="width: 1200px; margin-left: auto; margin-right: auto;"/>
<h3 style="width: 1000px; margin-left: auto; margin-right: auto; font-size: 30px;"><i>Dependency Injection:</i></h3>
<pre style="width: 1000px; margin-left: auto; margin-right: auto; font-size: 20px;">
Dependency Injection, or DI, is a design pattern and mechanism for creating and delivering some parts of an application to other parts of an application that require them.
Dependency injection, or DI, is one of the fundamental concepts in Angular. DI is wired into the Angular framework and allows classes with Angular decorators, such as Components, Directives, Pipes, and Injectables, to configure dependencies that they need.
Two main roles exist in the DI system: dependency consumer and dependency provider.
Angular facilitates the interaction between dependency consumers and dependency providers using an abstraction called Injector. When a dependency is requested, the injector checks its registry to see if there is an instance already available there. If not, a new instance is created and stored in the registry.
Steps:
<ul>
<li>Make a provider or a dependency, using the @Injectable decorator.</li>
<li>In the last step, you need to make sure where the provider is providing, you can either use the provideIn argument in the decorator which enables tree-shaking as well, or using the providers array in the component level, using the application config and passing the config while bootstraping the application, and finally using ngModule.</li>
<blockquote>Providing using the last three method does not enable tree shaking and thus the service will be provided even if it is not used. while using provideIn in the root level, one single instance of the service will be made and given to whom ever wants it, second method creates a new instance with each component creation, and in the forth method the service will be available to all modules used nested and hirarchily inside that module. Note that the third method is at root level, and the second method is for component and its children and decendents.</blockquote>
<li>Either using the inject hook and declaring an instance variable, or using the constructor of a component, we provide the service.</li></ul>
We use services to make our components communicate with each other (not completely what we talked about so far, but kinda of yes), also to implement DI and make logics for our UI.
<blockquote>You can inject services in other services just as said above.</blockquote>
While using the component level provider, we can use an object, which takes these properties:
<ul>
<li>provide: takes the injectable.</li>
<li>useClass: instantiates this class when the provide is needed to be injected, or used.</li>
<li>useExisting: use an existing object.</li>
<li>useFactory: takes a function to construct instances.</li>
<li>useValue: takes an static value for the instance.</li></ul>
Use an InjectionToken object as provider token for non-class dependencies. For using it, just go the config, make a token using the InjectionToken provided by angular, give it the needed parameters, and in the component, provide it using provides array, the provide parameter will be APP_CONFIG and the value parameter be variable you made. and when you want to inject it, use the @Inject decorator in the constructor, and take a variable with the type AppConfig.
When you want to run a given function in an injection context without already being in one, you can do so with runInInjectionContext. This requires access to a given injector.
Angular provides the assertInInjectionContext helper function to assert that the current context is an injection context.
With hierarchical dependency injection, you can isolate sections of the application and give them their own private dependencies not shared with the rest of the application, or have parent components share certain dependencies with its child components only but not with the rest of the component tree, and so on. Hierarchical dependency injection enables you to share dependencies between different parts of the application only when and if you need to.
There are types of injectors like NullInjector, EnvironmentInjector (provideIn Platform), ElementalInjectors, etc.
</pre>
<hr style="width: 1200px; margin-left: auto; margin-right: auto;"/>
<h3 style="width: 1000px; margin-left: auto; margin-right: auto; font-size: 30px;"><i>Pipes:</i></h3>
<pre style="width: 1000px; margin-left: auto; margin-right: auto; font-size: 20px;">
Pipes are formatters in the template (HTML). There are built-in pipes that you can use, just import them in the compoennt and use them using a pipeline.
To give them arguments, use colon, you can chain arguments and pipes.
to make a custome pipe, on a class, use the Pipe decorator, and then give it a name (which will be used in the template), and it has its own standalonity.
Also you must make that class implements PipeTransform interface, then. override the transform method, and do the login you want inside it, the first value, will be the input (or the value that the pipe used on), and after the second, the arguments.
<blockquote>If you use the pipe beside something like a ternary operator, beware! The pipe has a higher precedence than a ternary operator, so the pipe will be executed first.</blockquote>
<blockquote>Pipes are often used with data-bound values that might change based on user actions. If the data is a primitive input value, such as String or Number, or an object reference as input, such as Date or Array, Angular executes the pipe whenever it detects a change for the value.</blockquote>
You can also use the built-in AsyncPipe, so the value it has been used on will automatically subscribes to a observable, so the value will be updated later, without this pipe, the whole template must subscribe to that and consumes the values to use them.
</pre>
<hr style="width: 1200px; margin-left: auto; margin-right: auto;"/>
<h3 style="width: 1000px; margin-left: auto; margin-right: auto; font-size: 30px;"><i>Decorators and modules:</i></h3>
<pre style="width: 1000px; margin-left: auto; margin-right: auto; font-size: 20px;">
Angular offers different decorators that can be used to make deifferent aspects. You can see some of the populer decorators <a href="https://medium.com/ngconf/an-introduction-to-ngmodules-6061241e75e1">here</a>.
Modules are each part of the application, they are bigger than the component, and actually group some components related to each other. Each module might contain components, pipes, directives, services, guards, etc. They work just fine in the same way as components, or it is better to say an application, they can be used alone and show something by them selves.
We use @NgModule decorator on a class to create a module, and later on we export this class, import it somewhere else, and use it as we should do.
@NgModule decorator has some properties which is as below:
<ul>
<li>imports: we can import other modules inside our module, we must declare them here.</li>
<li>exports: we can export our components, pipes, and other thing so when this module is imported somewhere else, we can use them.</li>
<li>providers: services and guards are delared here.</li>
<li>declarations: components, directives, pipes, which we want to use it inside the module itself are declared here, the thing is when we declare something here, it will act like a private OOP access point, and when we export them, they become public and can be used some where else.</li>
<li>bootstrap: which component is the bootstrap of this module, and this module starts rendering from where.</li></ul>
</pre>
<hr style="width: 1200px; margin-left: auto; margin-right: auto;"/>
<h3 style="width: 1000px; margin-left: auto; margin-right: auto; font-size: 30px;"><i>Data bindings and templates:</i></h3>
<pre style="width: 1000px; margin-left: auto; margin-right: auto; font-size: 20px;">
- Interpolation, is that when we want to use a component variable inside the template, which will be used like this syntax "{{ variableName }}", and the value of the variable gets replaced by the value of the variable, also angular detects changes and change the value on the template itself.
- We can bind a property of an HTML tag to a variable of the class, which the syntax is as follows:
<code style="margin-top: 25px; margin-bottom: 25px;color: #29970B;">< tag [property]="variable" ></code>
And the variable is bound to the property.
- We can bind events to the method as well, the syntax is as follow:
<code style="margin-top: 25px; margin-bottom: 25px;color: #29970B;">< tag (event)="method()" ></code>
And the method is called when the event happens.
event could be something like, onclick, onmouseover, etc.
- Two way binding: A combination of both property and event binding.
For two-way data binding to work, the @Output() property must use the pattern, inputChange, where input is the name of the @Input() property. For example, if the @Input() property is size, the @Output() property must be sizeChange.
<blockquote>For property biding, the property in the component must have the @Input decorator and for event binding the property must have the @Output decorator. Also the event bounded variable must be the type of EventEmitter. After the property change, the propertyChange value must be emitted using the emit function, given the new value which is the property that has been chagned. We can also use the $event variable for the property that has been boud using the vent binding method.</blockquote>
- Control Flow is the method angular introduces to make changes in the template. The syntax is easy, @ + the statement you want, like if, for and switch.
<blockquote>There are somethings that you must know, first after the for statement, we can and is better to use a "track something" statement, this means we are giving a key to the elements iterating on, giving better performance, also in the for block, we have somethings that we can use: $count, $index, $first, $last, $even, $odd. You can also alias them in the for statement itself using a let. Also the for block can accepet a @empty statement, which you know what it does.</blockquote>
</pre>
<hr style="width: 1200px; margin-left: auto; margin-right: auto;"/>
<h3 style="width: 1000px; margin-left: auto; margin-right: auto; font-size: 30px;"><i>Routing:</i></h3>
<pre style="width: 1000px; margin-left: auto; margin-right: auto; font-size: 20px;">
For routing, we must change the config file and make sure this exists in the config:
<code style="margin-top: 25px; margin-bottom: 25px;color: #29970B;">providers: [provideRouter(routes)]</code>
Then, we must fill the routes in the config (or just an array of routes somewhere and use it):
<code style="margin-top: 25px; margin-bottom: 25px;color: #29970B;">{ path: 'path', component: component }</code>
This will generate a path, note that we must also put the router-outlet component from the angular itself in the components to make them a path, which will be rendered.
Also it seems, that the components after the path is changed, will be put inside the app component, so make sure to seprate and configure it right.
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

