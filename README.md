# AngularDemo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.0.

## Spotify Lite ! (apologies to Spotify)

## Quick Start!:

Install Angular CLI:
Run:
`npm install -g @angular/cli`

Create Project:
Run:
`ng new my-angular-app`
`cd my-angular-app`
`ng serve`



## Code scaffolding

Run `ng generate component component-name` to generate a new component. This is pretty useful. Creates the files necessary for a new component inside of a new directory named after your component.
- a `component.ts` file where you place all your ts code, functions, etc.
- a `component.css` file that will give style to just this component
- a `component.html` file which will contain what you want to render onto the page
- a `spec.ts` file which (I think!) runs tests for the component

This command will also `update` your `app.module.ts` file to declare your component, which in a nutshell makes it available across the app

## Component.ts

This file will contain something similar to what you'd see in a React Component file -- a class with a constructor and member variables being exported. But it has one more thing we didn't see in React: meta-data. It looks like this:
```
@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
```
- The `selector` is what we can use to reference this component in html files. So for this one, it'd be `<app-playlist></app-playlist>`
- The `templateUrl` basically tells this component which html file to render.
- The `styleUrls` are the files from which this component will draw its style from. They can be multiple.

What's nice is this will automatically be created with  Angular CLI with a simple `ng g component component-name` command in the terminal!



# For loops and if statements
In both EJS and React we saw the ability to run for loops inside our HTML file. With EJS we could do something annoying like:
```
<% for (items in array) { %>
  <h1><%item.name%></h1>
  <h4><%item.description%></h4>
<% } %>
```

and for React something like:
```
{
  this.state.items.map(item => (
    <h1>{item.name}</h1>
    <h4>{item.description}</h4>
    ))
}
```

In Angular, a for loop will look like this:
```
  <h4
  *ngFor="let item of items  >
    {{ item.name }}
  </h4>
```
The `*ngFor` attribute attached to the `h4` element will run a for loop, based on what follows in the value of the attribute. For this example, it sort of works like a `.map`. We have a variable that names each thing iterated over (`item`), and the array we are iterating over (`items`).

```
{{ item.name }}
```
But what's this?? The double curly braces in angular will evaluate whatever is in between them into html once we compile. So for us, that will be whatever `item.name` evaluates to.

And here is an if statement:
```
<div *ngIf="item.available">
  <h4>{{item.name}} available!</h4>
</div>
```
Again, here the `*ngIf` is an attribute, and the value of that attribute is the condition that we are checking. So this means that `*ngIf="item.available"` in Angular is equivalent to `if (item.available)` in javascript. If this evaluates to true, then the element will be created. If not, it'll be skipped.



## Functions and Event Handlers

But what if we want our HTML to have some functionality or the ability to be interactive? Well, Angular has options for that as well.

Here is how we attach first an event handler, and then a pre defined function to any element.
```
<button (click)="showPrice()">View Price</button>
```

For this button, when it is clicked, it will run the `showPrice` function that is defined inside of its `component.ts` file. We add the event handler using parentheses. This will also accept `(mouseenter)`, `(mouseleave)` and other event handlers.
