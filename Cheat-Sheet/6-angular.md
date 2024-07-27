<h1 style="font-size: 50px; color: gold; opacity: 0.8; text-align: center;">Angular</h1>

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
