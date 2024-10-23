<h1 style="margin-top: 30px; text-align: center; font-size: 50px;">RxJS</h1>
<pre style="font-size: 20px; margin: 10px; padding: 20px; box-shadow: 0 0 3px rgba(0, 0, 0, 0.1); border-radius: 5px; background-color: #f2f2f2; color: black;">
The method RxJS using is observeable design pattern. Also the rxjs is installed with angular by default. In this method, we make an observable and subscribe to it, the observable shows a diagram and a procedure that shows what to do with a subscription, or an oberver. For creating the procedure, the constructor of Observable class takes a callback, which takes subscriber as inputl, and do something with it, the somthing is either next funtion, or complete, the next function passes something to the subscriber, and subscriber does something with it, and goes to the next callback in the stream, when complete, the procedure is done.

with subscribe method of observable, we can subscribe an observer.

For creating an observer, we must make an object, the object has 3 methods or callbacks, next, error, complete.
next takes an argument and does the logic you want with it, error does something if error happens, and complete is executed when the procedure with the subscribers are done.

There are also operators for the observable. Each operator does something with the subscribers it has, some common ones are map, filter, mergeMap and switchMap. You can import them from rxjs and use them on a observable. Also there is of method which takes arguments to make a publisher (observable).
Each observable has pipe method which takes operators and execute them one by one in order of it getting those.

Angular has its own HttpClientModule which makes the requests. It supports the observable design pattern and use its method to fetch data, for example you can make a service that uses HttpClient (HttpClient itself is a service and must be injected into that service), and has a method for getting the data, using the service HttpClient and sends a get or whatever request.
The method <strong>Must return this observable.</strong>
Afterwards, in a component, when we want to use it, we must subscribe to it, giving it an observer that determines what to do with the response given by the HttpClient.
<blockquote style="padding: 10px; color: white;">If you are using the service inside a module, you must import the HttpClientModule for the module you have created.</blockquote>
</pre>